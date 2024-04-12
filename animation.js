var SlideIndex = 0
carousel()

function carousel() {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    SlideIndex++;
    if (SlideIndex > slides.length) {SlideIndex = 1}
    slides[SlideIndex - 1].style.display = "block"
    setTimeout(carousel, 3000)
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade")
    }
    slides[SlideIndex - 1].classList.add("fade");
}