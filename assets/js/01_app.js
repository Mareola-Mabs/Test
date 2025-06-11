// Getting the Screen
const screen = document.getElementById("screen")

// Getting More Buttons
const clearBtn = document.getElementById("clearBtn")

const delBtn = document.getElementById("delBtn")

let i = 0

// Calculator Code
calc_nums.forEach(item =>{
    item.addEventListener("click", (event)=>{
        i++

        if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += event.target.textContent
        }

    })
})

// Clear Button
clearBtn.addEventListener("click", ()=>{
    i = 1
    screen.style.color = "black"
    screen.value = ""
})


// Delete Button
delBtn.addEventListener("click", ()=>{
    if (i === 0){
        i = 0
    }
    if (i === 1){
        screen.style.color = "black"
        screen.value = ""

    }

    else if (i > 1){
        i--
        let newValue = screen.value.toString()
        let newValue1 = newValue.slice(0, -1)
        screen.value = newValue1
    }

    
    
})

// Operation Button
const multiply = document.getElementById("multiply")
const divide = document.getElementById("divide")
const addition = document.getElementById("add")
const subtract = document.getElementById("subtract")
const percent = document.getElementById("percent")
const raised = document.getElementById("raise")

const equals = document.getElementById("equals")

multiply.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "*"
        }
        
})
divide.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "/"
        }
        
})
addition.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "+"
        }
        
})
subtract.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "-"
        }
        
})
percent.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "%"
        }
        
})
raised.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            screen.value += "**"
        }
        
})


equals.addEventListener("click", ()=>{
     i++
     if (i === 1){
            screen.style.color = "black"
            screen.value = ""
            
        }
        else if (i > 1 && screen.value.length <= 12){
            try{
                let answer = eval(screen.value)
                if (answer === NaN){
                    screen.value = "Error"
                }
                else if (answer.length >= 13){
                    screen.value = "BIGNUM"
                }
                else{
                    screen.value = answer
                }
            }
            catch(error){
                screen.value ="Error"
            }

            

            
            
        }
        
})
