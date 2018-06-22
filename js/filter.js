(
    function(undefined) {
    'use strict';

    window.MobileHub = window.MobileHub || {};
    
    const exports = {};
    window.MobileHub.Filter = exports;

    // Dependencies
    const resources = window.MobileHub.Resources;
    const categories = window.MobileHub.Categories;
    const properties = window.MobileHub.Properties;
//{property = 'difficulty', text = ['Beginner', 'Intermediate, Advanced']}
    const _filter = {
        allCategories: categories.getCategories(),
        setFilterCriteria({categories = undefined, propertyText = [{property: 'difficulty', text:'Beginner'}]} = {}) {
            this.categories = categories;
            this.propertyText = propertyText;
            this.allTextsHaveValue = this.propertyText.every(function(pt) {
                return (typeof pt.text == 'string' && !!pt.text.trim() && !Array.isArray(pt.text)) 
                || (Array.isArray(pt.text) && pt.text.length);
            });
        },
        // Returns the filtered data
        getFilteredResults() {
            var matchedResources = [];
            // Topics ex: CSS, JS, HTML, etc

            // if no text value provided 
            // return all resources in the category provided
            // if no category provided and no text value
            // return all resources
            if (!this.allTextsHaveValue) {
                if (Array.isArray(this.categories) && this.categories.length) {
                    for (var cIndex=0; cIndex < this.categories.length; cIndex++) {
                        matchedResources.push(...resources[this.categories[cIndex]]);
                    }
                }
                else if (typeof this.categories === 'string' && this.categories.trim) {
                    matchedResources.push(...resources[this.categories]);
                }
                else {
                    for ( var category in resources) {
                        matchedResources.push(...resources[category]);
                    }                    
                }
                return matchedResources;
            }

            matchedResources.push(..._getResourceCategory(resources, this.categories, this.propertyText));

            return matchedResources;
        },
    }

    
    // Return a searches a specific category of resources if provided
    // If no category is provided, searches all categories
    // @params {array, string|array, array}
    // @returns {array} matching resources
    function _getResourceCategory(allResources, resourceCategory, propertyText) {
        var resourcesMatching = [];
        // search only provided Categories
        if (Array.isArray(resourceCategory) && resourceCategory.length) {
            for (var i in resourceCategory) {
                resourcesMatching.push(..._getResource(allResources[resourceCategory[i]], propertyText));                
            }
        }
        else if (typeof resourceCategory === 'string') {
            resourcesMatching(..._getResource(allResources[resourceCategory], propertyText));
        }
        // search all Categories
        else if (resourceCategory === undefined || resourceCategory === 'undefined' ) {
            var catergoryArray = categories.getCategories();
            for(var cIndex=0; cIndex < catergoryArray.length; cIndex++) {
                resourcesMatching.push(..._getResource(allResources[catergoryArray[cIndex]], propertyText));
            }
        }
        else {
            throw new Error('Unsupported categories provided')
        }
        
        // Filter out null values
        resourcesMatching = resourcesMatching.filter(function(item) {
            return item !== null && item !== undefined; // undefined is temporary solution
        });
        
        return [... new Set(resourcesMatching)];
    }

    // Search a resource
    // @params {array, array} resources, propertyText
    // @returns {array} matching resources
    function _getResource(resourcesForOneCategory, propertyText) {
        var resourcesMatching = [];
        for (var i=0; i < resourcesForOneCategory.length; i++) {
            for (var ptIndex=0; ptIndex < propertyText.length; ptIndex++) {
                for (var resourceProperty in resourcesForOneCategory[i]) {
                    resourcesMatching.push(_getPropertyMatch(resourcesForOneCategory[i], resourceProperty, propertyText[ptIndex]));
                }
            }
        }
        return resourcesMatching;
    }

    // Searches if a property matches a given property
    // If no propertyToMatch is provided, searches all properties
    // @params {object, string, string}
    // @returns {object} resource with a property that matches text
    function _getPropertyMatch(resource, property, propertyTextToMatch) {
        if (!propertyTextToMatch.property || (property === propertyTextToMatch.property)) {
            return _getPropertyTextInResource(resource, property, propertyTextToMatch.text);
        }
    }

    // Search if match of text is found in resource property
    // @params {object, string, string}
    // @returns {object} resource with a property that matches text
    function _getPropertyTextInResource(resource, matchedProperty, textToMatch) {
        // check for both string case
        if (typeof textToMatch === 'string') {
            if (typeof resource[matchedProperty] === 'string') {
                if (resource[matchedProperty].toLowerCase().includes(textToMatch.toLowerCase())) 
                    return resource;
            }
            else if (Array.isArray(resource[matchedProperty])) {
                for (var rIndex=0; rIndex < resource[matchedProperty].length; rIndex++) {
                    if (resource[matchedProperty][rIndex].toLowerCase().includes(textToMatch.toLowerCase()))
                        return resource;
                }
            }
        }
        else if (Array.isArray(textToMatch)) {
            if (typeof resource[matchedProperty] === 'string') {
                for (var ttmIndex=0; ttmIndex < textToMatch.length; ttmIndex++) {
                    if (resource[matchedProperty].toLowerCase().includes(textToMatch[ttmIndex].toLowerCase()))
                        return resource;
                }
            }
            else if (Array.isArray(resource[matchedProperty])) {
                for (var rIndex=0; rIndex < resource[matchedProperty].length; rIndex++) {
                    for (var ttmIndex=0; ttmIndex < textToMatch.length; ttmIndex++) {
                        if (resource[matchedProperty][rIndex].toLowerCase().includes(textToMatch[ttmIndex].toLowerCase())) {
                            return resource;
                        }
                    }
                }
            }
        }
        return null; // no match
    }
    
    exports.filter = Object.create(_filter);

    // Examples
    var _filterByDifficulty = Object.create(_filter);
    // Example of how to use filter
    // @params{string[], {string, string[]}} (topic, fieldText)
     let allCategories = categories.getCategories();
     //CssFilterByDifficulty.setAllCategories({categories: categories.getCategories()});
     _filterByDifficulty.setFilterCriteria({propertyText: [{property: 'difficulty', text: 'beginner'}]});
     //console.log("Filtered Results: ", _filterByDifficulty.getFilteredResults())
})();