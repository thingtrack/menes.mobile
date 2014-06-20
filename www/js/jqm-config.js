$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false; 

    /* closing the menus after click in item */
    $('#main-menu').on('click', 'a', function(){
 		$("#main-menu").panel("close");
	});  
});