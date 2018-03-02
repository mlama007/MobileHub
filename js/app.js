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
		$(".CSS").append(listedResources);
		//Match %data% with object
		const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
		//Replace %data% with object informtaion
		const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		//Add content to page
		$(".CSS li:last").append(formattedContent);	
	});

	//displays HTML topic resources
	topics.HTML.forEach(function(topic){ 
        $(".HTML").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".HTML li:last").append(formattedContent);	
	});

	//displays JS topic resources
	topics.JS.forEach(function(topic){ 
        $(".JS").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".JS li:last").append(formattedContent);	
	});

	//displays Git topic resources
	topics.Git.forEach(function(topic){ 
        $(".Git").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".Git li:last").append(formattedContent);	
	});

	//displays Learning topic resources
	topics.Learning.forEach(function(topic){ 
        $(".Learning").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".Learning li:last").append(formattedContent);	
	});

	//displays Resources topic resources
	topics.Resources.forEach(function(topic){ 
        $(".Resources").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".Resources li:last").append(formattedContent);	
	});

	//displays Frameworks topic resources
	topics.Frameworks.forEach(function(topic){ 
        $(".Frameworks").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".Frameworks li:last").append(formattedContent);	
	});

	//displays Practice topic resources
	topics.Practice.forEach(function(topic){ 
        $(".Practice").append(listedResources);
        const replaceChars={ "%link%":topic.link, "%img%": topic.image, "%title%": topic.title };
        const formattedContent = resourcesContent.replace(/%link%|%img%|%title%/g,
			function(match) {
				return replaceChars[match];
			});
		$(".Practice li:last").append(formattedContent);	
	});
};
topics.display();


//When Boxes are clicked
const main = function() {
    $('.topics li').click(function() {
		const category = $(this).attr('class');
		const removeSelected = $('.boxes').removeClass('selected');
		const addContent = $('.topicImg').addClass('content');
		const removeVisibility= $('.topicImg').removeClass('visible');


		if (category === "boxes CSSBox") {
			removeSelected
			$('.CSSBox').addClass('selected');
			addContent
			removeVisibility
			$('.CSS').removeClass('content');
			$('.CSS').addClass('visible');
		}		
		else if (category === "boxes HTMLBox") {
			removeSelected
			$('.HTMLBox').addClass('selected');
			addContent
			removeVisibility
			$('.HTML').removeClass('content');
			$('.HTML').addClass('visible');
		}		
		else if (category === "boxes JSBox") {
			removeSelected
			$('.JSBox').addClass('selected');
			addContent
			removeVisibility
			$('.JS').removeClass('content');
			$('.JS').addClass('visible');
		}			
		else if (category === "boxes GitBox") {
			removeSelected
			$('.GitBox').addClass('selected');
			addContent
			removeVisibility
			$('.Git').removeClass('content');
			$('.Git').addClass('visible');
		}
		else if (category === "boxes LearningBox") {
			removeSelected
			$('.LearningBox').addClass('selected');
			addContent
			removeVisibility
			$('.Learning').removeClass('content');
			$('.Learning').addClass('visible');
		}			
		else if (category === "boxes ResourcesBox") {
			removeSelected
			$('.ResourcesBox').addClass('selected');
			addContent
			removeVisibility
			$('.Resources').removeClass('content');
			$('.Resources').addClass('visible');
		}
		else if (category === "boxes FrameworksBox") {
			removeSelected
			$('.FrameworksBox').addClass('selected');
			addContent
			removeVisibility
			$('.Frameworks').removeClass('content');
			$('.Frameworks').addClass('visible');
		}			
		else if (category === "boxes PracticeBox") {
			removeSelected
			$('.PracticeBox').addClass('selected');
			addContent
			removeVisibility
			$('.Practice').removeClass('content');
			$('.Practice').addClass('visible');
		}	
	  });
}
   
  $(document).ready(main);