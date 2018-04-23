$(document).ready(function() {
	window.onbeforeunload = function () {
		$('#navbar').hide();
		$('#description_container').hide();
  		window.scrollTo(0, 0);
	}

	$('#navbar').hide();
	$('#description_container').hide();


	function fadeInDescription() {
		$('#description_container').fadeIn("slow");
	}
	function fadeInNavBar() {
		$('#navbar').fadeIn("slow");
	}
	setTimeout(function() {fadeInDescription()}, 1000);
	setTimeout(function() {fadeInNavBar()}, 1500);



	$('#home').css('color','blue');

	$("#home").click(function(){
    	$("#home").css("color", "blue");
    	$("#background").css("color", "black");
    	$("#experience").css("color", "black");
    	$("#contact").css("color", "black");
    	$('html, body').animate({scrollTop:$('.landing_container').position().top}, 'slow');
	});


	$("#background").click(function(){
    	$("#home").css("color", "black");
    	$("#background").css("color", "blue");
    	$("#experience").css("color", "black");
    	$("#contact").css("color", "black");
    	$('html, body').animate({scrollTop:$('.background_page').position().top}, 'slow');

	});

	$("#experience").click(function(){
    	$("#home").css("color", "black");
    	$("#background").css("color", "black");
    	$("#experience").css("color", "blue");
    	$("#contact").css("color", "black");
    	$('html, body').animate({scrollTop:$('.experience_page').position().top}, 'slow');

	});

	$("#contact").click(function(){
    	$("#home").css("color", "black");
    	$("#background").css("color", "black");
    	$("#experience").css("color", "black");
    	$("#contact").css("color", "blue");
    	$('html, body').animate({scrollTop:$('.contact_page').position().top}, 'slow');

	});



	$("#contact_container").hover(function(){
		$('#navbar').show();
		$('#description_container').show();

	});


});
