/*
These are HTML strings. JavaScript functions 
These are HTML strings. JavaScript functions
replace the %data% placeholder text you see in them.
*/

// Create list with content
const listedResources = '<li></li>';
const resourcesContent = '<a href="%link%"><img src="%img%"/><span class="text-content"><span>%title%</span></span></a>';


//Display content from topic
topics.display = function () {

	//displays CSS topic resources
	topics.CSS.forEach(function(topic){ 
		$("#CSS").append(listedResources);
		//Match %data% with object
		const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
		//Replace %data% with object informtaion
		const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		//Add content to page
		$("#CSS li:last").append(formattedContent);	
	});

	//displays HTML topic resources
	topics.HTML.forEach(function(topic){ 
        $("#HTML").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#HTML li:last").append(formattedContent);	
	});

	//displays JS topic resources
	topics.JS.forEach(function(topic){ 
        $("#JS").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#JS li:last").append(formattedContent);	
	});

	//displays Git topic resources
	topics.Git.forEach(function(topic){ 
        $("#Git").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#Git li:last").append(formattedContent);	
	});

	//displays Learning topic resources
	topics.Learning.forEach(function(topic){ 
        $("#Learning").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#Learning li:last").append(formattedContent);	
	});

	//displays Editors topic resources
	topics.Editors.forEach(function(topic){ 
        $("#Editors").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#Editors li:last").append(formattedContent);	
	});

	//displays Resources topic resources
	topics.Resources.forEach(function(topic){ 
        $("#Resources").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#Resources li:last").append(formattedContent);	
	});

	//displays Frameworks topic resources
	topics.Frameworks.forEach(function(topic){ 
        $("#Frameworks").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#Frameworks li:last").append(formattedContent);	
	});
};
topics.display();


//Functionality of the Category Boxes
