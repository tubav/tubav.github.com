console.log('This would be the main JS file.');


$(document).ready(function() {

	$("a.various").fancybox({
		'hideOnContentClick': true
	});
	
	
	$("a.screencast").fancybox({
		'hideOnContentClick': false
	});

	
});
