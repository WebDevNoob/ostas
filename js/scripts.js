var timerId = null;
$(document).ready(function(){
	$(".intro-section .container").fadeIn(1500);
	var d = new Date();
	var n = d.getDay();
	switch(n){
		case 1:
			$("#mon").addClass("dow");
			break;
		case 2:
			$("#tue").addClass("dow");
			break;
		case 3:
			$("#wed").addClass("dow");
			break;
		case 4: 
			$("#thu").addClass("dow");
			break;
		case 5: 
			$("#fri").addClass("dow");
			break;
		case 6:	
			$("#sat").addClass("dow");
			break;
		case 7:
			$("#sun").addClass("dow");
			break;
		default:
			break;
	}
	displayCheck();
	$( window ).resize(displayCheck());
	startRot();
	$(".col-lg-12.aboutQuarter.reviewsImg").hover(stopRot, startRot);
});

function displayCheck(){
	if(!($(window).height() > 575)){
		$(".ostaLogo").hide();
	}else{
		$(".ostaLogo").show();
	}
}


function startRot(){
	if(timerId){
		return;
	}
	timerId = setInterval(display,5000);
}
function stopRot(){
	if(!timerId){
		return;
	}
	clearInterval(timerId);
	timerId = null;
}
function display(){
	if ($(".col-lg-offset-3.blurb:visible").next().length != 0){
		$(".col-lg-offset-3.blurb:visible").fadeOut(function(){
			$(this).next().slideDown(1000);
		});
	}else{
		$(".col-lg-offset-3.blurb:visible").fadeOut(function(){
			$(".col-lg-offset-3.blurb:first").slideDown(1000);
		});
	}
}

