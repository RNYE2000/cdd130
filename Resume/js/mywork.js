let slideOneIndex = 0;
let slideTwoIndex = 0;
function ChangeSlide(sliderNumber, n){
    let slider = document.getElementById('slideshow'+sliderNumber);
    let slides = slider.getElementsByClassName('slide' + sliderNumber);
    let numOfSlides = slides.length-1;
    if(sliderNumber == 1){
        slides[slideOneIndex].classList.remove('active');
        slideOneIndex += n;
        if(slideOneIndex > numOfSlides){
            slideOneIndex = 0;
        } else if(slideOneIndex < 0){
            slideOneIndex = numOfSlides;
        }
        slides[slideOneIndex].classList.add('active');
    } else if (sliderNumber == 2){
        slides[slideTwoIndex].classList.remove('active');
        slideTwoIndex += n;
        if(slideTwoIndex > numOfSlides){
            slideTwoIndex = 0;
        } else if(slideTwoIndex < 0){
            slideTwoIndex = numOfSlides;
        }
        slides[slideTwoIndex].classList.add('active');
    }
}