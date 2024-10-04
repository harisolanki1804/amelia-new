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
var elementsId = [
    {
        dots: "serv-dot-01",
        more: "serv-more-01",
        btn: "servBtn01"
    },
    {
        dots: "serv-dot-02",
        more: "serv-more-02",
        btn: "servBtn02"
    },
    {
        dots: "serv-dot-03",
        more: "serv-more-03",
        btn: "servBtn03"
    },
    {
        dots: "serv-dot-04",
        more: "serv-more-04",
        btn: "servBtn04"
    },
    {
        dots: "serv-dot-05",
        more: "serv-more-05",
        btn: "servBtn05"
    },
    {
        dots: "serv-dot-06",
        more: "serv-more-06",
        btn: "servBtn06"
    },
    {
        dots: "serv-dot-07",
        more: "serv-more-07",
        btn: "servBtn07"
    },
    {
        dots: "faq-dot-01",
        more: "faq-more-01",
        btn: "faqBtn01"
    },
    {
        dots: "faq-dot-02",
        more: "faq-more-02",
        btn: "faqBtn02"
    },
    {
        dots: "faq-dot-03",
        more: "faq-more-03",
        btn: "faqBtn03"
    },
    {
        dots: "faq-dot-04",
        more: "faq-more-04",
        btn: "faqBtn04"
    },
    {
        dots: "faq-dot-05",
        more: "faq-more-05",
        btn: "faqBtn05"
    },
    {
        dots: "faq-dot-06",
        more: "faq-more-06",
        btn: "faqBtn06"
    },
    {
        dots: "faq-dot-07",
        more: "faq-more-07",
        btn: "faqBtn07"
    },
    {
        dots: "faq-dot-08",
        more: "faq-more-08",
        btn: "faqBtn08"
    },
    {
        dots: "faq-dot-09",
        more: "faq-more-09",
        btn: "faqBtn09"
    },
    {
        dots: "faq-dot-10",
        more: "faq-more-10",
        btn: "faqBtn10"
    },
]

elementsId.forEach(function (ids) {
    var btn = document.getElementById(ids.btn);
    btn.onclick = function () {
        toggleReadMore(ids.dots, ids.more, ids.btn);
    }
});

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
