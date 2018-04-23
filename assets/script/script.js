$(document).ready(function() {
	window.onbeforeunload = function () {
		$('#navbar').hide();
		$('#description_container').hide();
  		window.scrollTo(0, 0);
	}

	$('#navbar').hide();
	$('#description_container').hide();


	function fadeInDescription() {
		$('#description_container').fadeIn(1000);
	}
	function fadeInNavBar() {
		$('#navbar').fadeIn(1000);
	}
	setTimeout(function() {fadeInDescription()}, 1000);
	setTimeout(function() {fadeInNavBar()}, 2000);



	$('#home').css('color','blue');

	$("#home").click(function(){
    	$("#home").css("color", "blue");
    	$("#background").css("color", "black");
    	$("#contact").css("color", "black");
	  	$("html, body").animate({ scrollTop: 0 }, 1200);

	});


	$("#background").click(function(){
    	$("#home").css("color", "black");
    	$("#background").css("color", "blue");
    	$("#contact").css("color", "black");
	  	$("html, body").animate({ scrollTop: 1000 }, 1200);

	});

	$("#contact").click(function(){
    	$("#home").css("color", "black");
    	$("#background").css("color", "black");
    	$("#contact").css("color", "blue");
	  	$("html, body").animate({ scrollTop: 4000 }, 2500);

	});

	$("#contact_container").hover(function(){
		$('#navbar').show();
		$('#description_container').show();

	});


});
