$('.slider-area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows:false
});
// setInterval(nextSlide, 2000);

const button = document.getElementById("dropdownDelayButton");
const dropdown = document.getElementById("dropdownDelay");

button.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});

button.addEventListener("mouseleave", () => {
    setTimeout(() => {
        dropdown.classList.add("hidden");
    }, 500);
});

button.addEventListener("mouseenter", () => {
    dropdown.classList.remove("hidden");
});


const currencyBtn = document.getElementById("dropdownCurrency");
const crcyDropdown = document.getElementById("dropdownDelayCurrency");

currencyBtn.addEventListener("click", () =>{
    crcyDropdown.classList.toggle("hidden");
});

currencyBtn.addEventListener("mouseleave", () => {
    setTimeout(() => {
        crcyDropdown.classList.add("hidden");
    }, 500);
});

currencyBtn.addEventListener("mouseenter", () => {
    dropdown.classList.remove("hidden");
});

// //slider
// document.addEventListener("DOMContentLoaded", function () {
//     const imageSlider = document.getElementById("image-slider");
//     const imageSlides = document.querySelectorAll(".image-slide");
//     let currentSlide = 0;
  
//     function showSlide(slideIndex) {
//       for (let i = 0; i < imageSlides.length; i++) {
//         imageSlides[i].style.display = "none";
//       }
//       imageSlides[slideIndex].style.display = "block";
//     }
  
//     function nextSlide() {
//       currentSlide = (currentSlide + 1) % imageSlides.length;
//       showSlide(currentSlide);
//     }
  
//     showSlide(currentSlide);
  
//     setInterval(nextSlide, 2000);
// });