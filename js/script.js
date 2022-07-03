const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".navbar-list");
const toggleClose = document.querySelector(".menu-close");
let navBarList = document.querySelector(".navbar-list");
let navBarLink = document.getElementsByClassName("navbar-link");

// Add nav shadow when scroll down
window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('nav');
    const scrollY = this.scrollY;
    if(scrollY>0) {
        nav.classList.add("add-shadow");
    } else {
        nav.classList.remove("add-shadow");
    }
});

toggleMenu.addEventListener("click", () => {
    if (toggleMenu.classList.contains("change")) {
        toggleMenu.classList.remove("change");
        navBar.classList.remove("active");
        toggleClose.classList.remove("active");
        document.querySelector("body").style.overflow = "visible";
    } else {
        toggleMenu.classList.add("change");
        navBar.classList.add("active");
        toggleClose.classList.add("active");
        document.querySelector("body").style.overflow = "hidden";
    }
});

for (y = 0; y < navBarLink.length; y++) {
    navBarLink[y].addEventListener("click", () => {
      if (navBarList.classList.contains("active")) {
        navBarList.classList.remove("active");
        toggleMenu.classList.remove("change");
        toggleClose.classList.remove("active");
        document.querySelector("body").style.overflow = "visible";
      }
      if (navBarLink.classList.contains("active")) {
        navBarLink.classList.remove("active");
      } else {
        navBarLink.classList.add("active");
      }
    });
  }