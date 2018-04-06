(function(undefined){

    let exports = {};
	window.MobileHub = window.MobileHub || {};

	window.MobileHub.Categories = exports;
	
	exports.data = {
		CSS: {
			"title" : "CSS",
			"intro" : "CSS stands for Cascading Style Sheets. CSS control’s how HTML elements are to be displayed on screen, paper, or in other media.",
		},
		HTML: {
			"title" : "HTML",
			"intro" : "HTML stands for Hypertext Markup Language. It is a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
		},
		JS: {
			"title" : "JS",
			"intro" : "JS stands for JavaScript. JavaScript is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted programming language.",
		},
		Git: {
			"title" : "Git",
			"intro" : "Git is a version control system for tracking changes in computer files and coordinating work on those files among multiple people.",
		},
		Learning: {
			"title" : "Learning",
			"intro" : "The Learning section includes many resources which teach specific skills.",
		},
		Resources: {
			"title" : "Resources",
			"intro" : "The Resources section includes many articles and tutorials pertaining to many aspects of web development.",
		},
		Frameworks: {
			"title" : "Frameworks",
			"intro" : "The Frameworks section includes many articles and tutorials pertaining to JS and CSS frameworks.",
		},
		Practice: {
			"title" : "Practice",
			"intro" : "The Practice section includes links to coding exercises to improve your skills.",
		},
	};

	exports.getCategories = function() {
		var categories = [];
		for (var category in exports.data) {
			categories.push(category);
		}
		return categories;
	};
    
})();
