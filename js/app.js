/*
These are HTML strings. JavaScript functions
replace the %data% placeholder text you see in them.
*/

// Projects
var HTMLprojectStart = '<li></li>';
var HTMLprojectTitle = '<a href="%link%"><img src="%img%"/><span class="text-content"><span>%title%</span></span></a>';


//Display content from topic
topics.display = function () {
	topics.CSS.forEach(function(topic){ 
        $("#first").append(HTMLprojectStart);
        var replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
		var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#first li:last").append(formattedprojectTitle);	
	});
	topics.HTML.forEach(function(topic){ 
        $("#second").append(HTMLprojectStart);
        var replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        var formattedprojectTitle = HTMLprojectTitle.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#second li:last").append(formattedprojectTitle);	
	});
	topics.JS.forEach(function(topic){ 
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


