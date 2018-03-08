(function(undefined) {

	window.MobileHub = window.MobileHub || {};
	
	let exports = {};
	window.MobileHub = window.MobileHub || {};
	window.MobileHub.topics = exports;

	//array of objects conatining Resource Links
	const topics = {
		//CSS Resources
		"CSS": [
			//Maria
			{
				"title": "Hover.css",
				"link": "http://ianlunn.github.io/Hover/",
				"difficulty" :"Beginner",
				"description" : "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on.",
				"tag" : ["CSS3"],
			},
			{
				"title": "Flexbox Froggy",
				"link": "http://flexboxfroggy.com/",
				"difficulty" :"Intermediate",
				"description" : "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!",
				"tag" : ["Flexbox"],
			},
			{
				"title": "CSS Almanac",
				"link": "https://css-tricks.com/almanac/",
				"difficulty" :"Advanced",
				"description" : "A reference guide to the many features of CSS.",
				"tag" : ["CSS"],
			},
			{
				"title": "CSS Validation Service",
				"link": "https://jigsaw.w3.org/css-validator/#validate_by_input",
				"difficulty" :"Advanced",
				"description" : "Enter the CSS you would like validated.",
				"tag" : ["Validation"],
			},
			//Varell
			{
				"title": "CSS Reference",
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "CSS Selectors",
				"link": "https://css-tricks.com/how-css-selectors-work/",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Illustration with CSS",
				"link": "https://www.youtube.com/watch?v=l7VUhEdM2aY",
				"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "css3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "css3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "css3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
	
		//HTML Resources
		"HTML": [
			//Maria
			{
				"title": "Meet  the Ipsums",
				"link": "http://meettheipsums.com/",
				"difficulty" :"Beginner",
				"description" : "Ipsums Generator- Where all Ipsums come together.",
				"tag" : ["Ipsums"],
			},
			{
				"title": "HTML5 Canvas",
				"link": "https://www.udacity.com/course/html5-canvas--ud292",
				"difficulty" :"Beginner",
				"description" : "In this course, through several sample projects, you’ll learn how to use the canvas; how to make compositions using shapes, images, and text; how to create effects and filters on images and how to create animations.",
				"tag" : ["Canvas"],
			},
			{
				"title": "Font Pairing",
				"link": "https://fontpair.co/",
				"difficulty" :"Intermediate",
				"description" : "Font Pair helps you pair Google Fonts together",
				"tag" : ["Font"],
			},
			{
				"title": "CSS Validation Service",
				"link": "https://validator.w3.org/nu/#textarea",
				"difficulty" :"Advanced",
				"description" : "This tool is an ongoing experiment in better HTML checking, and its behavior remains subject to change.",
				"tag" : ["Validation"],
			},
			//Varell
			{
				"title": "Html",
				"link": "https://www.htmlgoodies.com/",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "10 great HTML5 and CSS3 tutorials to master web development",
				"link": "http://designhooks.com/wp-content/uploads/2014/11/logo.png",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "HTML5 CANVAS TUTORIALS",
				"link": "https://www.html5canvastutorials.com/category/advanced/",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "html3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "html3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "html3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
	
		//JS Resources
		"JS": [
			//Maria
			{
				"title": "Micron.js",
				"link": "https://www.cssscript.com/javascript-library-interactive-css3-animations-micron-js/",
				"difficulty" :"Beginner",
				"description" : "JavaScript Library For Interactive CSS3 Animations",
				"tag" : ["Animations"],
			},
			{
				"title": "JS Version Converter",
				"link": "http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015",
				"difficulty" :"Intermediate",
				"description" : "Convert JS from one version to the next!",
				"tag" : ["Converter"],
			},
			{
				"title": "Learning JavaScript Design Patterns",
				"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
				"difficulty" :"Intermediate",
				"description" : "This book is targeted at professional developers wishing to improve their knowledge of design patterns and how they can be applied to the JavaScript programming language.",
				"tag" : ["Design Patterns"],
			},
			{
				"title": "JavaScript Promises: an Introduction",
				"link": "https://developers.google.com/web/fundamentals/primers/promises",
				"difficulty" :"Intermediate",
				"description" : "Explination on JS Promises",
				"tag" : ["Promises"],
			},
			{
				"title": "The JSON Validator",
				"link": "https://jsonlint.com/",
				"difficulty" :"Advanced",
				"description" : "Copy and paste, directly type, or input a URL in the editor and let JSONLint tidy and validate your messy JSON code.",
				"tag" : ["Validator"],
			},
			//Varell
			{
				"title": "JavaScript.com",
				"link": "https://www.javascript.com/",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Javascript.info",
				"link": "https://javascript.info/",
				"difficulty" :"Intermediate",
				"description" : ""
			},
			{
				"title": "Learning JavaScript Design Patterns",
				"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "js3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "js3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "js3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
		
		//Git Resources
		"Git": [
			//Maria
			{
				"title": "Using Git",
				"link": "https://gist.github.com/hofmannsven/6814451",
				"difficulty" :"Beginner",
				"description" : "Explanation of Git Commands",
				"tag" : ["Commands"],
			},
			{
				"title": "Git Tutorial",
				"link": "https://git-scm.com/docs/gittutorial",
				"difficulty" :"Beginner",
				"description" : "A tutorial introduction to Git",
				"tag" : ["Tutorial"],
			},
			{
				"title": "Git Real",
				"link": "https://www.codeschool.com/courses/git-real",
				"difficulty" :"Intermediate",
				"description" : "Learn more advanced Git by practicing the concepts of Git version control.",
				"tag" : ["Version Control"],
			},		
			//Varell
			{
				"title": "Git2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Git2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Git2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "Git3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Git3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Git3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
		
		//Learning Resources
		"Learning": [
			//Maria
			{
				"title": "Codecademy",
				"link": "https://www.codecademy.com/",
				"difficulty" :"Beginner",
				"description" : "Codecademy is an online freemium interactive platform that offers free coding classes in 12 different programming languages.",
				"tag" : [],
			},
			{
				"title": "Lynda",
				"link": "https://www.lynda.com/",
				"difficulty" :"Intermediate",
				"description" : "American online education company offering video courses taught by industry experts in software, creative, and business skills.",
				"tag" : [],
			},		
			{
				"title": "Udacity",
				"link": "https://www.udacity.com/",
				"difficulty" :"Advanced",
				"description" : "Udacity is a for-profit educational organization founded by Sebastian Thrun, David Stavens, and Mike Sokolsky offering massive open online courses.",
				"tag" : [],
			},
			//Varell
			{
				"title": "Learning2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Learning2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Learning2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "Learning3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Learning3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Learning3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
		
		//Resources Resources
		"Resources": [
			//Maria
			{
				"title": "Bitly",
				"link": "https://bitly.com/",
				"difficulty" :"Beginner",
				"description" : "Shorten Links",
				"tag" : [],
			},
			{
				"title": "DevFreeBooks",
				"link": "https://devfreebooks.github.io/",
				"difficulty" :"Beginner",
				"description" : "A collection of free books for developers.",
				"tag" : ["Books"],
			},
			{
				"title": "Markup Validation Service",
				"link": "https://validator.w3.org/",
				"difficulty" :"Intermediate",
				"description" : "Check the markup (HTML, XHTML, …) of Web documents.",
				"tag" : ["Validatior"],
			},
			{
				"title": "PageSpeed Insights",
				"link": "https://developers.google.com/speed/pagespeed/insights/",
				"difficulty" :"Advanced",
				"description" : "Make your web pages fast on all devices.",
				"tag" : [],
			},
			{
				"title": "Service workers and base URIs",
				"link": "https://jakearchibald.com/2016/service-workers-and-base-uris/",
				"difficulty" :"Advanced",
				"description" : "Jake Archibald Explains Service Workers and base URIs.",
				"tag" : ["Service workers"],
			},
			//Varell
			{
				"title": "Resources2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Resources2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Resources2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "Resources3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Resources3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Resources3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
		
		//Frameworks Resources
		"Frameworks": [
			//Maria
			{
				"title": "jQuery Event Methods",
				"link": "https://www.w3schools.com/jquery/jquery_ref_events.asp",
				"difficulty" :"Beginner",
				"description" : "Event methods trigger or attach a function to an event handler for the selected elements.",
				"tag" : [],
			},
			{
				"title": "React JS Tutorials",
				"link": "https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b",
				"difficulty" :"Intermediate",
				"description" : "React JS video tutorials playlist.",
				"tag" : [],
			},
			{
				"title": "Front End Frameworks",
				"link": "https://www.udacity.com/course/front-end-frameworks--ud894",
				"difficulty" :"Advanced",
				"description" : "You'll learn key architectural design techniques that make frameworks incredibly powerful.",
				"tag" : [],
			},
			//Varell
			{
				"title": "Frameworks2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Frameworks2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Frameworks2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "Frameworks3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Frameworks3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Frameworks3",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
	
		//Practice Resources
		"Practice": [
			//Maria
			{
				"title": "Level up your coding skills",
				"link": "https://leetcode.com/",
				"difficulty" :"Beginner",
				"description" : "Level up your coding skills and quickly land a job.",
				"tag" : [],
			},
			{
				"title": "JavaScript 30",
				"link": "https://javascript30.com/",
				"difficulty" :"Intermediate",
				"description" : "Build 30 things in 30 days with 30 tutorials.",
				"tag" : [],
			},		
			{
				"title": "Exercism",
				"link": "http://www.exercism.io/",
				"difficulty" :"Advanced",
				"description" : "Level up your programming skills.",
				"tag" : [],
			},
			//Varell
			{
				"title": "Practice",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Practice",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Practice",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			//Jannaee
			{
				"title": "Practice2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Practice2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Intermediate",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Practice2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
		],
	};

	exports.data = topics;
})();
