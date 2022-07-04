const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".navbar-list");
const toggleClose = document.querySelector(".menu-close");
const toggleOpen = document.querySelector(".menu-open");

let navBarList = document.querySelector(".navbar-list");
let navBarLink = document.getElementsByClassName("navbar-link");

// Get elements for changing theme
let theme = document.getElementById("theme");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let logo = document.querySelector(".logo");

// let icons = document.querySelectorAll(".icons");
// let linkedIn = document.querySelectorAll(".linkedin");
// let github = document.querySelector(".github");
// let dribbble = document.querySelector(".dribbble");

let about = document.querySelector(".about");
let projects = document.querySelector(".projects");
let connect = document.querySelector(".connect");
let footer = document.querySelector("footer");

// Add nav shadow when scroll down
window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('nav');
  const scrollY = this.scrollY;
  if(scrollY>0) {
      nav.classList.add("nav-shadow");
  } else {
      nav.classList.remove("nav-shadow");
  }
});

// Show/Hide navigation when menu is clicked
toggleMenu.addEventListener("click", () => {
  if (toggleMenu.classList.contains("change")) {
      toggleMenu.classList.remove("change");
      navBar.classList.remove("active");
      toggleClose.classList.remove("active");
      toggleOpen.classList.remove("active");
      document.querySelector("body").style.overflow = "visible";
  } else {
      toggleMenu.classList.add("change");
      navBar.classList.add("active");
      toggleClose.classList.add("active");
      toggleOpen.classList.add("active");
      document.querySelector("body").style.overflow = "hidden";
  }
});

// Hide navigation when link is clicked
for (y = 0; y < navBarLink.length; y++) {
  navBarLink[y].addEventListener("click", () => {
    if (navBarList.classList.contains("active")) {
      navBarList.classList.remove("active");
      toggleMenu.classList.remove("change");
      toggleClose.classList.remove("active");
      toggleOpen.classList.remove("active");
      document.querySelector("body").style.overflow = "visible";
    }
    if (navBarLink.classList.contains("active")) {
      navBarLink.classList.remove("active");
    } else {
      navBarLink.classList.add("active");
    }
  });
}

// Change theme
theme.addEventListener("change", event => {
  if (event.target.checked) {
    body.classList.add("dark");
    nav.classList.add("dark");
    nav.classList.add("add-shadow.dark");
    logo.style.backgroundImage = "url('../img/logo-dark.svg')";

    projects.style.backgroundImage = "url('../img/code-backgroundv2.svg')";
    footer.classList.add("dark");

    // Get all links and add dark class
    for (i = 0; i < navBarLink.length; i++) {
      navBarLink[i].classList.add("dark");
    }
  } else {
    body.classList.remove("dark");
    nav.classList.remove("dark");
    about.classList.remove("dark");
    logo.style.backgroundImage = "url('../img/logo-light.svg')";
    
    // linkedIn.style.backgroundImage = "url('../img/light-linkedin.svg')";
    // github.style.backgroundImage = "url('../img/light-github.svg')";
    // dribbble.style.backgroundImage = "url('../img/light-dribbble.svg')";

    projects.style.backgroundImage = "url('../img/code-background.svg')";
    footer.classList.remove("dark");

    // Get all links and remove dark class
    for (i = 0; i < navBarLink.length; i++) {
      navBarLink[i].classList.remove("dark");
    }
  }
});

// function getAllIcons() {
//   for (i=0; i<icons.length; i++) {
    
//   }

//   for (i=0; i<icons.length; i++) {
    
    
//   }
// }

// function darkIcons() {
//   for (i=0; i<icons.length; i++) {
//     icons[i].style.width = "45px";
//     icons[i].style.height = "45px";
//   }

//   for (i=0; i<icons.length; i++) {
//     linkedIn[i].style.backgroundImage = "url('../img/dark-linkedin.svg')";
    
//   }

//   github.style.backgroundImage = "url('../img/dark-github.svg')";
//   dribbble.style.backgroundImage = "url('../img/dark-dribbble.svg')";
// }

// function lightIcons() {

// }