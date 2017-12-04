$(document).ready(function(){

	$("input").on('blur', function(){
		var element = $(this);
		if(element.val()){
			$(element).addClass('filled');
		}	else {
			$(element).removeClass('filled');
		}
	});
});