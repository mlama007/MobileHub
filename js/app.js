const projects = {
	"firstProjects": [
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		},
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		},
	],
	"secondProjects": [
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		},
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		}
	],
	"thirdProjects": [
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		},
		{
			"title": "codecademy",
			"link": "https://www.codecademy.com/learn",
			"image": ["img/Codecademy.png"]
		},
	]
};
projects.display = function () {
	projects.firstProjects.forEach(function(firstProject){ 
        $("#first").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#first li:last").append(formattedprojectTitle);	
	});
	projects.secondProjects.forEach(function(firstProject){ 
        $("#second").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#second li:last").append(formattedprojectTitle);	
	});
	projects.thirdProjects.forEach(function(firstProject){ 
        $("#third").append(HTMLprojectStart);
        var replaceChars={ "%link%":firstProject.link, "%img%": firstProject.image, "%title%": firstProject.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,function(match) {return replaceChars[match];})
		$("#third li:last").append(formattedprojectTitle);	
	});
};
projects.display();