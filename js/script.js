//hamburger button
const sideMenu = document.querySelector(".exposed")
const hamburgerBtn =  document.getElementById("hamburger")

hamburgerBtn.addEventListener("click", () => showNavigation() )

function showNavigation(){
    if (sideMenu.style.display === "none") {
         sideMenu.style.display = "block"
    } else {
        sideMenu.style.display = "none"
    }
}
// go to top btn
const goToTop = document.querySelectorAll(".gototop")

window.addEventListener("scroll", () =>{
    toTopHandler()
})

function toTopHandler(){
    if(( document.body.scrollTop > 500) || (document.documentElement.scrollTop > 500)){
        goToTop.forEach((goTo) =>{
            goTo.style.display = "block"
        })
    } else {
        goToTop.forEach((goTo) =>{
            goTo.style.display = "none"
        })
    } 
}