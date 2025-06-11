// Shorten Console Message
const cl = console.log


// Get the Buttons
const calc_nums = document.querySelectorAll(".calc__buttons-nums--num")

const calc_opr = document.querySelectorAll(".calc__buttons-oprs--opr")



// Get the Audio Files
const audioDown = new Audio("./assets/FX/buttondown.mp3")
const audioUp = new Audio("./assets/FX/buttonup.mp3")




// Shadow Object
const shadows ={
    numShadow: "2px 2px 4px 2px rgba(28, 28, 36, 1.0)",
    numShadowActive: "inset 2px 2px 4px 2px rgba(28, 28, 36, 1.0)",
    oprShadow: "inset 2px 2px 4px 2px rgba(28, 28, 36, 1.0)",
}

const mouseDownNum = (object)=>{
    return object.forEach(item =>{
    item.addEventListener("mousedown", ()=>{
        item.style.boxShadow = shadows.numShadowActive
        if (k%2 == 0){
            audioUp.pause()
            audioUp.currentTime = 0
            audioDown.play()
        }
        
    })
})
}

const mouseUpNum = (object)=>{
    return object.forEach(item =>{
    item.addEventListener("mouseup", ()=>{
        item.style.boxShadow = shadows.numShadow
        if (k%2 == 0){
            audioDown.pause()
            audioDown.currentTime = 0
            audioUp.play()
        }

    })
})
}

mouseDownNum(calc_nums)
mouseUpNum(calc_nums)

mouseDownNum(calc_opr)
mouseUpNum(calc_opr)


// // Shadow and Sound FX for Del Button
delBtn.addEventListener("mousedown", ()=>{
    delBtn.style.boxShadow = shadows.numShadowActive
    if (k%2 == 0){
        audioUp.pause()
        audioUp.currentTime = 0
        audioDown.play()
    }

})
delBtn.addEventListener("mouseup", ()=>{
    delBtn.style.boxShadow = shadows.numShadow
    if (k%2 == 0){
        audioDown.pause()
        audioDown.currentTime = 0
        audioUp.play()
    }
})