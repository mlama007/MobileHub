(function(undefined){
    window.MobileHub = window.MobileHub || {};
    
    let exports = {};
    window.MobileHub.filter = window.MobileHub.filter || exports;

    // Dependencies
    let data = window.MobileHub.topics.data;
    let categories = window.MobileHub.categories.data;

    let filter = {
        setSearchCriteria: function(topic, field, text) {
            this.topic = topic;
            this.field = field;
            this.text = text;
        },
        searchByField: function(){
            let matchedResources = [];
            // Topics ex: CSS, JS, HTML, etc
            for(var resourceIndex = 0; resourceIndex < data[this.topic].length; resourceIndex++){
                // Resource is an item in a topic
                // TODO: change to using a filter
                for(var field in data[this.topic][resourceIndex]){
                    if(field.toLowerCase() === this.field.toLowerCase() ) {
                        if(data[this.topic][resourceIndex][field].toLowerCase() === this.text.toLowerCase())
                            matchedResources.push(data[this.topic][resourceIndex]);
                            break;
                    }
                }
            }
            return matchedResources;
        }
    }
    
    
    exports.filter = Object.create(filter);
    CssFilterByDifficulty = Object.create(filter);
    // Example of how to use filter
    // @params{string, string, string} (topic, field, searchText)
     CssFilterByDifficulty.setSearchCriteria("HTML", "difficulty", "Intermediate");
     console.log(CssFilterByDifficulty.searchByField());
})();