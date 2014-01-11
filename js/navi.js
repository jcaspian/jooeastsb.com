jQuery(document).ready(function(){
	$('.menu li').css( {backgroundPosition: "0 29px"});
	$('.menu li:eq(0)').css( {backgroundPosition: "0 0px"});
/*	$('.menu li').first().addClass('current').css( {backgroundPosition: "0 0px"});*/
});


$('.menu li')
	.mouseover(function(){
		$(this).stop().animate(
			{backgroundPosition:"(0 0px)"}, 
			{duration:1})
		})
	.mouseout(function(){
		if (!$(this).hasClass('current')){
			$(this).stop().animate(
				{backgroundPosition:"(0 29px)"}, 
				250,function(){$(this).css( {backgroundPosition: "0 29px"})});
			}
		})
	.click(function(){
		$('.menu li').css( {backgroundPosition: "0 29px"}).removeClass('current');
		$(this).addClass('current').css( {backgroundPosition: "0 0px"});
	});
$('.current')
	.css( {backgroundPosition: "0 0px"} )
	.mouseover(function(){
		$(this).stop().animate(
			{backgroundPosition:"(0 0px)"}, 
			{duration:250})
		})
	.mouseout(function(){
		$(this).stop().animate(
			{backgroundPosition:"(0 0px)"}, 
			250)
		});
