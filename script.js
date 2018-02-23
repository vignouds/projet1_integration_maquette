/*Slider*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	var timeline = document.getElementById("timeline");
	timeline.classList.add("anime");
	timeline.style.opacity = "1";
 	showSlides(slideIndex += n);	
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

/*Google map*/

	function initMap() {
  var webagency = {lat: 48.873249, lng: 2.349772};
  var map = new google.maps.Map(document.getElementById('map'), {
      center: webagency,
      zoom: 15
  });
  var marker = new google.maps.Marker({
    	position: webagency,
    	map: map
  });
	}