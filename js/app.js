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
	const listedResources = '<li class="Topics-Content"></li>';
	const resourcesContent = '<p><a href="%link%"><span class="text-content"><span>%title%</span></span></a><p>%description%<p><p>';

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
		//displays CSS topic resources
		data[name].forEach(function(topic){ 
			$("." + name).append(listedResources);
			//Match %data% with object
			const replaceChars={ "%link%":topic.link, "%title%": topic.title, "%description%": topic.description };
			//Replace %data% with object informtaion
			const formattedContent = resourcesContent.replace(/%link%|%title%|%description%/g,
				function(match) {
					return replaceChars[match];
				});
			$("." + name + " li:last").append(formattedContent);	
		})
	}
	
	display();

})();
