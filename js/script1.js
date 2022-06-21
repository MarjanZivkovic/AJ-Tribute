//Podcast
//change navigation
const podcastNav = document.querySelector(".podcast-nav")
const podcastHeader = document.getElementById("podcast-header")

window.addEventListener("scroll", () =>{
    changeNav()
})

function changeNav(){
    if( window.scrollY > podcastHeader.offsetHeight ){
        podcastNav.classList.remove("scrolled")
    } else {
         podcastNav.classList.add("scrolled")
    }
}
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
