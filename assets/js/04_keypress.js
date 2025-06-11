// For Keydown
document.addEventListener("keydown", (e)=>{
    i++
    if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){

            switch(true) {
            // Delete Button
            case (e.key === "Delete") || e.keyCode === 46:
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                i = 1
                clearBtn.style.boxShadow = shadows.numShadowActive
                screen.style.color = "black"
                screen.value = ""
                
                break;

            case e.key === "1":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "1"
                calc_nums[0].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "2":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "2"
                calc_nums[1].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "3":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "3"
                calc_nums[2].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "4":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "4"
                calc_nums[3].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "5":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "5"
                calc_nums[4].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "6":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "6"
                calc_nums[5].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "7":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "7"
                calc_nums[6].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "8":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "8"
                calc_nums[7].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "9":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "9"
                calc_nums[8].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === ".":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "."
                calc_nums[9].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "0":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "0"
                calc_nums[10].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "Backspace":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                i--
                let newValue = screen.value.toString()
                let newValue1 = newValue.slice(0, -1)
                screen.value = newValue1
                delBtn.style.boxShadow = shadows.numShadowActive
                break;


            case e.key === "*":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "*"
                calc_opr[0].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "/":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "/"
                calc_opr[1].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "+":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "+"
                calc_opr[2].style.boxShadow = shadows.numShadowActive

                break;

            case e.key === "-":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "-"
                calc_opr[3].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "%":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "%"
                calc_opr[4].style.boxShadow = shadows.numShadowActive
                break;

            case e.key === "^":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                screen.value += "**"
                calc_opr[5].style.boxShadow = shadows.numShadowActive
                break;

            // For Back Button
            case e.key === "<":
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
                break;


                // For Forward Button
            case e.key === ">":
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
                break;

            case e.key === "=":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
            if (i > 1 && screen.value.length <= 12){
            try{
                let answer = eval(screen.value)

                if (answer === NaN){
                    screen.value = "Error"
                }
                else if (answer.toString().length >= 13){
                    screen.value = "BIGNUM"
                    answer = "BIGNUM"
                }
                else{
                    his++
                    screen.value = answer
                    history[his] = answer
                    hisBack = (history.length - 1)
                }
            }
            catch(error){
                screen.value ="Error"
            }
            
            
            }
            else{
                screen.value ="BIG NUM"
            }
                calc_opr[6].style.boxShadow = shadows.numShadowActive
                break;


            default:
}            
        }
        else{

            // Clear Button
            if (e.key === "Delete" || e.keyCode === 46){
            if (k%2 == 0){
                audioDown.pause()
                audioDown.currentTime = 0
                audioUp.play()
                }
             clearBtn.style.boxShadow = shadows.numShadowActive
             screen.value = ""
            i = 1
            }

            // Backspace Button
            switch (true){
                case e.key === "Backspace":
                if (k%2 == 0){
                    audioUp.pause()
                    audioUp.currentTime = 0
                    audioDown.play()
                }
                i--
                let newValue = screen.value.toString()
                let newValue1 = newValue.slice(0, -1)
                screen.value = newValue1
                delBtn.style.boxShadow = shadows.numShadowActive
                break;

                



            }
            calc_nums[0].style.boxShadow = shadows.numShadow
            calc_nums[1].style.boxShadow = shadows.numShadow
            calc_nums[2].style.boxShadow = shadows.numShadow
            calc_nums[3].style.boxShadow = shadows.numShadow
            calc_nums[4].style.boxShadow = shadows.numShadow
            calc_nums[5].style.boxShadow = shadows.numShadow
            calc_nums[6].style.boxShadow = shadows.numShadow
            calc_nums[7].style.boxShadow = shadows.numShadow
            calc_nums[8].style.boxShadow = shadows.numShadow
            calc_nums[9].style.boxShadow = shadows.numShadow
            calc_nums[10].style.boxShadow = shadows.numShadow

            calc_opr[0].style.boxShadow = shadows.numShadow
            calc_opr[1].style.boxShadow = shadows.numShadow
            calc_opr[2].style.boxShadow = shadows.numShadow
            calc_opr[3].style.boxShadow = shadows.numShadow
            calc_opr[4].style.boxShadow = shadows.numShadow
            calc_opr[5].style.boxShadow = shadows.numShadow
            calc_opr[6].style.boxShadow = shadows.numShadow

        }

})

// For Keyup
document.addEventListener("keyup", (e)=>{
    // Delete Button
    if (e.key === "Delete" || e.keyCode === 46){
         if (k%2 == 0){
            audioDown.pause()
            audioDown.currentTime = 0
            audioUp.play()
        }
        clearBtn.style.boxShadow = shadows.numShadow
    }
               

                
    if (i > 1 && screen.value.length <= 12){

            switch(true) {
            case e.key === "1":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[0].style.boxShadow = shadows.numShadow
                break;

            case e.key === "2":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[1].style.boxShadow = shadows.numShadow
                break;

            case e.key === "3":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[2].style.boxShadow = shadows.numShadow
                break;

            case e.key === "4":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[3].style.boxShadow = shadows.numShadow
                break;

            case e.key === "5":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[4].style.boxShadow = shadows.numShadow
                break;

            case e.key === "6":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[5].style.boxShadow = shadows.numShadow
                break;

            case e.key === "7":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[6].style.boxShadow = shadows.numShadow
                break;

            case e.key === "8":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[7].style.boxShadow = shadows.numShadow
                break;

            case e.key === "9":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[8].style.boxShadow = shadows.numShadow
                break;

            case e.key === ".":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[9].style.boxShadow = shadows.numShadow
                break;

            case e.key === "0":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_nums[10].style.boxShadow = shadows.numShadow
                break;

            case e.key === "Backspace":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                delBtn.style.boxShadow = shadows.numShadow
                break;


            case e.key === "*":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[0].style.boxShadow = shadows.numShadow
                break;

            case e.key === "/":
                 if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[1].style.boxShadow = shadows.numShadow
                break;

            case e.key === "+":
                 if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[2].style.boxShadow = shadows.numShadow
                break;



            case e.key === "-":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[3].style.boxShadow = shadows.numShadow
                break;

            case e.key === "%":
                 if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[4].style.boxShadow = shadows.numShadow
                break;

            case e.key === "^":
                 if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[5].style.boxShadow = shadows.numShadow
                break;

            

            case e.key === "=":
                if (k%2 == 0){
                    audioDown.pause()
                    audioDown.currentTime = 0
                    audioUp.play()
                }
                calc_opr[6].style.boxShadow = shadows.numShadow

                break;


            default:

}            
        }

})