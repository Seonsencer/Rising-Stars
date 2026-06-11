// ===============================
// RISING STARS DOCUMENTARY EFFECTS
// ===============================

// NAVBAR EFFECT

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(0,0,0,.95)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.4)";

    }

    else{

        navbar.style.background =
        "rgba(0,0,0,.4)";

        navbar.style.boxShadow =
        "none";

    }

});

// REVEAL ANIMATION

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".chapter,.leader-card,.timeline-item,.intro-text"
).forEach(el=>{

observer.observe(el);

});

// PARALLAX HERO

window.addEventListener("scroll",()=>{

const hero =
document.querySelector(".hero");

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});

// BUTTON SMOOTH EFFECT

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

});

});

// FINAL TITLE TYPEWRITER

const finalTitle =
document.querySelector(
".final-scene h1"
);

if(finalTitle){

const text =
finalTitle.innerText;

finalTitle.innerText = "";

let i = 0;

setTimeout(()=>{

const typing =
setInterval(()=>{

finalTitle.innerText +=
text.charAt(i);

i++;

if(i >= text.length){

clearInterval(typing);

}

},100);

},500);

}

// RANDOM GLOW PULSE

setInterval(()=>{

const heroTitle =
document.querySelector(
".hero h1"
);

if(heroTitle){

heroTitle.style.transform =
"scale(1.02)";

setTimeout(()=>{

heroTitle.style.transform =
"scale(1)";

},500);

}

},4000);
// ========================
// NETFLIX LOADER
// ========================

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader =
document.getElementById("loader");

loader.classList.add("loader-hide");

},3000);

});
// ========================
// NETFLIX INTRO SEQUENCE
// ========================

const slides =
document.querySelectorAll(".intro-slide");

let currentSlide = 0;

function showSlide(){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[currentSlide]
.classList.add("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = slides.length - 1;

}

}

showSlide();

setInterval(()=>{

if(currentSlide < slides.length){

showSlide();

}

},1200);