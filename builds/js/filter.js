(function(undefined){
    window.MobileHub = window.MobileHub || {};
    
    const exports = {};
    window.MobileHub.filter = window.MobileHub.filter || exports;

    // Dependencies
    const data = window.MobileHub.topics.data;
    const categories = window.MobileHub.categories.data;

    const filter = {
        setAllTopics(topics = []) {
            // Array of strings
            this.allTopics = topics;
        },
        // Topics: Array of strings  
        // fieldText: Array of object {field: '', text: []} 
        setSearchCriteria(topics = [], fieldText = {field:'', text: []}) {
            this.topics = topics;
            this.fieldText = fieldText;
        },
        // Modify to allow search by variable number of topics and fieldText objs
        searchTopicsByField() {
            let matchedResources = [];
            // Topics ex: CSS, JS, HTML, etc
            for(var resourceIndex = 0; resourceIndex < data[this.topic].length; resourceIndex++){
                // Resource is an item in a topic
                // TODO: change to using an Array.filter
                for(var field in data[this.topic][resourceIndex]){
                    if(field.toLowerCase() === this.field.toLowerCase() ) {
                        if(data[this.topic][resourceIndex][field].toLowerCase() === this.text.toLowerCase())
                            matchedResources.push(data[this.topic][resourceIndex]);
                            break;
                    }
                }
            }
            return matchedResources;
        },
        searchAllTopicsByField() {
            let matchedResources = [];
        },
    }
    
    
    exports.filter = Object.create(filter);
    var CssFilterByDifficulty = Object.create(filter);
    // Example of how to use filter
    // @params{string[], {string, string[]}} (topic, fieldText)
     CssFilterByDifficulty.setSearchCriteria("HTML", "difficulty", "Intermediate");
     let allTopics = (function() { 
         let topics = [];
         for(var category in categories){
             topics.push(category);
        }}
     )();
     CssFilterByDifficulty.setAllTopics(allTopics);
     console.log(CssFilterByDifficulty.searchTopicsByField());
     CssFilterByDifficulty.na();
})();