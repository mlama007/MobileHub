(function (undefined) {
	// appView handles user events	

	var exports = {};
	window.MobileHub = window.MobileHub || {};
	window.MobileHub.Events = exports;
	
	//-- Dependencies Section --//
	const categories = window.MobileHub.Categories.data;
	
	//--- Run when page loads ---//
	window.onload = function() {

	};

	//--- Events Section ---//

	// Category Filter event
	const categoryFilterItems = Array.from(document.querySelectorAll('.category-filter__item'));
	const difficultyFilterItems = Array.from(document.querySelectorAll('.filterflex-item[data-difficulty]'));
	const searchFilter = document.querySelector('.searchForm [name="resources-search"]');

	categoryFilterItems.forEach(filterItem => {
		filterItem.addEventListener('click', event => {
			const element = event.currentTarget;

			// Toggle Category selected state
			element.dataset.selected = !(element.dataset.selected === 'true');
			
			// Remove all data from DOM
			// Hide all elements
			removeAll();

			// Get categories selected
			const selectedCategories = filterResources(categoryFilterItems, difficultyFilterItems, searchFilter.value).selectedCategories;
			console.info('[filterResources: selectedCategories]', selectedCategories);

			
			// Get data and remove .hidden from matching content UI elements
			if (selectedCategories && selectedCategories.length) {
				// Only display data when category is selected				
				// window.MobileHub.displayDataCategory(categoryFilterSeletectedArray);
				
				
				// Get content based on categories selected
				const categoryContentList = Array.from(document.querySelectorAll('.category-content')).filter(content => {
					return selectedCategories.includes(content.dataset.category);
				});

				categoryContentList.forEach(categoryContentItem =>
					{
						categoryContentItem.classList.remove('hidden');
					}
				);
				// Debug trace: show which content element to unhide (remove .hide)
				console.info('[categoryContentList]: ', categoryContentList);
			}
		});
	});

	// Search form submit event 
	document.querySelector('form.searchForm').addEventListener('submit', event => { 
		console.info('[form event]', 'event.cancelable', event.cancelable);
		event.preventDefault();

		// Grab search terms
		const search = document.querySelector('[name="resources-search"]');
		const input = search.value.split(' ');

		// Remove old resources
		removeAll();

		// Search has a non-whitespace value
		if (search.value && input.length) {
			const results = window.MobileHub.displayDataSearch(input);
			
			// .hidden hides element
			// remove .hidden to show certain resource category
			// TODO: Improvement is to remove .hidden no more than once per returned //#endregionscategory
			results.forEach(result => {
				document.querySelector(`.category-content[data-category="${result.category}"]`).classList.remove('hidden');
			});
		}
	});

	// Search input focus event
	// Show submit magnifying glass when input receives focus
	document.querySelector('[name="resources-search"]').addEventListener('focus', event => {
		const element = event.target;
		// console.info('[search input backgroundColor]', window.getComputedStyle(element, null).backgroundColor);
		// if (window.getComputedStyle(element, null).backgroundColor === 'rgb(237, 237, 237)') {
		// 	console.info('[search]');
		// }

		const submit = document.querySelector('.searchForm__submit');
		submit.classList.add('searchForm__submit--left'); 
		console.info('[resources-search]', 'added searchForm__submit--left');
	});

	// Searh input blur event
	// Remove submit maginfying glass
	document.querySelector('[name="resources-search"]').addEventListener('blur', event => {
		const submit = document.querySelector('.searchForm__submit');
		console.info(document.activeElement.tagName);
		// if (submit.classList.value === document.activeElement.classList.value) {
			submit.classList.remove('searchForm__submit--left');
			console.info('[resources-search]', 'removed searchForm__submit--left');
		// }
	});

	// All difficulty filter event
	document.querySelector('[data-difficulty="All"]').addEventListener('click', event => {
		const element = event.target;
		// Deselect Beginner, Imtermidate, & Advanced difficulty
		difficultyFilterItems.forEach(elem => {
			if (elem.getAttribute('data-difficulty') !== 'All') {
				elem.dataset.selected = false;
			}
		});
		// Toggle All difficulty
		element.dataset.selected = !(element.dataset.selected === "true");

		// Remove old resources from DOM
		removeAll();

		// .hidden hides all results
		const results = document.querySelectorAll('.category-content');
		if (element.dataset.selected === 'true') {
			// Show results
			window.MobileHub.displayDataAll();
			results.forEach(result => result.classList.remove('hidden'));
			console.info('[All Show]');
		}
		else {
			// Hide results
			results.forEach(result => result.classList.add('hidden'));
			console.info('[All Hide]');
		}
	});

	// Beginner, Intermediate, Advanced difficulty filter event
	const biaFilterArray = Array.from(document.querySelectorAll('[data-difficulty]'))
	
	biaFilterArray
	// Remove 'All' from list
	.filter(difficulty => difficulty.getAttribute('data-difficulty') != 'All')
	.forEach(element => {
		// Select / Deselect each clicked difficulty
		element.addEventListener('click', event => {
			document.querySelector('[data-difficulty="All"]').dataset.selected = false;

			// Toggle selected state
			let selected = event.target;
			selected.dataset.selected = !(selected.dataset.selected === "true");

			const results = document.querySelectorAll('.category-content');
			console.info('[biaFilterArray]', biaFilterArray);

			let difficultiesSelected = [];
			biaFilterArray.forEach(element => {
				if (element.dataset.selected === 'true') {
					console.info('[selected]', element.dataset.selected);
					// Store difficulties selected
					difficultiesSelected.push(element.dataset.difficulty);
				}
			});
			
			// Remove old resources
			removeAll();
			// Get and show newest resources
			difficultiesSelected.forEach(difficulties => window.MobileHub.displayDataDifficulty(difficulties));
			
			// Check if any difficulty filter is selected
			// TODO: remove .hidden only from categories with data
			if (biaFilterArray.every(element => {
				console.info('[selected]', element.dataset);
				return element.dataset.selected === 'false';
			})) {
				// Hide results
				results.forEach(result => result.classList.add('hidden'));
			}
			else {
				// Show results
				results.forEach(result => result.classList.remove('hidden'));
			}
		});
	});

	// Helper Functions

	// Get all selected categories
	// @returns string[]
	function filterResources(categories, difficulties, searchTerms) {
		
		const selectedCategories = getSelectedCategories(categories) || undefined;
		const selectedDifficulties = getSelectedDifficulties(difficulties) || undefined;
		const terms = SearchTerms(searchTerms) || '';
		
		// Do not use filter if there are no filterable items
		if ((!selectedCategories || !selectedCategories.length) && 
		(!selectedDifficulties || !selectedDifficulties.length) 
		&& !terms) return [];

		window.MobileHub.displayFilteredData(selectedCategories, selectedDifficulties, terms);

		return {
			selectedCategories,
			selectedDifficulties,
			terms
		};

	}

	function getSelectedCategories(filters) {
		const selectedCategories = filters.filter(filter => filter.dataset.selected === 'true')
		.map(filter => filter.dataset.category);

		return (selectedCategories && selectedCategories.length) ? selectedCategories : undefined;
	};

	function getSelectedDifficulties(filters) {
		const selectedDiffulties = filters.filter(filter => filter.dataset.selected === 'true')
		.map(filter => filter.dataset.difficulty);

		return (selectedDiffulties && selectedDiffulties.length) ? selectedDiffulties : undefined;
	}

	// Split search terms
	// @param {string} terms
	// @returns {string[]}
	function SearchTerms(terms) {
		return terms.split(' ');
	}

	
	// Clear all resources from DOM
	function removeAll() {
		const articleLists = document.querySelector('.articleList');
		Array.from(articleLists.children).forEach(articleList => {
			articleList.innerHTML = '';
			articleList.classList.add('hidden');
		});
	}

})();