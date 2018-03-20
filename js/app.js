(function(undefined) {

	var exports = {};
	window.MobileHub = window.MobileHub || exports;
	if(window.MobileHub) exports = window.MobileHub;

	// Dependencies
	const filter = window.MobileHub.filter;
	const topics = window.MobileHub.topics.data;
	const categories = window.MobileHub.categories.data;
	const contributors = window.MobileHub.contributors.data;
	
	/*
	These are HTML strings. JavaScript functions 
	replace the %data% placeholder text you see in them.
	*/

	// Img and intro to each category
	const categoryDetails = '<h1 class = "categoryName">%title%</h1><p class="intro header-content">%intro%</p>';

	// Create list with content
	const listedResources = '<li class="Topics-Content"></li>';
	const resourcesContent = '<p><a href="%link%" target="_blank"><span class="text-content"><span>%title%</span></span></a><p>%description%<p><p>';

	//Display all content from all topics
	function displayAll() {
		const types = ['CSS', 'HTML', 'JS', 'Git', 'Learning', 'Resources', 'Frameworks', 'Practice', ];
		types.forEach(function(type){
			parseTopic(type);
		});
		types.forEach(function(type){
			catIntro(type);
		});
	}

	// Display all content from topic
	function displayTopic(topic) {
		parseTopic(topic);
	}

	// Display all content from topic matching field
	function displayTopicField(topic, field) {
		let filteredResources = filter.setSearchCriteria(topic, field, "");
		parseResources(filteredResources);
	}

	// Displays all resources under a given topic and displays in browser
	// @param {string} topic
	function parseTopic(name) {
		//displays Category topic resources
		topics[name].forEach(function(topic){ 
			$(".articleList ." + name).append(listedResources);
			//Match %data% with object
			const replaceChars={ "%link%":topic.link, "%title%": topic.title, "%description%": topic.description };
			//Replace %data% with object informtaion
			const formattedContent = resourcesContent.replace(/%link%|%title%|%description%/g,
				function(match) {
					return replaceChars[match];
				});
			$(".articleList ." + name + " li:last").append(formattedContent);	
		})
	}

	// Display all resources given and displays in browser
	function parseResources(resources) {
		//displays Category topic resources
		resouces.forEach(function(resource){ 
			$(".articleList ." + name).append(listedResources);
			//Match %data% with object
			const replaceChars={ "%link%":resource.link, "%title%": resource.title, "%description%": resource.description };
			//Replace %data% with object informtaion
			const formattedContent = resourcesContent.replace(/%link%|%title%|%description%/g,
				function(match) {
					return replaceChars[match];
				});
			$(".articleList ." + name + " li:last").append(formattedContent);	
		})		
	}

	// Categories title and intro displayed
	function catIntro(name){
		const category = categories[name];
		// console.log(category);
		(function data(category){ 
			//console.log(category);
			//Match %data% with object
			const replaceChars1={ "%title%": category.title, "%intro%": category.intro};
			//Replace %data% with object informtaion
			const formattedContent1 = categoryDetails.replace(/%title%|%intro%/g,
				function(match) {
					return replaceChars1[match];
				});
			$(".header2 ." + name).append(formattedContent1);	
		})(category);
	}

	displayAll();

	// Tied to exports to make it usable in HTML
	exports.show = function(difficulty) {
		switch (difficulty) {
			case 'All':
				// need way to get topic selected
				displayTopic("CSS");
			break;
			case 'Beginner':
				// need way to get topic and difficulty selected
				displayTopicField("CSS", difficulty);;
			break;
			case 'Intermediate':
				// need way to get topic and difficulty selected
				displayTopicField("Intermediate", difficulty);;
			break;
			case 'Advance':
				// need way to get topic and difficulty selected
				displayTopicField("Advance", difficulty);;
			break;
		}
	};

	

})();
