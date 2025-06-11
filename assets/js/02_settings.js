// Getting the Setting Button
const settings = document.querySelector(".settings")

const settingsMenu = document.querySelector(".settings__menu")

var j = 0

settings.addEventListener("click", ()=>{
    j++
    j%2 == 1? settingsMenu.classList.add("active") : settingsMenu.classList.remove("active")
})


document.addEventListener('click', function(event) {
    const sideMenu = document.querySelector('.settings__menu')
    const settingsBtn = document.querySelector(".settings")


        if (sideMenu && settingsBtn && !sideMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
            
            sideMenu.classList.remove("active")
            j = 0
    }
});


// Background Change Color
const colors = document.querySelectorAll(".colors > div")

colors[0].addEventListener("click", ()=>{
    document.body.style.background = colors[0].dataset.value
    colors[0].style.border ="3px solid rgb(7, 238, 7)"
    colors[1].style.border =""
    colors[2].style.border =""
    colors[3].style.border =""

})
colors[1].addEventListener("click", ()=>{
    document.body.style.background = colors[1].dataset.value
    colors[1].style.border ="3px solid rgb(7, 238, 7)"
    colors[0].style.border ="none"
    colors[2].style.border =""
    colors[3].style.border =""
})
colors[2].addEventListener("click", ()=>{
    document.body.style.background = colors[2].dataset.value
    colors[2].style.border ="3px solid rgb(7, 238, 7)"
    colors[0].style.border ="none"
    colors[1].style.border =""
    colors[3].style.border =""
})
colors[3].addEventListener("click", ()=>{
    document.body.style.background = colors[3].dataset.value
    colors[3].style.border ="3px solid rgb(7, 238, 7)"
    colors[0].style.border ="none"
    colors[2].style.border =""
    colors[1].style.border =""
})


// Switch & Sound Control
const switchDiv = document.querySelector(".switch")

const switchCntrl = document.querySelector(".switch__ctrl")

let k = 0

switchDiv.addEventListener("click", ()=>{
    k++
    if(k%2 == 1){
        switchCntrl.style.right = "auto"
        switchCntrl.style.left = "0"
        switchCntrl.style.background = "rgba(37, 37, 49, 1.0)"
        switchCntrl.textContent ="OFF"
        alert("Sound is Now OFF")
    }
    else{
        switchCntrl.style.right = "0"
        switchCntrl.style.left = "auto"
        switchCntrl.textContent ="ON"
        switchCntrl.style.background = "maroon"
        alert("You Turned on the Sound")

    }
})