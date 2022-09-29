const hamburger = document.getElementById("hamburger");
const navmenu = document.getElementById("nav-menu")
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("hamburger-active");
    navmenu.classList.toggle("hidden");
})

window.onscroll = () =>{
    const header = document.getElementById("header");
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add("navbar-fixed");
    }
    else{
        header.classList.remove("navbar-fixed");
    }
}

