const mobnav=document.querySelector(".navbar-btn");
const navheader=document.querySelector(".header");
const togglenavbar=()=>{
    navheader.classList.toggle("active");
}
mobnav.addEventListener('click',()=>togglenavbar());