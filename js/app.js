//array of objects conatining Links
const topics = {
	"Beginner": [
		//Maria
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	"Intermediate": [
		//Maria
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	],
	"Advanded": [
		//Maria
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Varell
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
		//Jannaee
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"],
			"difficulty" :"Beginner",
			"type" : ["CSS", "HTML", "JS", "Frameworks", "Git", "Learning", "Editors", "Resources"],
		},
	]
};
topics.display = function () {
	topics.Beginner.forEach(function(topic){ 
        $("#first").append(HTMLprojectStart);
        var replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
		var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#first li:last").append(formattedprojectTitle);	
	});
	topics.Intermediate.forEach(function(topic){ 
        $("#second").append(HTMLprojectStart);
        var replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#second li:last").append(formattedprojectTitle);	
	});
	topics.Advanced.forEach(function(topic){ 
        $("#third").append(HTMLprojectStart);
        var replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#third li:last").append(formattedprojectTitle);	
	});
};
topics.display();