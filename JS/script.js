// HAMBURGER MENU :-
const hamBtn = document.querySelector('#ham-btn');
const navBar = document.querySelector('.nav-bar-top');
const icon = document.querySelector("i.fa-solid")

hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle("active");
    navBar.classList.toggle("active");
    if (icon.classList.contains('fa-bars')) {
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
    }

    if (navBar.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
})


// IMAGE SLIDER :-
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

setInterval(function () {
    plusSlides(1);
}, 2000);

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction01() {
    var dots01 = document.getElementById("dots01");
    var moreText01 = document.getElementById("more01");
    var btnText01 = document.getElementById("myBtn01");

    if (dots01.style.display === "none") {
        dots01.style.display = "inline";
        btnText01.innerHTML = "Read more";
        moreText01.style.display = "none";
    } else {
        dots01.style.display = "none";
        btnText01.innerHTML = "Read less";
        moreText01.style.display = "inline";
    }
}
