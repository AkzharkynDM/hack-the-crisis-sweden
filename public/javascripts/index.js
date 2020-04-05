const dragElements = document.querySelectorAll(".card");
for(var i = 0; i<dragElements.length; i++) {
  dragElements[i] && $(dragElements[i]).draggable({stack: '.card'});
}

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});