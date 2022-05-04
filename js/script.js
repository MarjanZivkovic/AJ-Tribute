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

//courses
const icons = document.querySelectorAll(".icons")
const links = document.querySelectorAll(".side-nav ul li a")

for (let icon of icons){
    icon.addEventListener("click", (e) =>{
        changeCourse(e)
    })
}
function changeCourse(e){
        const openedCourse = document.querySelector(".opened")
        const selectedIcon =document.querySelector(".selected")
        openedCourse.classList.remove("opened")
        selectedIcon.classList.remove("selected")
        e.target.classList.add("selected")
        const courseNumber = e.target.getAttribute("data-course")
        const relatedCourse = document.querySelector(`.course[data-course= "${courseNumber}"] `)
        relatedCourse.classList.add("opened")

        if( relatedCourse.classList.contains("dark") ){
            links.forEach((link) =>{
                link.style.color = "white"
            }) 
        }  else {
            links.forEach((link) =>{
                link.style.color = "#333333"
            }) 
        }  
}

//Podcast
//walk n talk
const celEl = document.getElementById("degreeC")
const FAHR = document.getElementById("dergeeF")

celEl.addEventListener("input", (x) => {  convertTemp(x) })

function convertTemp(x){
    if ((celEl.value >= -90) && (celEl.value <= 60)){
        FAHR.innerHTML = `It's &nbsp 
        <b> ${calculateTemp(celEl.value)} </b>  
        &nbsp degrees F`
    } else {
        FAHR.innerHTML = ""
        celEl.value = ""
        alert("Sorry, pal! Even though Effortless English is an out-of-this-planet system, this app handles only temperatures from this planet ;)")
    }
}
function calculateTemp (x){
    return Math.round((x * 9/5) + 32)
}
//episodes
const podcasttLeft = document.querySelector(".podcast-years-left")
const noShow = document.querySelectorAll(".noshow")
const counter = document.querySelector(".counter")
const podcastRight = document.querySelector(".podcast-years-right")

podcasttLeft.addEventListener("mouseenter", () => {
    noShow.forEach((no) => {
        no.style.opacity = 1
    })
} )
podcasttLeft.addEventListener("mouseleave", () => {
    noShow.forEach((no) => {
        no.style.opacity = 0.4
    })
} )

counter.innerText = "0"
const updateCounter = () => {
    const target = +counter.getAttribute("data-target")
    const c = +counter.innerText

    const increment = target / 300

    if ( c < target ){
        counter.innerText = Math.ceil(c + increment)
        setTimeout(updateCounter, 1)
    } else{
        counter.innerText = target 
    }
}

podcastRight.addEventListener("mouseenter", () => {
    updateCounter()
})

//book club and movie club
const AFarm = new Audio("audio/animal-farm.mp3")
const DUDown = new Audio("audio/dumbing.mp3")
const Bnw = new Audio ("audio/bnworld.mp3")
const Alchemist = new Audio("audio/alchemist.mp3")
const Charisma = new Audio("audio/charisma.mp3")
const Matrix = new Audio("audio/matrix.mp3")
const Money = new Audio("audio/money.mp3")
const Video = document.getElementById("video")
const bookBtn = document.querySelectorAll(".book-btn")
const pauseVideo = document.querySelector(".pause-video")


bookBtn[0].addEventListener(("click"), () =>{
    stopAFarm(); stopDUD(); stopALC(); stopCharisma();
    playAFarm()
})
function playAFarm(){
    AFarm.play()
}
function stopAFarm(){
    AFarm.pause()
}

bookBtn[1].addEventListener(("click"), () =>{
    stopAFarm(); stopDUD(); stopALC(); stopCharisma();
    playDUD()
})
function playDUD(){
    DUDown.play()
}
function stopDUD(){
    DUDown.pause()
}

bookBtn[2].addEventListener(("click"), () =>{
    stopALC(); stopAFarm(); stopDUD(); stopBnw(); stopCharisma();
    playALC()
})
function playALC(){
    Alchemist.play()
}
function stopALC(){
    Alchemist.pause()
}

bookBtn[3].addEventListener(("click"), () =>{
    stopALC(); stopAFarm(); stopDUD(); stopBnw(); stopCharisma();
    playBnw()
})
function playBnw(){
    Bnw.play()
}
function stopBnw(){
    Bnw.pause()
}

bookBtn[4].addEventListener(("click"), () =>{
    stopALC(); stopAFarm(); stopDUD(); stopBnw(); stopCharisma();
    playCharisma()
})
function playCharisma(){
    Charisma.play()
}
function stopCharisma(){
    Charisma.pause()
}

bookBtn[5].addEventListener(("click"), () =>{
    stopMatrix(); stopCharisma(); stopMoney();
    playMatrix();
    playVideo();
})
bookBtn[6].addEventListener(("click"), () =>{
    stopMatrix(); stopCharisma(); stopMoney();
    playMoney();
    playVideo();
})
pauseVideo.addEventListener("click", () => {
    stopVideo();
    stopMatrix();
    stopMoney(); 
})
function playMatrix(){
    Matrix.play()
}
function stopMatrix(){
    Matrix.pause()
}
function playMoney(){
    Money.play()
}
function stopMoney(){
    Money.pause()
}
function playVideo(){
    Video.play()
}  
function stopVideo(){
    Video.pause()
}
