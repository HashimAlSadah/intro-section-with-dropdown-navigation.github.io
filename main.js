const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=> {
    navBar.classList.add("open");
    overlay.style.height = "100%";
});

closeBtn.addEventListener("click", ()=> {
    navBar.classList.remove("open");
    overlay.style.height = "0";
});

menu.addEventListener("click", (event)=> {
    let target = event.target;
    let targetSibling = target.nextElementSibling;
    if(target.dataset.hasSubMenu == "true" && !targetSibling.classList.contains("active")){
        targetSibling.classList.add("active");
        target.children[0].style.transform = "rotate(180deg)";
    }
    else if(target.dataset.hasSubMenu == "true" && target.nextElementSibling.classList.contains("active")){
        targetSibling.classList.remove("active");
        target.children[0].style.transform = null;
    }
    
})