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

// DROPDOWN :-
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// IMAGE SLIDER :-
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
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
}

setInterval(() => {
    plusSlides(1);
}, 5000)

// READ MORE :-

function toggleReadMore(dotsId, moreId, btnId) {
    var servdots = document.getElementById(dotsId);
    var servmoreText = document.getElementById(moreId);
    var servbtnText = document.getElementById(btnId);

    if (servdots.style.display === "none") {
        servdots.style.display = "inline";
        servbtnText.innerHTML = "Read more";
        servmoreText.style.display = "none";
    } else {
        servdots.style.display = "none";
        servbtnText.innerHTML = "Read less";
        servmoreText.style.display = "inline";
    }
}
