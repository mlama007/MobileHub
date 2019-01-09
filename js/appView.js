(function (undefined) {
	// appView handles user events	

	var exports = {};
	window.MobileHub = window.MobileHub || {};
	window.MobileHub.Events = exports;

	window.onload = function() {

	};

	// All Difficulty filter event
	document.querySelector('[data-difficulty="All"]').addEventListener('click', function(event) {
		const element = event.target;
		Array.from(element.parentElement.children).forEach(elem => {
			if (elem.getAttribute('data-difficulty') !== 'All') {
				elem.classList.remove('selected-difficulty');
			}
		});
		element.classList.toggle('selected-difficulty');

		if (element.classList.contains('selected-difficulty')) {
			window.MobileHub.displayAll();
		}
		else {
			// window.MobileHub.removeAll();
		}
	});

	// Beginner, Intermediate, Advanced Difficulty filter event
	Array.from(document.querySelectorAll('[data-difficulty]'))
	.filter(difficulty => difficulty.getAttribute('data-difficulty') != 'All')
	.forEach(element => {
		element.addEventListener('click', event => {
			document.querySelector('[data-difficulty="All"]').classList.remove('selected-difficulty');
			event.target.classList.toggle('selected-difficulty');
		})
	});

})();