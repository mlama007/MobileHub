(function(undefined) {

	let exports = {};
	window.MobileHub = window.MobileHub || {};
	
	//array of objects conatining Resource Links
	window.MobileHub.Resources = {
		//CSS Resources
		"CSS": [
			// Beginner
			{
				"title": "Hover.css",
				"link": "http://ianlunn.github.io/Hover/",
				"difficulty" :"Beginner",
				"description" : "A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on.",
				"tag" : ["CSS3"],				
			},
			{
				"title": "CSS Gradient",
				"link": "https://cssgradient.io/",
				"difficulty" :"Beginner",
				"description" : "CSS Gradient is a happy little website and web tool that allows you to get creative with gradients.",
				"tag" : [],
			},
			{
				"title": "Background & Text Colors",
				"link": "http://www.debmark.com/colors.htm",
				"difficulty": "Beginner",
				"description": "See how the text colors look on the various background colors.",
				"tag": [],
			},
			// Intermediate
			{
				"title": "30 Seconds of CSS",
				"link": "https://atomiks.github.io/30-seconds-of-css/",
				"difficulty" :"Intermediate",
				"description" : "A curated collection of useful CSS snippets you can understand in 30 seconds or less.",
				"tag" : ["Snippets"],
			},
			{
				"title": "Flexbox Froggy",
				"link": "http://flexboxfroggy.com/",
				"difficulty" :"Intermediate",
				"description" : "Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code!",
				"tag" : ["Flexbox"],
			},
			// Advanced
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
			{
				"title": "CSS Grid",
				"link": "https://css-tricks.com/snippets/css/complete-guide-grid/",
				"difficulty" :"Advanced",
				"description" : "CSS Grid Layout, is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces.",
				"tag" : ["Validation"],
			},			
			{
				"title": "Modern Layouts with CSS Grid",
				"link": "https://www.youtube.com/watch?v=ahPRvVyw9Eo&t=69s",
				"difficulty" :"Advanced",
				"description" : "A look at new CSS tools and new possibilities in web design, with Singapore-based Hui Jing Chen.",
				"tag" : ["CSS", "Grid"],
			},
			{
				"title": "CSS Reference",
				"link": "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
				"difficulty" :"Intermediate",
				"description" : "CSS Reference which includes all of the key words",
				"tag" : ['CSS', 'MDN'],
			},
			{
				"title": "CSS Selectors",
				"link": "https://css-tricks.com/how-css-selectors-work/",
				"difficulty" :"Beginner",
				"description" : "Quick resource for using CSS selectors",
				"tag" : ['CSS', 'Selectors'],
			},
			{
				"title": "Illustration with CSS",
				"link": "https://www.youtube.com/watch?v=l7VUhEdM2aY",
				"image": ["https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/images/logo.svg"],
				"difficulty" :"Advanced",
				"description" : "Create impressive art using a single div",
				"tag" : ['CSS', 'Single Div'],
				'type': 'video'
			},
			{
				"title": "Tailwind",
				"link": "https://tailwindcss.com/docs/what-is-tailwind/",
				"difficulty" :"Intermediate",
				"description" : "Utility classes to help find patterns in CSS and reduce repetition",
				"tag" : ['CSS', 'Utility'],
				'type': 'Framework'
			},
			{
				"title": "CSS Keylogger",
				"link": "https://css-tricks.com/css-keylogger/",
				"difficulty" :"Advanced",
				"description" : "Discovery that CSS can be used to obtain the keys a user presses.",
				"tag" : ['CSS', 'Exploit'],
				'type': ''
			},
			{
				"title": "CSS Grid",
				"link": "https://cssgrid.io/",
				"difficulty" :"Beginner",
				"description" : "25 Videos that go through fundamentals to real world appliation of css grid.",
				"tag" : ['CSS', 'Grid'],
				'type': 'Video'
			},
			{
				"title": "CSS Validation Service",
				"link": "https://validator.w3.org/nu/#textarea",
				"difficulty" :"Advanced",
				"description" : "This tool is an ongoing experiment in better HTML checking, and its behavior remains subject to change.",
				"tag" : ["Validation"],
			},
			{
				"title": "cssreference.io",
				"link": "https://cssreference.io/",
				"difficulty" :"Beginner",
				"description" : "A free visual guide to CSS",
				"tag" : [""],
				"type": ""
			},
			{
				"title": "Web Design in 4 Minutes",
				"link": "https://jgthms.com/web-design-in-4-minutes",
				"difficulty" :"Beginner",
				"description" : "Learn the basics of web design in 4 minutes with this interactive tutorial.",
				"tag" : ["Design"],
				"type": "Interactive Article"
			},
		],
	
		//HTML Resources
		"HTML": [
			// Beginner
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
				"title": "HTML 5.2",
				"link": "https://www.w3.org/TR/html/",
				"difficulty" :"Beginner",
				"description" : "This specification defines the 5th major version, second minor revision of the core language of the World Wide Web: the Hypertext Markup Language (HTML).",
				"tag" : [],
			},
			// Intermediate
			{
				"title": "Font Pairing",
				"link": "https://fontpair.co/",
				"difficulty" :"Intermediate",
				"description" : "Font Pair helps you pair Google Fonts together",
				"tag" : ["Font"],
			},
			{
				"title": "How To Make Responsive HTML Email Coding Easy",
				"link": "https://www.smashingmagazine.com/2017/01/making-responsive-html-email-coding-easy-with-mjml/",
				"difficulty" :"Intermediate",
				"description" : "MJML – How To Make Responsive HTML Email Coding Easy",
				"tag" : [],
			},
			// Advanced
			{
				"title": "The Nine Principles Of Design Implementation",
				"link": "https://www.smashingmagazine.com/2017/08/nine-principles-design-implementation/",
				"difficulty" :"Advanced",
				"description" : "Explore best practices for implementing designs using HTML and CSS.",
				"tag" : [],
			},
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
				"tag" : ['Canvas'],
			},
			{
				"title": "HTML5 Elements",
				"link": "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
				"difficulty" :"Advanced",
				"description" : "Guide to using the HTML5 features.",
				"tag" : ['HTML5'],
				'type': ''
			},
			{
				"title": "HTML5 Up",
				"link": "https://html5up.net/",
				"difficulty" :"Beginner",
				"description" : "HTML5 Templates",
				"tag" : ['Template'],
				'type': ''
			},
			{
				"title": "W3C Markup Validation Service",
				"link": "https://validator.w3.org/",
				"difficulty" :"Beginner",
				"description" : "Checks your html to verify no errors exist",
				"tag" : ['HTML', 'Validator'],
				'type': 'Tool'
			},
			{
				"title": "Web Design/HTML Challenges",
				"link": "https://en.wikiversity.org/wiki/Web_Design/HTML_Challenges",
				"difficulty" :"Intermediate",
				"description" : "Exercises to help you choose meaningful markup.",
				"tag" : ['HTML', 'Challange'],
				'type': 'Tool'
			},
		],
	
		//JS Resources
		"JS": [
			// Beginner
			{
				"title": "Micron.js",
				"link": "https://www.cssscript.com/javascript-library-interactive-css3-animations-micron-js/",
				"difficulty" :"Beginner",
				"description" : "JavaScript Library For Interactive CSS3 Animations",
				"tag" : ["Animations"],
			},
			{
				"title": "Go Make Things",
				"link": "https://gomakethings.com/",
				"difficulty" :"Beginner",
				"description" : "Learn vanilla JavaScript.",
				"tag" : [],
			},
			{
				"title": "Quizlet: Javascript Methods",
				"link": "https://quizlet.com/86381862/javascript-methods-flash-cards/",
				"difficulty" :"Beginner",
				"description" : "Search millions of study sets or create your own. Improve your grades by studying with flashcards, games and more",
				"tag" : [],
			},
			// Intermediate
			{
				"title": "Javascript Tutorial",
				"link": "https://www.tutorialspoint.com/javascript/index.htm",
				"difficulty" :"Intermediate",
				"description" : "This tutorial has been prepared for JavaScript beginners to help them understand the basic functionality of JavaScript to build dynamic web pages and web applications.",
				"tag" : [],
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
				"title": "A beginner’s guide to Service Workers",
				"link": "https://medium.com/samsung-internet-dev/a-beginners-guide-to-service-workers-f76abf1960f6",
				"difficulty" :"Intermediate",
				"description" : "Covers the basics of service workers and how to use them without going into too much detail, with the aim of letting you build a prototype as quickly as possible.",
				"tag" : ["Service Worker"],
			},
			// Advanced
			{
				"title": "Implementing A Service Worker For Single-Page App WordPress Sites",
				"link": "https://www.smashingmagazine.com/2017/10/service-worker-single-page-application-wordpress-sites/",
				"difficulty" :"Advanced",
				"description" : "Learn how to implement a service worker for singlepPage app wordPress sites.",
				"tag" : [],
			},
			{
				"title": "The JSON Validator",
				"link": "https://jsonlint.com/",
				"difficulty" :"Advanced",
				"description" : "Copy and paste, directly type, or input a URL in the editor and let JSONLint tidy and validate your messy JSON code.",
				"tag" : ["Validator"],
			},
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
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Learning JavaScript Design Patterns",
				"link": "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Free React Bootcamp",
				"link": "https://tylermcginnis.com/free-react-bootcamp/",
				"difficulty": "Advanced",
				"description": "This course has completed and the recording are included.  You can also sign up for future free bootcamps.",
				"tag": [],
			}
		],
		
		//Git Resources
		"Git": [
			// Beginner
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
			},{
				"title": "Got 15 minutes and want to learn Git?",
				"link": "https://try.github.io/levels/1/challenges/1",
				"difficulty" :"Beginner",
				"description" : "Learn how to use Git.",
				"tag" : [],
			},
			{
				"title": "Git basics",
				"link": "https://www.atlassian.com/git",
				"difficulty" :"Beginner",
				"description" : "Here is a basic overview of how Git works.",
				"tag" : [],
			},
			// Intermediate		
			{
				"title": "Github Tutorial",
				"link": "https://www.youtube.com/watch?v=0fKg7e37bQE",
				"difficulty" :"Intermediate",
				"description" : "Github Basics for Mac or Windows & Source Control Basics",
				"tag" : [],
			},
			// Advanced
			{
				"title": "Git Real",
				"link": "https://www.codeschool.com/courses/git-real",
				"difficulty" :"Advanced",
				"description" : "Learn more advanced Git by practicing the concepts of Git version control.",
				"tag" : ["Version Control"],
			},
			{
				"title": "Advanced Git Tutorials",
				"link": "https://www.atlassian.com/git/tutorials/advanced-overview",
				"difficulty" :"Advanced",
				"description" : "Atlassian’s Git tutorials introduce the most common Git commands, and our Git Workflows modules discuss how these commands are typically used to facilitate collaboration.",
				"tag" : [],
			},	
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
			{
				"title": "",
				"link": "",
				"difficulty" :"",
				"description" : "",
				"tag" : [''],
				'type': ''
			},
			{
				"title": "",
				"link": "",
				"difficulty" :"",
				"description" : "",
				"tag" : [''],
				'type': ''
			},
			{
				"title": "",
				"link": "",
				"difficulty" :"",
				"description" : "",
				"tag" : [''],
				'type': ''
			},
		],
		
		//Learning Resources
		"Learning": [
			// Beginner
			{
				"title": "Codecademy",
				"link": "https://www.codecademy.com/",
				"difficulty" :"Beginner",
				"description" : "Codecademy is an online freemium interactive platform that offers free coding classes in 12 different programming languages.",
				"tag" : [],
			},			
			{
				"title": "Ready to try JavaScript?",
				"link": "https://www.javascript.com/",
				"difficulty" :"Beginner",
				"description" : "Learn JS Basics.",
				"tag" : [],
			},
			// Intermediate
			{
				"title": "Articles",
				"link": "https://www.tutorialspoint.com/css/index.htm",
				"difficulty" :"Intermediate",
				"description" : "This tutorial will help both students as well as professionals who want to make their websites or personal blogs more attractive.",
				"tag" : [],
			},
			{
				"title": "Lynda",
				"link": "https://www.lynda.com/",
				"difficulty" :"Intermediate",
				"description" : "American online education company offering video courses taught by industry experts in software, creative, and business skills.",
				"tag" : [],
			},
			// Advanced				
			{
				"title": "Learning3",
				"link": "https://philipwalton.com/articles/",
				"difficulty" :"Advanced",
				"description" : "Library of articles about Fonr-end Development.",
				"tag" : [],
			},	
			{
				"title": "Udacity",
				"link": "https://www.udacity.com/",
				"difficulty" :"Advanced",
				"description" : "Udacity is a for-profit educational organization founded by Sebastian Thrun, David Stavens, and Mike Sokolsky offering massive open online courses.",
				"tag" : [],
			},
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
		],
		
		//Resources Resources
		"Resources": [
			// Beginner
			{
				"title": "Bitly",
				"link": "https://bitly.com/",
				"difficulty" :"Beginner",
				"description" : "Shorten Links",
				"tag" : [],
			},
			{
				"title": "Friday Front-End",
				"link": "https://fridayfrontend.curated.co/",
				"difficulty" :"Beginner",
				"description" : "Front-end development links tweeted daily, emailed weekly.",
				"tag" : [],
			},
			{
				"title": "Smashing Magazine",
				"link": "smashingmagazine.com",
				"difficulty" :"Beginner",
				"description" : "Smashing Magazine is an online magazine for professional web designers and developers.",
				"tag" : [],
			},
			{
				"title": "Fresh Brewed",
				"link": "freshbrewed.co",
				"difficulty" :"Beginner",
				"description" : "A weekly reading digest for front-end developers and UX designers.",
				"tag" : [],
			},
			{
				"title": "Web Tools Weekly",
				"link": "https://webtoolsweekly.com/",
				"difficulty" :"Beginner",
				"description" : "A front-end development and web design newsletter with a focus on tools.",
				"tag" : [],
			},
			{
				"title": "WebOps Weekly",
				"link": "webopsweekly.com",
				"difficulty" :"Beginner",
				"description" : "A weekly newsletter on Web operations, infrastructure, performance, the backend, and tooling, from the browser down to the metal.",
				"tag" : [],
			},
			{
				"title": "WDRL",
				"link": "https://wdrl.info/",
				"difficulty" :"Beginner",
				"description" : "A handcrafted, carefully selected list of web development related resources. Curated and published usually every week.",
				"tag" : [],
			},
			{
				"title": "UX Beginners",
				"link": "https://enboard.co/xcb3cf/",
				"difficulty" :"Beginner",
				"description" : "Enboard lets you create and follow boards filled with lists containing links, notes and checkboxes organized through categories.",
				"tag" : [],
			},
			{
				"title": "Indie Hackers",
				"link": "https://www.indiehackers.com/",
				"difficulty" :"Beginner",
				"description" : "A group of founders helping each other start profitable online businesses and side projects.",
				"tag" : [],
			},
			{
				"title": "A List Apart",
				"link": "http://alistapart.com/",
				"difficulty" :"Beginner",
				"description" : "A List Apart explores the design, development, and meaning of web content, with a special focus on web standards and best practices.",
				"tag" : [],
			},
			{
				"title": "Curated Lists",
				"link": "https://github.com/pshah123/awesome-lists",
				"difficulty" :"Beginner",
				"description" : "Curated list of awesome lists.",
				"tag" : [],
			},
			{
				"title": "Free Web Development & Performance Ebooks",
				"link": "http://www.oreilly.com/web-platform/free/",
				"difficulty" :"Beginner",
				"description" : "We’ve compiled the best insights from subject matter experts for you in one place.",
				"tag" : [],
			},
			{
				"title": "Free Programming Ebooks",
				"link": "http://www.oreilly.com/programming/free/",
				"difficulty" :"Beginner",
				"description" : "We’ve compiled the best insights from subject matter experts and industry insiders for you in one place.",
				"tag" : [],
			},
			{
				"title": "Freebie: “Dropcast” Website Template (HTML, Sketch)",
				"link": "https://tympanus.net/codrops/2018/02/23/freebie-dropcast-website-template-html-sketch/",
				"difficulty" :"Beginner",
				"description" : "Dropcast is a responsive HTML/CSS/Javascript template, comes with Sketch files and a fully working site with SCSS. It works very well for podcasts landing pages or blogs, and can be easily customized.",
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
				"title": "Unsplash",
				"link": "https://unsplash.com/",
				"difficulty" :"Beginner",
				"description" : "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
				"tag" : ["image", "stock"],
			},
			{
				"title": "Envato Elements",
				"link": "https://elements.envato.com/?utm_source=envatocom&utm_medium=promos&utm_campaign=elements_envatocom_selector&utm_content=env_selector",
				"difficulty" :"Beginner",
				"description" : "Browse through thousands of stock photos, fonts and web templates. With unlimited downloads of all of our items, your project will be perfect in no time.",
				"tag" : ["image", "stock"],
			},
			{
				"title": "20 cutting-edge web tools to try now",
				"link": "https://www.creativebloq.com/features/20-cutting-edge-web-tools-to-try-now",
				"difficulty" :"Beginner",
				"description" : "Get up to date with the hottest new tools around.",
				"tag" : ["tools"],
				"createdDate": "2018-07-03",
			},
			{
				"title": "Design Better Forms",
				"link": "https://uxdesign.cc/design-better-forms-96fadca0f49c",
				"createdDate": "2019-15-02",
				"difficulty" :"Intermediate",
				"description" : "Common mistakes designers make and how to fix them",
				"tag" : ["Design", "Form", "UX", "Opinion"],
				"type": "Blog"
			},
			{
				"title": "API Directory",
				"link": "https://www.programmableweb.com/apis/directory",
				"difficulty" :"Beginner",
				"description" : "Maintained database of APIs along with tutorials on how to use APIs",
				"tag" : ["tools"],
				"createdDate": "2018-08-02",
			},
			{
				"title": "Career Cup",
				"link": "https://careercup.com/page?pid=google-interview-questions",
				"difficulty" :"Beginner",
				"description" : "Interview questions from top companies and top positions, ",
				"tag" : ["Resources"],
				"createdDate": "2019-30-04",
			},
			// Intermediate
			{
				"title": "Markup Validation Service",
				"link": "https://validator.w3.org/",
				"difficulty" :"Intermediate",
				"description" : "Check the markup (HTML, XHTML, …) of Web documents.",
				"tag" : ["Validatior"],
			},
			{
				"title": "TutorialsPoint",
				"link": "https://www.tutorialspoint.com",
				"difficulty" :"Intermediate",
				"description" : "Learn new skills at your own pace from the comforts of your drawing room.",
				"tag" : [],
			},
			{
				"title": "UX Club",
				"link": "https://uxclub.com",
				"difficulty" :"Intermediate",
				"description" : "On demand video training for UX designers.",
				"tag" : ["UX"],
			},
			// Advanced
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
			{
				"title": "Front-End Case Studies",
				"link": "https://github.com/andrew--r/frontend-case-studies",
				"difficulty" :"Advanced",
				"description" : "A curated list of technical talks and articles about real-world enterprise frontend development.",
				"tag" : [],
			},
			{
				"title": "Logo Design Love",
				"link": "https://www.logodesignlove.com/",
				"difficulty" :"Advanced",
				"description" : "Logo Design Love is a website and book devoted to logos and visual identities.",
				"tag" : [],
			},
			{
				"title": "PluralSight",
				"link": "https://www.pluralsight.com",
				"difficulty" :"Advanced",
				"description" : "Upgrade your skills with courses on the most popular programming languages, developer tools, software practices and application development platforms.",
				"tag" : [],
			},
			{
				"title": "HTML Goodies",
				"link": "https://www.htmlgoodies.com/",
				"difficulty" :"",
				"description" : "Full of helpful answers to years of people's questions.",
				"tag" : [],
			},
			{
				"title": "Hello Web Books",
				"link": "https://hellowebbooks.com/",
				"difficulty" :"Beginner",
				"description" : "",
				"tag" : ["Articles", "Tutorials"],
			},			
			{
				"title": "Resources2",
				"link": "https://www.codecademy.com/learn",
				"difficulty" :"Advanced",
				"description" : "",
				"tag" : [],
			},
			{
				"title": "Don’t be a Junior Developer",
				"link": "https://hackernoon.com/dont-be-a-junior-developer-608c255b3056",
				"difficulty" :"Advanced",
				"description" : "Describes why you should not say you're a junior developer.",
				"tag" : ['Motivational'],
				"type" : 'Article',
			},
			{
				"title": "How Browsers Work",
				"link": "http://taligarsiel.com/Projects/howbrowserswork1.htm",
				"difficulty" :"Advanced",
				"description" : "Behind the scenes of modern web browsers",
				"tag" : ["Resources"],
				"type" : "Article",
				"createdDate": "2019-09-05",
			},
		],
		
		//Frameworks Resources
		"Frameworks": [
			// Beginner
			{
				"title": "jQuery Event Methods",
				"link": "https://www.w3schools.com/jquery/jquery_ref_events.asp",
				"difficulty" :"Beginner",
				"description" : "Event methods trigger or attach a function to an event handler for the selected elements.",
				"tag" : [],
			},
			{
				"title": "Bootstrap",
				"link": "http://getbootstrap.com/",
				"difficulty" :"Beginner",
				"description" : "Build responsive, mobile-first projects on the web with the world's most popular front-end component library.",
				"tag" : [],
			},
			{
				"title": "YUI",
				"link": "https://yuilibrary.com/",
				"difficulty" :"Intermediate",
				"description" : "YUI is a free, open source JavaScript and CSS library for building richly interactive web applications.",
				"tag" : [],
			},
			{
				"title": "Semantic UI",
				"link": "https://semantic-ui.com/",
				"difficulty" :"Beginner",
				"description" : "Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.",
				"tag" : [],
			},
			// Intermediate
			{
				"title": "Pure.CSS",
				"link": "https://purecss.io/",
				"difficulty" :"Intermediate",
				"description" : "A set of small, responsive CSS modules that you can use in every web project.",
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
				"title": "JAMstack WTF",
				"link": "https://jamstack.wtf",
				"difficulty" :"Intermediate",
				"description" : "This guide will help you understand why the JAMstack exists and how to get started using it.",
				"tag" : ['Static Site Generator', 'Serverless'],
			},
			// Advanced
			{
				"title": "Foundation",
				"link": "https://foundation.zurb.com/",
				"difficulty" :"Advanced",
				"description" : "A Framework for any device, medium, and accessibility.",
				"tag" : [],
			},
			{
				"title": "Front End Frameworks",
				"link": "https://www.udacity.com/course/front-end-frameworks--ud894",
				"difficulty" :"Advanced",
				"description" : "You'll learn key architectural design techniques that make frameworks incredibly powerful.",
				"tag" : [],
			},
			{
				"title": "Angular",
				"link": "https://angular.io/",
				"difficulty" :"",
				"description" : "Homepage for the Angular project",
				"tag" : ['Angular', 'Google'],
				'type': ''
			},
			{
				"title": "",
				"link": "",
				"difficulty" :"",
				"description" : "",
				"tag" : [''],
				'type': ''
			},
			{
				"title": "",
				"link": "",
				"difficulty" :"",
				"description" : "",
				"tag" : [''],
				'type': ''
			},
		],
	
		//Practice Resources
		"Practice": [
			// Beginner
			{
				"title": "Level up your coding skills",
				"link": "https://leetcode.com/",
				"difficulty" :"Beginner",
				"description" : "Level up your coding skills and quickly land a job.",
				"tag" : [],
			},
			{
				"title": "JS",
				"link": "https://tiny.cards/decks/5388s6D/javascript",
				"difficulty" :"Beginner",
				"description" : "Learn JavaScript with this TinyCards deck.",
				"tag" : [],
			},
			{
				"title": "Khan Academy",
				"link": "https://www.khanacademy.org/",
				"difficulty" :"Beginner",
				"description" : "Learn anything for free.",
				"tag" : [],
			},
			{
				"title": "Design Challenge",
				"link": "https://designchallenge.xyz/",
				"difficulty" :"Beginner",
				"description" : "Design Challenge is a directory of challenges created to test the processes and creativity of any designer in settings such as mentoring, hiring, and self-improvement of skills.",
				"tag" : ["design", "exercises"],
				"createdDate": "2018-08-02",
			},
			// Intermediate
			{
				"title": "The Odin Project",
				"link": "https://www.theodinproject.com/",
				"difficulty" :"Intermediate",
				"description" : "Our full stack curriculum is free and supported by a passionate open source community.",
				"tag" : [],
			},
			{
				"title": "JavaScript 30",
				"link": "https://javascript30.com/",
				"difficulty" :"Intermediate",
				"description" : "Build 30 things in 30 days with 30 tutorials.",
				"tag" : [],
			},	
			// Advanced	
			{
				"title": "Exercism",
				"link": "http://www.exercism.io/",
				"difficulty" :"Advanced",
				"description" : "Level up your programming skills.",
				"tag" : [],
			},			
			{
				"title": "Microsoft Virtual Academy",
				"link": "mva.microsoft.com",
				"difficulty" :"Advanced",
				"description" : "Free Microsoft training delivered by experts",
				"tag" : [],
			},
			{
				"title": "Codecademy",
				"link": "https://www.codecademy.com/",
				"description" : "Code Interactively for Freed",
				"difficulty" :"Beginner",
				"tag" : [''],
				'type': ''
			},
			{
				"title": "Free Code Camp (FCC)",
				"link": "https://www.freecodecamp.org/",
				"description" : "Ever growing resources to learn to code for free with an in-depth front-end cirriculum that over covers server and database programming.",
				"difficulty" : "Advanced",
				"tag" : [''],
				'type': ''
			},
			{
				"title": "",
				"link": "",
				"description" : "",
				"difficulty" :"",
				"tag" : [''],
				'type': ''
			},
		],

		"Startup": [
			{
				"title": "Samaschool",
				"link": "https://www.samaschool.org/",
				"description" : "Samaschool equips people to benefit from independent work and advocates for an economy in which all workers thrive.",
				"difficulty" :"",
				"tag" : ['entrepreneur', 'startup'],
				'type': 'education'
			},
			{
				"title": "Dubsado",
				"link": "https://www.dubsado.com/",
				"description" : "Dubsado is a business management software built to save you time, impress your clients, and grow your business. ",
				"difficulty" :"",
				"tag" : ['entrepreneur', 'startup'],
				'type': 'tool'
			}

		],

		// Tools Resources
		"Tools": [
			{
				"title": "Bazel",
				"link": "https://bazel.build/",
				"description" : "Build and test software of any size, quickly and reliably",
				"difficulty" :"",
				"tag" : [''],
				'type': 'Tool'
			},
			{
				"title": "WebPack",
				"link": "https://webpack.js.org/",
				"description" : "Javascript bundler",
				"difficulty" :"",
				"tag" : [''],
				'type': 'Tool'
			},
			{
				"title": "Tailwind",
				"link": "https://tailwindcss.com/",
				"description" : "A Utility-First CSS Framework for Rapid UI Development",
				"difficulty" :"Intermediate",
				"tag" : ['CSS'],
				'type': 'Tool'
			},
			{
				"title": "First Site Guide",
				"link": "https://firstsiteguide.com/tools/",
				"description" : "The Ultimate List of Tools for Bloggers, Webmasters, and Startups",
				"difficulty" :"Beginner",
				"tag" : [''],
				'type': 'Tool'
			},
			{
				"title": "WakaTime",
				"link": "https://wakatime.com/",
				"description" : "In editor Open source plugins for automatic programming metrics.",
				"difficulty" :"Beginner",
				"tag" : ['free'],
				'type': 'Tool'
			},
			{
				"title": "colorsafe",
				"link": "http://colorsafe.co/",
				"description" : "Enter a background color, and determine the styling of your text. Accessible text colors are generated with WCAG Guidelines recommend contrast ratio of 4.5 for small text or 3 for large text which is 24px or 18px bold.",
				"difficulty" :"Beginner",
				"tag" : ['color scheme', 'generator'],
				'type': 'Tool'
			},
			{
				"title": "stackshare",
				"link": "https://stackshare.io/",
				"description" : "Discover & compare tech stacks.",
				"difficulty" :"Beginner",
				"tag" : ['job search', 'generator'],
				'type': 'Tool'
			},
			{
				"title": "Chrome: Command Line API Reference",
				"link": "https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference",
				"description" : "The Command Line API contains a collection of convenience functions for performing common tasks: selecting and inspecting DOM elements, displaying data in readable format, stopping and starting the profiler, and monitoring DOM events.",
				"difficulty" :"Intermediate",
				"tag" : ['chrome', 'console', 'api'],
				'type': 'Tool'
			},
			{
				"title": "Built With",
				"link": "https://builtwith.com/",
				"description" : "Web technology information profiler tool. Find out what a website is built with.",
				"difficulty" :"Easy",
				"tag" : ['web', 'seo'],
				'type': 'Tool'
			},
			{
				"title": "Cypress",
				"link": "https://www.cypress.io/",
				"description": "Fast, easy and reliable testing for anything that runs in a browser. Install Cypress in seconds and take the pain out of front-end testing.",
				"difficulty": "Intermediate",
				"tag": ["web", "frontend"],
				"type": "Tool"
			}
		],

	};

})();
