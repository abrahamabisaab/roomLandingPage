var i = 0;
var r = 0;
var t = 0;
var titles = [];
var paragraphs = [];
var images = [];
var arrowLeft = document.getElementById("arrow__left");
var arrowRight = document.getElementById("arrow__right");
var heroSection = document.getElementById("heroSection");
var firstTitle = document.getElementById("firstTitle");
var secondTitle = document.getElementById("secondTitle");
var thirdTitle = document.getElementById("thirdTitle");
var firstParagraph = document.getElementById("firstParagraph");
var secondParagraph = document.getElementById("secondParagraph");
var thirdParagraph = document.getElementById("thirdParagraph");
var nav = document.getElementById("navigation");
var hamburger = document.getElementById("hamburger");
var navList = document.getElementById("navList");
var navLinks = document.getElementsByClassName("nav__links");
var a = document.getElementsByTagName("a");
var hamburgerClosed = document.getElementById("hamburgerClosed");
var logo = document.getElementById("logo");
paragraphs[0] = firstParagraph.innerHTML;
paragraphs[1] = secondParagraph.innerHTML;
paragraphs[2] = thirdParagraph.innerHTML
titles[0] = firstTitle.innerHTML;
titles[1] = secondTitle.innerHTML;
titles[2] = thirdTitle.innerHTML;
images[0] = './images/desktop-image-hero-1.jpg';
images[1] = './images/desktop-image-hero-2.jpg';
images[2] = './images/desktop-image-hero-3.jpg';

arrowLeft.addEventListener("click", () => {
    if (i < images.length + 1 && i > 0) {
        i--;
    } else{
        i = 2;
    }
    heroSection.style.backgroundImage = "url(" + images[i] + ")";

    if (t < titles.length + 1 && t > 0) {
        t--;
    } else{
        t = 2;
    }
    firstTitle.innerHTML = titles[t];

    if (r < paragraphs.length + 1 && r > 0) {
        r--;
    } else{
        r = 2;
    }
    firstParagraph.innerHTML = paragraphs[r];
});

arrowRight.addEventListener("click", () => {

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    heroSection.style.backgroundImage = "url(" + images[i] + ")";

    if (t < titles.length - 1) {
        t++;
    } else {
        t = 0;
    }console.log(r + "t");
    firstTitle.innerHTML = titles[t];
    
    if (r < paragraphs.length - 1) {
        r++;
    } else{
        r = 0;
    }
    console.log(r + "p");
    firstParagraph.innerHTML = paragraphs[r];
});

hamburger.addEventListener("click", () => { 
    if (nav.className === "navigation") {
      nav.className += " responsive";
      navList.style.display = "flex";
      hamburgerClosed.style.display = "flex";
      hamburger.style.visibility = "hidden";
      logo.style.visibility = "hidden";

    } else {
      nav.className = "navigation";
    }
    for(var i=0;i<a.length;i++){
        a[i].style.color = "black";
    }
  }); 

  hamburgerClosed.addEventListener("click", () => { 
    if (nav.className === "navigation responsive"){
        nav.className = "navigation";
        navList.style.display = "none";
        hamburgerClosed.style.display = "none";
        hamburger.style.visibility = "visible";
        logo.style.visibility = "visible";
    }else{
        nav.className = " navigation responsive";

    }
  });