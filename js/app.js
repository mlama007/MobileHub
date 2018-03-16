(function(undefined) {
	
	window.MobileHub = window.MobileHub || {};

	var exports = {};
	window.MobileHub.topics = window.MobileHub.topics || exports;

	const data = window.MobileHub.topics.data;
	const data2 = window.MobileHub.categories.data;
	
	/*
	These are HTML strings. JavaScript functions 
	replace the %data% placeholder text you see in them.
	*/

	// Img and intro to each category
	const categoryDetails = '<h1 class = "categoryName">%title%</h1><p class="intro header-content">%intro%</p>';

	// Create list with content
	const listedResources = '<li class="Topics-Content"></li>';
	const resourcesContent = '<p><a href="%link%"><span class="text-content"><span>%title%</span></span></a><p>%description%<p><p>';

	//Display content from topic
	function display() {
		const types = ['CSS', 'HTML', 'JS', 'Git', 'Learning', 'Resources', 'Frameworks', 'Practice', ];
		types.forEach(function(type){
			parseData(type);
		});
		types.forEach(function(type){
			catIntro(type);
		});
	}
	// Displays all resouces under a given topic
	// @param {string} topic
	function parseData(name) {
		//displays Category topic resources
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

	// Categories title and intro displayed
	function catIntro(name){
		const category = data2[name];
		// console.log(category);
		function data(category){ 
			console.log(category);
			//Match %data% with object
			const replaceChars1={ "%title%": category.title, "%intro%": category.intro};
			//Replace %data% with object informtaion
			const formattedContent1 = categoryDetails.replace(/%title%|%intro%/g,
				function(match) {
					return replaceChars1[match];
				});
			$(".header2 ." + name).append(formattedContent1);	
		}
		data(category);
	}

	display();

})();
