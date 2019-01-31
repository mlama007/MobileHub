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

			// Get data from categories selected
			const filterOptions = filterResources(categoryFilterItems, difficultyFilterItems, searchFilter.value);

			// TODO: Remove or Comment
			// Debugging Statement
			console.info('[CategoryFilter:]', `Category: ${filterOptions.selectedCategories} 
				Difficulty: ${filterOptions.selectedDifficulties}
				Search Terms: ${filterOptions.terms}`);
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

		const filterOptions = filterResources(categoryFilterItems, difficultyFilterItems, searchFilter.value);
		
		// TODO: Remove or Comment
		// Debugging Statement
		console.info('[SearchInputFilter:]', `Category: ${filterOptions.selectedCategories} 
			Difficulty: ${filterOptions.selectedDifficulties}
			Search Terms: ${filterOptions.terms}`);
	});

	// All difficulty filter event
	document.querySelector('[data-difficulty="All"]').addEventListener('click', event => {
		const element = event.target;
		
		// Toggle All difficulty
		element.dataset.selected = !(element.dataset.selected === "true");

		// Deselect Beginner, Intermediate, & Advanced difficulties
		difficultyFilterArray.filter(filter => filter.dataset.difficulty !== 'All')
		.forEach(difficulty => {
			difficulty.dataset.selected = false;
		});

		// Remove old resources from DOM
		removeAll();

		// Show results of all selected filters
		const filterOptions = filterResources(categoryFilterItems, difficultyFilterItems, searchFilter.value);

		// TODO: Remove or Comment
		// Debugging Statement
		console.info('[AllFilter:]', `Category: ${filterOptions.selectedCategories} 
			Difficulty: ${filterOptions.selectedDifficulties}
			Search Terms: ${filterOptions.terms}`);
	});

	// Beginner, Intermediate, Advanced difficulty filter event
	const difficultyFilterArray = Array.from(document.querySelectorAll('[data-difficulty]'))
	
	difficultyFilterArray
	// Remove 'All' from list
	.filter(filter => filter.dataset.difficulty != 'All')
	.forEach(element => {
		// Select / Deselect each clicked difficulty
		element.addEventListener('click', event => {
			document.querySelector('[data-difficulty="All"]').dataset.selected = false;

			// Toggle selected state
			let selected = event.target;
			selected.dataset.selected = !(selected.dataset.selected === "true");
			
			// Remove old resources
			removeAll();

			// Get data based on filters selected
			const filterOptions = filterResources(categoryFilterItems, difficultyFilterItems, searchFilter.value);

			// TODO: Remove or Comment
			// Debugging Statement
			console.info('[biaFilter:]', `Category: ${filterOptions.selectedCategories} 
				Difficulty: ${filterOptions.selectedDifficulties}
				Search Terms: ${filterOptions.terms}`);
		});
	});
	
	//-- Submit Button Show/Hide Events --//

	// Search input focus event
	// Show submit magnifying glass when input receives focus
	document.querySelector('[name="resources-search"]').addEventListener('focus', event => {
		const element = event.target;

		const submit = document.querySelector('.searchForm__submit');
		submit.classList.add('searchForm__submit--left'); 
		console.info('[resources-search]', 'added searchForm__submit--left');
	});

	// Searh input blur event
	// Remove submit maginfying glass when input losses focus
	document.querySelector('[name="resources-search"]').addEventListener('blur', event => {
		const submit = document.querySelector('.searchForm__submit');
		console.info(document.activeElement.tagName);
		// if (submit.classList.value === document.activeElement.classList.value) {
			submit.classList.remove('searchForm__submit--left');
			console.info('[resources-search]', 'removed searchForm__submit--left');
		// }
	});

	//-- Helper Functions --//

	// Get all selected categories
	// @returns string[]
	function filterResources(categories, difficulties, searchTerms) {
		
		const selectedCategories = getSelectedCategories(categories);
		const selectedDifficulties = getSelectedDifficulties(difficulties);
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
		// Get Difficulties selected in UI by user
		const selectedDifficulties = filters.filter(filter => filter.dataset.selected === 'true')
		.map(filter => filter.dataset.difficulty);

		return (selectedDifficulties && selectedDifficulties.length) ? selectedDifficulties : undefined;
	}

	// Split search terms
	// @param {string} terms
	// @returns {string[]}
	function SearchTerms(terms) {
		return terms.length ? terms.split(' ') : undefined;
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