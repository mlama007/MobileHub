//array of objects conatining Resource Links
const topics = {
	//CSS Resources
	"CSS": [
		//Maria
		{
			"title": "css1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"hostingCompany": "MDN",
			"title": "CSS Reference",
			"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
			"image": ["https://cdn.mdn.mozilla.net/static/img/web-docs-sprite.22a6a085cf14.svg"],
			"difficulty" :"Intermediate",
			"type" : ["CSS"],
		},
		{
			"hostingCompany": "CSS-TRICKS",
			"title": "CSS Selectors",
			"link": "https://css-tricks.com/how-css-selectors-work/",
			"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS"],
		},
		{
			"hostingCompany": "YouTube",
			"title": "Illustration with CSS",
			"link": "https://www.youtube.com/watch?v=l7VUhEdM2aY",
			"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
			"difficulty" :"Advanced",
			"type" : ["CSS"],
		},
		//Jannaee
		{
			"title": "css3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Advanced",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],

	//HTML Resources
	"HTML": [
		//Maria
		{
			"title": "html1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"hostingCompany": "HTMLGOODIES",
			"title": "html",
			"link": "https://www.htmlgoodies.com/",
			"image": ["https://www.htmlgoodies.com/img/layout/logo.png"],
			"difficulty" :"Beginner",
			"type" : ["HTML"],
		},
		{
			"hostingCompany": "DesignHooks",
			"title": "10 great HTML5 and CSS3 tutorials to master web development",
			"link": "http://designhooks.com/wp-content/uploads/2014/11/logo.png",
			"image": ["http://designhooks.com/wp-content/uploads/2014/11/logo.png"],
			"difficulty" :"Intermediate",
			"type" : ["HTML"],
		},
		{
			"hostingCompany": "HTML5 CANVAS TUTORIALS",
			"title": "HTML5 CANVAS TUTORIALS",
			"link": "https://www.html5canvastutorials.com/category/advanced/",
			"image": ["https://www.html5canvastutorials.com/wp-content/themes/webkrunk/img/logo.png"],
			"difficulty" :"Advanced",
			"type" : ["HTML"],
		},
		//Jannaee
		{
			"title": "html3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],

	//JS Resources
	"JS": [
		//Maria
		{
			"title": "js1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"hostingCompany": "JavaScript.com",
			"title": "JavaScript.com",
			"link": "https://www.javascript.com/",
			"image": ["https://www.javascript.com/images/pages/shared/logo.svg"],
			"difficulty" :"Beginner",
			"type" : ["JS"],
		},
		{
			"title": "Javascript.info",
			"link": "https://javascript.info/",
			"image": [""],
			"difficulty" :"Intermediate",
			"type" : ["JS"],
		},
		{
			"title": "Learning JavaScript Design Patterns",
			"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
			"image": [""],
			"difficulty" :"Advanced",
			"type" : ["JS"],
		},
		//Jannaee
		{
			"title": "js3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	
	//Git Resources
	"Git": [
		//Maria
		{
			"title": "Git1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "Git2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "Git3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Git.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	
	//Learning Resources
	"Learning": [
		//Maria
		{
			"title": "Learning1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "Learning2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "Learning3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Learning.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	
	//Editors Resources
	"Editors": [
		//Maria
		{
			"title": "Editors1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "Editors2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "Editors3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Editors.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	
	//Resources Resources
	"Resources": [
		//Maria
		{
			"title": "Resources1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "Resources2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "Resources3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Resources.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	
	//Frameworks Resources
	"Frameworks": [
		//Maria
		{
			"title": "Frameworks1",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "Frameworks2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "Frameworks3",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
};