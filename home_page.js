const home = document.querySelector(".home");
const myTrip = document.querySelector(".mytrips");
const submitButton = document.querySelector("#sbmtBtn");
const searchIcon = document.querySelector(".search_icon");
const placeSearchButton = document.querySelector("#Search_Button");


home.addEventListener("click", ()=>{
  window.alert("this button isn't working right now!");
});

myTrip.addEventListener("click", ()=>{
  window.alert("this button isn't working right now!");
});

searchIcon.addEventListener("click", ()=>{
  window.alert("Result not found! Try again");
});

submitButton.addEventListener("click", ()=>{
  window.alert("Your querry have been submitted, We will inform you via your mail/contact number.");
});


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

placeSearchButton.addEventListener("click", ()=>{
  window.alert("Sorry but this isn't available now!")
});