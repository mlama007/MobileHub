//array of objects conatining Resource Links
const topics = {
	//CSS Resources
	"CSS": [
		//Maria
		{
			"title": "Hover.css",
			"link": "http://ianlunn.github.io/Hover/",
			"image": ["img/css.svg"],
			"difficulty" :"Beginner",
			"description" : "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, and LESS."
		},
		{
			"title": "Flexbox Froggy",
			"link": "http://flexboxfroggy.com/",
			"image": ["img/css.svg"],
			"difficulty" :"Intermediate",
			"description" : "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!"
		},
		{
			"title": "CSS Almanac",
			"link": "https://css-tricks.com/almanac/",
			"image": ["img/css.svg"],
			"difficulty" :"Advanced",
			"description" : "A reference guide to the many features of CSS."
		},
		{
			"title": "CSS Validation Service",
			"link": "https://jigsaw.w3.org/css-validator/#validate_by_input",
			"image": ["img/css.svg"],
			"difficulty" :"Advanced",
			"description" : "Enter the CSS you would like validated."
		},
		//Varell
		{
			"hostingCompany": "MDN",
			"title": "CSS Reference",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
			"image": ["https://cdn.mdn.mozilla.net/static/img/web-docs-sprite.22a6a085cf14.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"hostingCompany": "CSS-TRICKS",
			"title": "CSS Selectors",
			"link": "https://css-tricks.com/how-css-selectors-work/",
			"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"hostingCompany": "YouTube",
			"title": "Illustration with CSS",
			"link": "https://www.youtube.com/watch?v=l7VUhEdM2aY",
			"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "css3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "css3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "css3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],

	//HTML Resources
	"HTML": [
		//Maria
		{
			"title": "Meet  the Ipsums",
			"link": "http://meettheipsums.com/",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"description" : "Ipsums Generator- Where all Ipsums come together."
		},
		{
			"title": "HTML5 Canvas",
			"link": "https://www.udacity.com/course/html5-canvas--ud292",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"description" : "In this course, through several sample projects, you’ll learn how to use the canvas; how to make compositions using shapes, images, and text; how to create effects and filters on images and how to create animations."
		},
		{
			"title": "Font Pairing",
			"link": "https://fontpair.co/",
			"image": ["img/html.svg"],
			"difficulty" :"Intermediate",
			"description" : "Font Pair helps you pair Google Fonts together"
		},
		{
			"title": "CSS Validation Service",
			"link": "https://validator.w3.org/nu/#textarea",
			"image": ["img/html.svg"],
			"difficulty" :"Advanced",
			"description" : "This tool is an ongoing experiment in better HTML checking, and its behavior remains subject to change."
		},
		//Varell
		{
			"hostingCompany": "HTMLGOODIES",
			"title": "html",
			"link": "https://www.htmlgoodies.com/",
			"image": ["https://www.htmlgoodies.com/img/layout/logo.png"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"hostingCompany": "DesignHooks",
			"title": "10 great HTML5 and CSS3 tutorials to master web development",
			"link": "http://designhooks.com/wp-content/uploads/2014/11/logo.png",
			"image": ["http://designhooks.com/wp-content/uploads/2014/11/logo.png"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"hostingCompany": "HTML5 CANVAS TUTORIALS",
			"title": "HTML5 CANVAS TUTORIALS",
			"link": "https://www.html5canvastutorials.com/category/advanced/",
			"image": ["https://www.html5canvastutorials.com/wp-content/themes/webkrunk/img/logo.png"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "html3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "html3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Intermediate",
		},
		{
			"title": "html3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],

	//JS Resources
	"JS": [
		//Maria
		{
			"title": "Micron.js",
			"link": "https://www.cssscript.com/javascript-library-interactive-css3-animations-micron-js/",
			"image": ["img/js.svg"],
			"difficulty" :"Beginner",
			"description" : "JavaScript Library For Interactive CSS3 Animations"
		},
		{
			"title": "JS Version Converter",
			"link": "http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015",
			"image": ["img/js.svg"],
			"difficulty" :"Intermediate",
			"description" : "Convert JS from one version to the next!"
		},
		{
			"title": "Learning JavaScript Design Patterns",
			"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
			"image": ["img/js.svg"],
			"difficulty" :"Intermediate",
			"description" : "This book is targeted at professional developers wishing to improve their knowledge of design patterns and how they can be applied to the JavaScript programming language."
		},
		{
			"title": "JavaScript Promises: an Introduction",
			"link": "https://developers.google.com/web/fundamentals/primers/promises",
			"image": ["img/js.svg"],
			"difficulty" :"Intermediate",
			"description" : "Explination on JS Promises"
		},
		{
			"title": "The JSON Validator",
			"link": "https://jsonlint.com/",
			"image": ["img/js.svg"],
			"difficulty" :"Advanced",
			"description" : "Copy and paste, directly type, or input a URL in the editor and let JSONLint tidy and validate your messy JSON code."
		},
		//Varell
		{
			"hostingCompany": "JavaScript.com",
			"title": "JavaScript.com",
			"link": "https://www.javascript.com/",
			"image": ["https://www.javascript.com/images/pages/shared/logo.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Javascript.info",
			"link": "https://javascript.info/",
			"image": [""],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Learning JavaScript Design Patterns",
			"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
			"image": [""],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "js3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "js3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "js3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],
	
	//Git Resources
	"Git": [
		//Maria
		{
			"title": "Using Git",
			"link": "https://gist.github.com/hofmannsven/6814451",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"description" : "Explanation of Git Commands"
		},
		{
			"title": "Git Real- Learn more advanced Git by practicing the concepts of Git version control.",
			"link": "https://www.codeschool.com/courses/git-real",
			"image": ["img/Git.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Git Tutorial",
			"link": "https://git-scm.com/docs/gittutorial",
			"image": ["img/Git.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		//Varell
		{
			"title": "Git2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Git2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Git2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "Git3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Git3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Git3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],
	
	//Learning Resources
	"Learning": [
		//Maria
		{
			"title": "Codecademy",
			"link": "https://www.codecademy.com/",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Lynda",
			"link": "https://www.lynda.com/",
			"image": ["img/Learning.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},		
		{
			"title": "Udacity",
			"link": "https://www.udacity.com/",
			"image": ["img/Learning.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Varell
		{
			"title": "Learning2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Learning2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Learning2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "Learning3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Learning3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Learning3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],
	
	//Resources Resources
	"Resources": [
		//Maria
		{
			"title": "Bitly - Shorten Links",
			"link": "https://bitly.com/",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "A collection of free books for developers",
			"link": "https://devfreebooks.github.io/",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Markup Validation Service",
			"link": "https://validator.w3.org/",
			"image": ["img/Resources.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "PageSpeed Insights",
			"link": "https://developers.google.com/speed/pagespeed/insights/",
			"image": ["img/Resources.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		{
			"title": "Service workers and base URIs",
			"link": "https://jakearchibald.com/2016/service-workers-and-base-uris/",
			"image": ["img/Resources.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Varell
		{
			"title": "Resources2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Resources2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Resources2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "Resources3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Resources3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Resources3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],
	
	//Frameworks Resources
	"Frameworks": [
		//Maria
		{
			"title": "jQuery Event Methods",
			"link": "https://www.w3schools.com/jquery/jquery_ref_events.asp",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "React JS Tutorials",
			"link": "https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Front End Frameworks",
			"link": "https://www.udacity.com/course/front-end-frameworks--ud894",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Varell
		{
			"title": "Frameworks2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Frameworks2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Frameworks2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "Frameworks3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Frameworks3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Frameworks3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],

	//Practice Resources
	"Practice": [
		//Maria
		{
			"title": "Level up your coding skills",
			"link": "https://leetcode.com/",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "JS- Build 30 things in 30 days with 30 tutorials",
			"link": "https://javascript30.com/",
			"image": ["img/Editors.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},		
		{
			"title": "Level up your programming skills",
			"link": "http://www.exercism.io/",
			"image": ["img/Editors.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Varell
		{
			"title": "Practice",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Practice",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Intermediate",
		},
		{
			"title": "Practice",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
		//Jannaee
		{
			"title": "Practice2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"description" : ""
		},
		{
			"title": "Practice2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Intermediate",
			"description" : ""
		},
		{
			"title": "Practice2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Advanced",
			"description" : ""
		},
	],
};