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
	const categoryFilterItems = document.querySelectorAll('.category-filter__item');

	categoryFilterItems.forEach(filterItem => {
		filterItem.addEventListener('click', function(event) {
			const element = event.currentTarget;

			// Toggle Category selected state
			element.dataset.selected = !(element.dataset.selected === 'true');

			const categoryFilterSeletectedArray = Array.from(categoryFilterItems).filter(element => {
				return element.dataset.selected === 'true'
			}).map(element => element.dataset.category);
			console.info('[categoryFilterSeletectedArray]: ', categoryFilterSeletectedArray);

			// Remove all data from DOM
			// Hide all elements
			window.MobileHub.removeAll();

			// Get elements to add data to
			const categoryContentList = Array.from(document.querySelectorAll('.category-content')).filter(content => {
				return categoryFilterSeletectedArray.includes(content.dataset.category);
			});
			
			// Get data and remove .hidden from UI elements
			window.MobileHub.displayDataCategory(categoryFilterSeletectedArray);
			categoryContentList.forEach(categoryContentItem =>
				{
					categoryContentItem.classList.remove('hidden');
				}
			);
			console.info('[categoryContentList]: ', categoryContentList);
		});
	});
	// All difficulty filter event
	document.querySelector('[data-difficulty="All"]').addEventListener('click', function(event) {
		const element = event.target;
		// Deselect Beginner, Imtermidate, & Advanced difficulty
		Array.from(element.parentElement.children).forEach(elem => {
			if (elem.getAttribute('data-difficulty') !== 'All') {
				elem.dataset.selected = false;
			}
		});
		// Toggle All difficulty
		element.dataset.selected = !(element.dataset.selected === "true");

		// Remove old resources
		window.MobileHub.removeAll();

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
			window.MobileHub.removeAll();
			// Get and show newest resources
			difficultiesSelected.forEach(difficulties => window.MobileHub.displayDataDifficulty(difficulties));
			
			// Check if any difficulty filter is selected
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
	})

})();