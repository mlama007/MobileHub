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

		// .content hides all results
		const results = document.querySelectorAll('.topicImg');
		if (element.dataset.selected === 'true') {
			// Show results
			window.MobileHub.displayDataAll();
			results.forEach(result => result.classList.remove('content'));
			console.info('[All Show]');
		}
		else {
			// Hide results
			// window.MobileHub.removeAll();
			results.forEach(result => result.classList.add('content'));
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

			const results = document.querySelectorAll('.topicImg');
			console.info('[biaFilterArray]', biaFilterArray);

			// Check if any difficulty filter is selected
			if (biaFilterArray.every(element => {
				console.info('[selected]', element.dataset);
				return element.dataset.selected === 'false';
			})) {
				// Hide results
				results.forEach(result => result.classList.add('content'));
			}
			else {
				// Show results
				results.forEach(result => result.classList.remove('content'));
			}

			biaFilterArray.forEach(element => {
				
				if (element.dataset.selected === 'true') {
					console.info('[selected]', element.dataset.selected);
					// Get selected difficulty data
					window.MobileHub.displayDataDifficulty(element.dataset.difficulty);

					// Show content
					results.forEach(result => result.classList.remove('content'));
				}
				else {
					// Hide content
					// results.forEach(result => result.classList.add('content'));
				}
			})
		})
	})

})();