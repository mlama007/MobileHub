/*
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
		$("#first").append(listedResources);
		//Match %data% with object
		const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
		//Replace %data% with object informtaion
		const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		//Add content to page
		$("#first li:last").append(formattedContent);	
	});

	//displays HTML topic resources
	topics.HTML.forEach(function(topic){ 
        $("#second").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#second li:last").append(formattedContent);	
	});

	//displays JS topic resources
	topics.JS.forEach(function(topic){ 
        $("#third").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$("#third li:last").append(formattedContent);	
	});
};
topics.display();


