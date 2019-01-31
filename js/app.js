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

	// Display given resource in UI
	function parseFilteredResource(name, resource) {
		$('.articleList .' + name).removeClass('hidden');
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

	// Display all content from category matching field
	function displayCategoryProperty(categories, property, searchText) {
		filter.setFilterCriteria({categories: categories, propertyText: [{ property: property, text: searchText }]});
		var filteredResults = filter.getFilteredResults();
		filteredResults.forEach(result => {
			parseFilteredResource(result.category, result);
		});
	}

	// Displays categories title and intro
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

	// Create FilterCriteria for filter
	// @param {string[]} categories
	// @param {string[]} difficultites
	// @param {string[]} terms
	// @returns 
	function createFilterCriteria(categories, difficulties, terms) {
		const filterCriteriaConstructor = {
			create(categories, propertyText) {
				this.categories = categories;
				this.propertyText = propertyText;
			}
		};

		const propertyTextConstructor = {
			create(property, text) {
				this.property = property;
				this.text = text;
			}
		};

		let nullPropertyTexts = [];
		if (!difficulties && !terms) {
			const propertyText = Object.create(propertyTextConstructor);
			propertyText.create(undefined, undefined);
			nullPropertyTexts.push(propertyText);
		}

		// Build propertyText for difficulties
		const difficultiesPropertyTexts = [];

		if (difficulties && Array.isArray(difficulties) && difficulties.length) {
			const propertyText = Object.create(propertyTextConstructor);
			

			if (difficulties[0].toLowerCase() === 'all') {
				propertyText.create('difficulty', undefined);
				difficultiesPropertyTexts.push(propertyText);				
			}
			else {
				propertyText.create('difficulty', difficulties);
				difficultiesPropertyTexts.push(propertyText);
			}
		}

		// Build propertyText for terms
		const termsPropertyTexts = [];
		if (terms && terms.length) {
			terms.forEach(term => {
				const propertyText = Object.create(propertyTextConstructor);
				propertyText.create(undefined, term);
				termsPropertyTexts.push(propertyText);
			});
		}

		const propertyTextCombined = [...nullPropertyTexts, ...difficultiesPropertyTexts, ...termsPropertyTexts];
		
		const filterCriteria = Object.create(filterCriteriaConstructor);
		filterCriteria.create(categories, propertyTextCombined)
		return filterCriteria;		
	}

	function getFilteredResources(filterCriteria) {
		filter.setFilterCriteria(filterCriteria);
		
		var filteredResults = filter.getFilteredResults();

		return filteredResults;
	}

	function addFilterDataToUI(results) {
		results.forEach(result => {
			parseFilteredResource(result.category, result);
		})
	}

	function filterResources(categories, difficulties, terms) {
		const filterCriteria = createFilterCriteria(categories, difficulties, terms);
		const filteredResults = getFilteredResources(filterCriteria);

		addFilterDataToUI(filteredResults);
	}

	/**********************************/
	// Public Functions
	/**********************************/

	exports.displayFilteredData = filterResources;

	
	/*********************************/
	// Test functions
	/*********************************/
	
	// Displays resources of a given category
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

	exports.showSearchTerms = function(terms) {
		var searchTerms = terms.split(' ');
		
		displayCategoryProperty(undefined, undefined, searchTerms);
	}

})(jQuery);
