// // Click To Button Hamburger Open Menu
const toggleMenu = document.querySelector('#btnHamburger');
const btnCloseMenu = document.getElementById("btnCloseMenu");
const navBottom = document.getElementById("navBottom");
let overlay = document.getElementById("Ovelay");
let body = document.body;

function removeClass(elem,className) {
    return elem.classList.remove(className)
}

function addCalss(elem,className) {
    return elem.classList.add(className)
}

function hasClass(elem,className) {
    return elem.classList.contains(className)
}


// Click Button Open Menu
toggleMenu.onclick = () => {
  if(! hasClass(toggleMenu,'toggleHamburger')){
        addCalss(toggleMenu,'toggleHamburger')
        removeClass(navBottom,'hidden')
        addCalss(navBottom,'flex')
        addCalss(body,'overflow-hidden')
        removeClass(overlay,'hidden')
  }else{
    removeClass(toggleMenu,'toggleHamburger')
  }
};

// Click Btn Close Menu
btnCloseMenu.addEventListener("click" , ()=>{
    addCalss(overlay,'hidden');
    removeClass(body,'overflow-hidden');
    removeClass(toggleMenu,'toggleHamburger')
    removeClass(navBottom,'flex')
    addCalss(navBottom,'hidden')
})

// Click Overlay Close Menu
overlay.addEventListener("click",()=>{
    addCalss(overlay,'hidden');
    removeClass(body,'overflow-hidden');
    removeClass(toggleMenu,'toggleHamburger')
    removeClass(navBottom,'flex')
    addCalss(navBottom,'hidden')
})

// Window Resize
window.addEventListener("resize",()=>{
    addCalss(overlay,'hidden');
    removeClass(body,'overflow-hidden');
    removeClass(toggleMenu,'toggleHamburger')
    addCalss(navBottom,'hidden')
})
// End Event

// Click BtnTop Scroll Top Page
let btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click",  // Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}  )
// End Event
