const history = []

let his = -1

let hisBack = 0

// Getting the History Buttons
const backBtn = document.querySelector(".history__btn-back")
const frwBtn = document.querySelector(".history__btn-fwr")

// Back Btn
backBtn.addEventListener("click", ()=>{
            // For Sound
            if (k%2 == 0){
            historyAudio.play()
            }
            // End of Sound
    i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            hisBack--
            if (hisBack >= 0){
                screen.value = history[hisBack]

            }
            else{
                hisBack = 0
            }
        }

})

// Forward Btn
frwBtn.addEventListener("click", ()=>{
            // For Sound
            if (k%2 == 0){
            historyAudio.play()
            }
            // End of Sound
    i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            hisBack++
            if (hisBack < history.length){
                screen.value = history[hisBack]
            }
            else{
                hisBack = (history.length -1)
            }
        }

})