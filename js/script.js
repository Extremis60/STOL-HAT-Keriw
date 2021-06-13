// Scroll Up Button skrypt
$(document).ready(function(){

	$(window).scroll(function(){
		if($(this).scrollTop()>40){
			$('#scrollUpBtn').fadeIn();
		}else{
			$('#scrollUpBtn').fadeOut();
		}	
	});


	$("#scrollUpBtn").click(function(){
		$('html, body').animate({scrollTop : 0},800);
	});
});

/*slide test*/
var slideIndex = 1;
showSlides(slideIndex);

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 3000);
  }

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}