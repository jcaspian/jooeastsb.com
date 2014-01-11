function slideShow(id,speed) {
	
	//append a LI item to the UL list for displaying caption
    //$(id).append('<li id="slideshow-caption" class="caption"><div class="slideshow-caption-container"><h3></h3><p></p></div></li>');
 
    //Set the opacity of all images to 0
    $(id+' li').css({opacity: 0.0});
     
    //Get the first image and display it (set it to full opacity)
    $(id+' li:first').css({opacity: 1.0});
     
    //Get the caption of the first image from REL attribute and display it
    $('#slideshow-caption h3').html($(id+' a:first').find('img').attr('title'));
    $('#slideshow-caption p').html($(id+' a:first').find('img').attr('alt'));
         
    //Display the caption
    $('#slideshow-caption').css({opacity: 0.7, bottom:0});
    
    setInterval(function(){cycle(id)},speed);
}

function cycle(id) {
    
    //if no IMGs have the show class, grab the first image
    var current = ($(id+' li.show')?  $(id+' li.show') : $(id+' li:first'));
 
    //Get next image, if it reached the end of the slideshow, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().attr('id') == 'slideshow-caption')? $(id+' li:first') :current.next()) : $(id+' li:first'));
         
    //Get next image caption
    var title = next.find('img').attr('title'); 
    var desc = next.find('img').attr('alt');    
         
    //Set the fade in effect for the next image, show class has higher z-index
    next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, {duration:1000,queue:false});
     
    //Hide the caption first, and then set and display the caption
//    $('#slideshow-caption').slideToggle(300, function () { 
//        $('#slideshow-caption h3').html(title); 
//        $('#slideshow-caption p').html(desc); 
//        $('#slideshow-caption').slideToggle(500); 
//    }); 
 
    //Hide the current image
    current.animate({opacity: 0.0}, {duration:1000,queue:false}).removeClass('show');

}