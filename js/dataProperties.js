(function(undefined){

    let exports = {};
    window.MobileHub = window.MobileHub || {};
    
    window.MobileHub.Properties = exports;
    
    exports.data = [
        {
            name: 'description',
            searchable: true
        },
        {
            name: 'difficulty',
            searchable: true,
        },
        {
            name: 'link',
            searchable: false,
        },
        {
            name: 'tag',
            searchable: true,
        },
        {
            name: 'title',
            searchable: true,
        },
        {
            name: 'type',
            searchable: true,
        }
    ];

    // Returns the searchable properties of the data collection by default
    // @params boolean
	exports.getProperties = function(all = false) {
        var properties = [];
        exports.data.forEach(function(property){
            if (property.searchable || all)
            properties.push(property.name);
        });
		return properties;
    };
})();