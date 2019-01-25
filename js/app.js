(function($, undefined) {

	var exports = {};
	window.MobileHub = window.MobileHub || exports;
	if(window.MobileHub) exports = window.MobileHub;

	// Dependencies
	const filter = window.MobileHub.Filter.filter;
	const resources = window.MobileHub.Resources;
	const categories = window.MobileHub.Categories.data;
	const contributors = window.MobileHub.Contributors.data;
	
	window.onload = function() {
		// displayDataAll();
	};

	/*
	These are HTML strings. JavaScript functions 
	replace the %data% placeholder text you see in them.
	*/

	// Img and intro to each category
	const categoryDetails = '<h1 class = "categoryName">%title%</h1><p class="intro header-content">%intro%</p>';

	// Create list with content
	const listedResources = '<li class="category-content__item flex-item"></li>';
	const resourcesContent = '<p><a href="%link%" target="_blank"><span class="text-content"><span>%title%</span></span></a><p>%description%</p></p>';

	//Display all content from all topics
	function displayDataAll() {
		
		const categories = window.MobileHub.Categories.getCategories();
		categories.forEach(function(category){
			parseResources(category);
			categoriesIntro(category);
		});
	}

	//
	// Get data from filter based on categories
	// @param {string[]}
	//
	function displayDataCategory(categories) {
		displayCategory(categories);
	}

	const propertyText = function (property, text) {
		this.property = property;
		this.text = text;
	};

	// Get data from filter based on user words entered in search input
	// @param {string[]}
	//
	function displayDataSearch(searchTerms) {
		const propertyTexts = [];
		
		// Parse searchTerms into propertyText object
		searchTerms.forEach(term => {
			const pt = new propertyText(undefined, term);
			propertyTexts.push(pt);
		});

		// Call filter with propertyText array
		displayCategoryPropertyTexts(undefined, propertyTexts);
	}

	// Display content from selected difficulties
	function displayDataDifficulty(difficulty) {
		displayCategoryProperty(undefined, 'difficulty', difficulty);
	}

	// Clear all resources from DOM
	function removeAll() {
		const articleLists = document.querySelector('.articleList');
		Array.from(articleLists.children).forEach(articleList => {
			articleList.innerHTML = '';
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
	function parseFilteredResources(name, resources) {
		resources.forEach(function(resource){ 
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
	function parseFilteredResource(name, resource) {
		$(".articleList ." + name).append(listedResources);
		//Match %data% with object
		const replaceChars={ "%link%": resource.link, "%title%": resource.title, "%description%": resource.description };
		//Replace %data% with object informtaion
		const formattedContent = resourcesContent.replace(/%link%|%title%|%description%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".articleList ." + name + " li:last").append(formattedContent);
	}

	// Display all content from category
	function displayCategory(categories) {
		displayCategoryProperty(categories);
	}

	// Display all content from category matching field
	function displayCategoryProperty(categories, property, searchText) {
		filter.setFilterCriteria({categories: categories, propertyText: [{ property: property, text: searchText }]});
		var filteredResults = filter.getFilteredResults();
		filteredResults.forEach(result => {
			parseFilteredResource(result.category, result);
		});
	}

	// Display all content matching categories and propertyTexts
	function displayCategoryPropertyTexts(categories, propertyTexts) {
		filter.setFilterCriteria({categories: categories, propertyText: propertyTexts});
		var filteredResults = filter.getFilteredResults();
		filteredResults.forEach(result => {
			parseFilteredResource(result.category, result);
		})
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

	// Displays all resources
	exports.displayDataAll = displayDataAll;

	// Displays selected categories resources
	exports.displayDataCategory = displayDataCategory;

	// Displays search resources
	exports.displayDataSearch = displayDataSearch;

	// Displays selected difficulties resources
	exports.displayDataDifficulty = displayDataDifficulty;

	exports.removeAll = removeAll;

	// Displays resources of a given category
	// Tied to exports to make it usable in HTML
	exports.showCategory = function(category) {
		if (category) {
			// selected category and difficulty
			displayCategoryProperty(category);
		}
	};

	// Displays resources of a given difficulty
	exports.showDifficulty = function(difficulty) {
		displayCategoryProperty(undefined, 'difficulty', difficulty);
	}

})(jQuery);
