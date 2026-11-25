document.addEventListener("DOMContentLoaded", ()=>{
    
    const navlinks = document.querySelectorAll(".nav-item");
    
    
    const currentPath = window.location.pathname; //determing the url of active page

    navlinks.forEach(link =>{
        if(link.getAttribute("href") ===currentPath.split("/").pop()){
            link.classList.add("active");

            }
    });
});