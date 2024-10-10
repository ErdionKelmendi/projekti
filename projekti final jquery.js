var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let b = document.getElementById("b")
let output = document.getElementById("o");

let number = [Math.floor(Math.random()*100)];

b.addEventListener('click',function(){
  let input = document.getElementById("in").value;
  if (input == number){
    output.innerHTML = 'You guessed right,your number was:' + number
  } else if (input < number){
    output.innerHTML = 'You guessed too low!'
  };
  if (input > number){
    output.innerHTML = 'You guessed too high!'
  }
});