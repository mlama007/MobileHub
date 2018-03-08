(function(undefined) {
    //When Boxes are clicked

    window.MobileHub = window.MobileHub || {};
    var exports = {};

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
})();