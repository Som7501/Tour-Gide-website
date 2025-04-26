let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.querySelector(".img1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000);
}
