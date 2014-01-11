$(document).ready(function() {
	var $currentIFrame = $('#ifr');
	var linkLocation;
    $("body").css("display", "none");
 
    $("body").fadeIn(500);
 
    $("a.fadeself").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(250, redirectPage);
    });
    $("a.fadeifr").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        linkLocation = linkLocation;
		$('#ifr').contents().find("body").fadeOut(250, redirectIframe);
    });
 
    function redirectPage() {
        window.location = linkLocation;
    }
    function redirectIframe() {
//    	alert('frame current location: '+$('#ifr').attr("src"));
		$('#ifr').attr('src', linkLocation);
//		alert('linkLocation: '+linkLocation+'. frame current location: '+$('#ifr').attr("src"));
//		document.getElementById('ifr').src = linkLocation;
//		window.frames["ifr"].location = linkLocation;
//		window.frames["ifr"].location.reload();
    }
});
