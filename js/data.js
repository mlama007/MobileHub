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
			"title": "css2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/css.svg"],
			"difficulty" :"Intermediate",
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title":"curated collection of CSS",
			"link":"https://cssgradient.io/",
			"image":["img/css.svg"],
			"difficulty":"Beginner",
			"type":["CSS"],
		},{
			"title":"curated collection of CSS",
			"link":"https://atomiks.github.io/30-seconds-of-css/",
			"image":["img/css.svg"],
			"difficulty":"Intermediate",
			"type":["CSS"],
		},{
			"title":"modern layouts with CSS Grids",
			"link":"https://www.youtube.com/watch?v=ahPRvVyw9Eo&t=69s",
			"image":["img/css.svg"],
			"difficulty":"Advance",
			"type":["CSS"],
		}
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
			"title": "html2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/html.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title":"",
			"link":"https://www.w3.org/TR/html/",
			"image":"",
			"difficulty":"Beginner",
			"type":["html"],
		},
		{
			"title":"",
			"link":"https://www.smashingmagazine.com/2017/01/making-responsive-html-email-coding-easy-with-mjml/",
			"image":"",
			"difficulty":"intermediate",
			"type":["html"],
		},
		{
			"title":"",
			"link":"https://www.smashingmagazine.com/2017/08/nine-principles-design-implementation/",
			"image":"",
			"difficulty":"advance",
			"type":["html"],
		}

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
			"title": "js2",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/js.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title":"",
			"link":"https://gomakethings.com/",
			"image":"",
			"difficulty":"beginner",
			"type":["Javascript"],
		},
		{
			"title":"",
			"link":"https://www.tutorialspoint.com/javascript/index.htm",
			"image":"",
			"difficulty":"intermediate",
			"type":["Javascript"],
		},
		{
			"title":"",
			"link":"https://www.smashingmagazine.com/2017/10/service-worker-single-page-application-wordpress-sites/",
			"image":"",
			"difficulty":"advance",
			"type":["Javascript"],
		}
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
			"title":"",
			"link":"https://try.github.io/levels/1/challenges/1",
			"image":"",
			"difficulty":"beginner",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://www.atlassian.com/git",
			"image":"",
			"difficulty":"beginner",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://www.atlassian.com/git",
			"image":"",
			"difficulty":"beginner",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://www.youtube.com/watch?v=0fKg7e37bQE",
			"image":"",
			"difficulty":"intermediate",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://github.com/andrew--r/frontend-case-studies",
			"image":"",
			"difficulty":"advance",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://github.com/andrew--r/frontend-case-studies",
			"image":"",
			"difficulty":"advance",
			"type":["Git"],
		},{
			"title":"",
			"link":"https://www.atlassian.com/git/tutorials/advanced-overviews",
			"image":"",
			"difficulty":"advance",
			"type":["Git"],
		}
		
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
			"title":"",
			"link":"https://tiny.cards/decks/5388s6D/javascript",
			"image":"",
			"difficulty":"beginner",
			"type":["Javascript"],
		},{
			"title":"",
			"link":"https://www.tutorialspoint.com/css/index.htm",
			"image":"",
			"difficulty":"intermediate",
			"type":["CSS"],
		},{
			"title":"",
			"link":"https://philipwalton.com/articles/",
			"image":"",
			"difficulty":"advance",
			"type":["CSS", "HTML", "Javascript", "Web development", "Blogs"],
		}
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
			"title":"",
			"link":"https://tympanus.net/codrops/2018/02/23/freebie-dropcast-website-template-html-sketch/",
			"image":"",
			"difficulty":"beginner",
			"type":["Javascript"],
		},{
			"title":"",
			"link":"https://www.tutorialspoint.com",
			"image":"",
			"difficulty":"intermediate",
			"type":["CSS"],
		},{
			"title":"",
			"link":"https://www.pluralsight.com",
			"image":"",
			"difficulty":"advance",
			"type":["CSS", "HTML", "Javascript", "Web development", "Blogs"],
		},{			
			"title":"",
			"link":"http://www.oreilly.com/programming/free/",
			"image":"",
			"difficulty":"all",
			"type":["CSS", "HTML", "Javascript", "Web development", "Blogs"],
		},{			
			"title":"",
			"link":"http://www.oreilly.com/web-platform/free/",
			"image":"",
			"difficulty":"all",
			"type":["CSS", "HTML", "Javascript", "Web development", "Blogs"],
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
			"link": "https://yuilibrary.com/",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["Frameworks"],
		},{
			"title": "Frameworks3",
			"link": "https://semantic-ui.com/",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["Frameworks"],
		},{
			"title": "Frameworks3",
			"link": "https://foundation.zurb.com/",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["Frameworks"],
		},{
			"title": "Frameworks3",
			"link": "http://getbootstrap.com/",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["Frameworks"],
		},{
			"title": "Frameworks3",
			"link": "https://purecss.io/",
			"image": ["img/Frameworks.svg"],
			"difficulty" :"Beginner",
			"type" : ["CSS Frameworks"],
		},
	],
};