const handleNavigation = () => {
    
    const nav_anchor = document.querySelectorAll(".nav-anchor");
nav_anchor.forEach((anchor)=>{
    anchor.addEventListener("click",(event)=>{
        if (event.target.id=="address"){
            window.location.href = "./subpages/address.html"
        }else if (event.target.id=="contact-us"){
            window.location.href = "./subpages/contactUs.html"
        }else if (event.target.id=="complain"){
            window.location.href = "./subpages/complain.html"
        }
    })
})
};

window.addEventListener("DOMContentLoaded",handleNavigation)