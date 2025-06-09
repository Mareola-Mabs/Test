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
        else if (i > 1){
            screen.value += event.target.textContent
        }

    })
})

// Clear Button
clearBtn.addEventListener("click", ()=>{
    i++
    screen.style.color = "black"
    screen.value = ""
})


// Delete Button
delBtn.addEventListener("click", ()=>{
    i++

    if (i === 1){
        screen.style.color = "black"
        screen.value = ""

    }

    else if (i > 1){
        let newValue = screen.value.toString()
        let newValue1 = newValue.slice(1, newValue.length - 1)
        screen.value = newValue1
    }
    
    
})