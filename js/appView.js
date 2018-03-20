(function(undefined) {
    //When Categories are clicked

    window.MobileHub = window.MobileHub || {};
    var exports = {};

    //When Boxes are clicked
    const main = function() {
        $('.topics li').click(function() {
			const category = $(this).attr('class');
		    const removeSelected = $('.boxes').removeClass('selected');
		    const addContent = $('.topicImg').addClass('content');
			const removeVisibility= $('.topicImg').removeClass('visible');
			
			$('.aboutUs').addClass('NoContent');
			
			
			$('.All').addClass('ViewContent');
			$('.All').removeClass('NoContent');
			
			// When CSS clicked
		    if (category === "boxes CSSBox") {
		    	removeSelected
		    	$('.CSSBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.CSS').removeClass('content');
				$('.CSS').addClass('visible');
				// $('.main').style.display = "none";
			}
			// When HTML clicked	
		    else if (category === "boxes HTMLBox") {
		    	removeSelected
		    	$('.HTMLBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.HTML').removeClass('content');
		    	$('.HTML').addClass('visible');
			}
			// When JS clicked	
		    else if (category === "boxes JSBox") {
		    	removeSelected
		    	$('.JSBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.JS').removeClass('content');
		    	$('.JS').addClass('visible');
			}
			// When Git clicked
		    else if (category === "boxes GitBox") {
		    	removeSelected
		    	$('.GitBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.Git').removeClass('content');
		    	$('.Git').addClass('visible');
			}
			// When Learning clicked
		    else if (category === "boxes LearningBox") {
		    	removeSelected
		    	$('.LearningBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.Learning').removeClass('content');
		    	$('.Learning').addClass('visible');
			}
			// When Resources clicked			
		    else if (category === "boxes ResourcesBox") {
		    	removeSelected
		    	$('.ResourcesBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.Resources').removeClass('content');
		    	$('.Resources').addClass('visible');
			}
			// When Frameworks clicked
		    else if (category === "boxes FrameworksBox") {
		    	removeSelected
		    	$('.FrameworksBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.Frameworks').removeClass('content');
		    	$('.Frameworks').addClass('visible');
			}
			// When Practice is clicked
		    else if (category === "boxes PracticeBox") {
		    	removeSelected
		    	$('.PracticeBox').addClass('selected');
		    	addContent
		    	removeVisibility
		    	$('.Practice').removeClass('content');
		    	$('.Practice').addClass('visible');
			}
			// When anything else is clicked
			else{
				$('.All').removeClass('ViewContent');
				$('.All').addClass('NoContent');
				console.log("HERE");
				$('.aboutUs').removeClass('NoContent');
			}
      });
    }
    
    $(document).ready(main);
})();