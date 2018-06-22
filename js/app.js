(function($, undefined) {

	var exports = {};
	window.MobileHub = window.MobileHub || exports;
	if(window.MobileHub) exports = window.MobileHub;

	// Dependencies
	const filter = window.MobileHub.Filter;
	const resources = window.MobileHub.Resources;
	const categories = window.MobileHub.Categories.data;
	const contributors = window.MobileHub.Contributors.data;
	
	/*
	These are HTML strings. JavaScript functions 
	replace the %data% placeholder text you see in them.
	*/

	// Img and intro to each category
	const categoryDetails = '<h1 class = "categoryName">%title%</h1><p class="intro header-content">%intro%</p>';

	// Create list with content
	const listedResources = '<li class="Topics-Content flex-item"></li>';
	const resourcesContent = '<p><a href="%link%" target="_blank"><span class="text-content"><span>%title%</span></span></a><p>%description%</p></p>';

	//Display all content from all topics
	function displayAll() {
		
		const categories = window.MobileHub.Categories.getCategories();
		categories.forEach(function(category){
			parseResources(category);
		});
		categories.forEach(function(category){
			categoriesIntro(category);
		});
	}

	// Display all resources given and displays in browser
	function parseResources(name) {
		//displays Category topic resources
		resources[name].forEach(function(resource){ 
			$(".articleList ." + name).append(listedResources);
			//Match %data% with object
			const replaceChars={ "%link%": resource.link, "%title%": resource.title, "%description%": resource.description };
			//Replace %data% with object informtaion
			const formattedContent = resourcesContent.replace(/%link%|%title%|%description%/g,
				function(match) {
					return replaceChars[match];
				});
			$(".articleList ." + name + " li:last").append(formattedContent);	
		})		
	}

	// 
	function parseFilteredResources(resources) {

	}

	// Display all content from topic
	function displayCategory(category) {
		displayCategoryProperty(category);
	}

	// Display all content from topic matching field
	function displayCategoryProperty(category, property, searchText) {
		filter.setSearchCriteria({categories: category, propertyText: { property: property, text: searchText }});
		parseFilteredResources(filter.getFilteredResults());
	}

	// Categories title and intro displayed
	function categoriesIntro(name){
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
			case 'Beginner':
				// selected category and difficulty
				displayCategoryProperty('CSS', 'difficulty', difficulty);
			break;
			case 'Intermediate':
				// selected category and difficulty
				displayCategoryProperty('Intermediate', 'difficulty', difficulty);;
			break;
			case 'Advanced':
				// selected category and difficulty selected
				displayCategoryProperty('Advanced', 'difficulty', difficulty);;
			break;
			default:
				displayCategory("CSS");
			break;
		}
	};	

})(jQuery);
