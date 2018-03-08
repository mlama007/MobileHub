(function(undefined) {
	
	window.MobileHub = window.MobileHub || {};

	var exports = {};
	window.MobileHub.topics = window.MobileHub.topics || exports;

	const data = window.MobileHub.topics.data;

	/*
	These are HTML strings. JavaScript functions 
	replace the %data% placeholder text you see in them.
	*/

	// Create list with content
	const listedResources = '<li></li>';
	const resourcesContent = '<a href="%link%"><img src="%img%"/><span class="text-content"><span>%title%</span></span></a>';

	//Display content from topic
	function display() {
		const types = ['CSS', 'HTML', 'JS', 'Git', 'Learning', 'Resources', 'Frameworks', 'Practice', ];

		types.forEach(function(type){
			parseData(type);
		});
	}

	// Displays all resouces under a given topic
	// @param {string} topic
	function parseData(name) {
		data[name].forEach(function(topic){ 
			$("." + name).append(listedResources);
			const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
			const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
				function(match) {
					return replaceChars[match];
				});
			$("." + name + " li:last").append(formattedContent);	
		})
	}
	
	display();

})();