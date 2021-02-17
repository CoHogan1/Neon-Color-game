// cache the dom.
const startButton = document.querySelector(".start")
const box1 =        document.querySelector("#box1")
const box2 =        document.querySelector("#box2")
const box3 =        document.querySelector("#box3")
const box4 =        document.querySelector("#box4")
const box5 =        document.querySelector("#box5")
const box6 =        document.querySelector("#box6")
const p1hit =       document.querySelector('.p1hit')
const p1miss =      document.querySelector('.p1miss')
const p2hit =       document.querySelector('.p2hit')
const p2miss =      document.querySelector('.p2miss')
const control =     document.querySelector(".control")
const neo =         document.querySelector(".neo")
const norm =        document.querySelector(".norm")

// in game variables to keep track of stats.
let controlText = control.innerText
let hit = 0
let miss = 0
let neonMode = false
let player = 1 // 1 for playerOne, increase for playerTwo.

let red = "0 0 10px red, 0 0 20px red, 0 0 30px white, 0 0 40px red, 0 0 50px red"
let orange = "0 0 10px darkorange, 0 0 20px darkorange, 0 0 30px white, 0 0 40px darkorange, 0 0 50px darkorange"
let yellow = "0 0 10px yellow, 0 0 20px yellow, 0 0 30px white, 0 0 40px yellow, 0 0 50px yellow"
let green = "0 0 10px green, 0 0 20px green, 0 0 30px white, 0 0 40px green, 0 0 50px green"
let blue = "0 0 10px blue, 0 0 20px blue, 0 0 30px white, 0 0 40px blue, 0 0 50px blue"
let purple = "0 0 10px purple, 0 0 20px purple, 0 0 30px white, 0 0 40px purple, 0 0 50px purple"
let pink = "0 0 10px pink, 0 0 20px pink, 0 0 30px white, 0 0 40px pink, 0 0 50px pink"
let lime = "0 0 10px lime, 0 0 20px lime, 0 0 30px white, 0 0 40px lime, 0 0 50px lime"
let cyan = "0 0 10px cyan, 0 0 20px cyan, 0 0 30px white, 0 0 40px cyan, 0 0 50px cyan"


// player game setting buttons, on click display start button.
neo.addEventListener('click', ()=>{
    neonMode = true
    startButton.style.display = 'block'
})
norm.addEventListener('click', ()=> {
    neonMode = false
    startButton.style.display = 'block'
})

//touchscreen-------------------------------------------------------------------
neo.addEventListener('touchStart', ()=>{
    neonMode = true
    startButton.style.display = 'block'
})
norm.addEventListener('touchStart', ()=> {
    neonMode = false
    startButton.style.display = 'block'
})
//------------------------------------------------------------------------------


////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------neon--
const neonArr = [red, orange, yellow, green, blue, purple, pink, lime, cyan]
// get the color for boxes + control color
const getNeonCss = () => {
    const neonArr = [red, orange, yellow, green, blue, purple, pink, lime, cyan]
    let rand = Math.floor(Math.random() * neonArr.length)
    return neonArr[rand]
}
 // get the text for the boxes + control color
const getNeonColor = () => {
    const classNeon = ['Red','Orange','Yellow','Green','Blue','Purple','Pink','Lime','Cyan']
    let neo = Math.floor(Math.random() * classNeon.length)
    return classNeon[neo]
}
//------------------------------------------------------------------------neon--
////////////////////////////////////////////////////////////////////////////////


let y = document.querySelector('.modal')

const toggleModal = () => {
    let x = document.querySelector('.modal-button')
    x.addEventListener('click', ()=> {
        y.style.display = 'none'
    })
    // on click modal display none.
}

// touchscreen------------------------------------------------------------------
const toggleModalTouchScreen = () => {
    let x = document.querySelector('.modal-button')
    x.addEventListener('touchstart', ()=> {
        y.style.display = 'none'
    })
}
// touchscreen------------------------------------------------------------------

const allBox = [box1, box2, box3, box4, box5, box6]

// chose a random color each time its called
const getRandColor = () => {
    let colorList = ['blue','red','green','yellow','purple','grey']
    let randomColorIndex = Math.floor(Math.random() *  colorList.length)
    let x = colorList[randomColorIndex]
    return x
}

// may not need this.
const getRandBox = () => {
    let randomBoxIndex = Math.floor(Math.random() * allBox.length)
    return randomBoxIndex
}

// one box with css.
const fillBoxCss = (box) => {
    let text = getRandColor()
    box.style.backgroundColor = getRandColor()
    box.style.color = getRandColor()
    box.style.borderColor = getRandColor()
    box.innerText = text
}

// fill all boxes css
const fillCss = (array) => {
    clearAllCss()
    for (let i = 0; i < array.length; i++) {
        fillBoxCss(array[i])
    }
    control.style.color = getRandColor()
}
// add an event to each box, that compares the text.
const addBoxEvents = (arr) =>{
    for (let i = 0; i <arr.length; i++) {
        arr[i].addEventListener('click', ()=>{
            if (arr[i].innerText === controlText) {
                hit++
                if (player === 1) {
                    p1hit.innerText = hit
                    return hit
                }
                else {
                    p2miss.innerText = hit
                    return hit
                }
            } else {
                miss++
                if (player === 1) {
                    p1miss.innerText = miss
                    return miss
                } else {
                    p2miss.innerText = miss
                    return miss
                }

            }
        })
    }
}

//Touchscreen-------------------------------------------------------------------
const addBoxEventsTouchScreen = (arr) =>{
    for (let i = 0; i <arr.length; i++) {
        arr[i].addEventListener('touchstart', ()=>{
            if (arr[i].innerText === controlText) {
                hit++
                if (player === 1) {
                    p1hit.innerText = hit
                    return hit
                }
                else {
                    p2miss.innerText = hit
                    return hit
                }
            } else {
                miss++
                if (player === 1) {
                    p1miss.innerText = miss
                    return miss
                } else {
                    p2miss.innerText = miss
                    return miss
                }

            }
        })
    }
}
// touchscreen------------------------------------------------------------------

// pick a color from the boxes and not colorList, and return it.
const getWinningArg = (arr) =>{
    // call this after fillCss(allBox)
    let colorChoice = []
    for (let i = 0; i < arr.length; i++) {
        colorChoice.push(arr[i].innerText)
    }
    controlText = colorChoice[getRandBox()]
    control.innerText = controlText
    return controlText
}

////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------neon--


// all boxes have black background, and a white border.
const neonPrep = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'black'
        arr[i].style.borderColor = 'black'
        arr[i].style.color = 'white'
        arr[i].innerText = getNeonColor()
        arr[i].style.textShadow =  getNeonCss()// get random color from color list.
    }
    control.style.textShadow = getNeonCss()
}

//------------------------------------------------------------------------neon--
////////////////////////////////////////////////////////////////////////////////

const clearAllCss = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].style.background = 'black'
        allBox[i].style.borderColor = 'black'
        allBox[i].style.color = 'white'
        allBox[i].style.textShadow = ""
        allBox[i].innerText = "X"
    }
    control.style.color = 'white'
    control.style.textShadow = ''
    control.innerText = 'X'
}


// change css based on interval.
const startTimer = () => {
    alert("3....2....")
    const interval = setInterval(()=> {
        if (player = 1) {
            if (neonMode === true) {
                neonPrep(allBox) // 1
            } else {
                fillCss(allBox) // 1
            }
            getWinningArg(allBox)// 2
            if (hit > 9) {
                alert("You Win!")
                clearInterval(interval)
                clearAllCss()
                player++
                alert('Player Two get Ready')
            }
            if (miss > 9) {
                alert("You Lost")
                clearInterval(interval)
                clearAllCss()
                player++
                alert('Player Two get Ready')
            }
        } else {
            if (neonMode === true) {
                neonPrep(allBox) // 1
            } else {
                fillCss(allBox) // 1
            }
            getWinningArg(allBox)// 2
            if (hit > 9) {
                alert("You Win!")
                clearInterval(interval)
                clearAllCss()
                player++
                alert('Game Over')
            }
            if (miss > 9) {
                alert("You Lost")
                clearInterval(interval)
                clearAllCss()
                player++
                alert("Game Over")
            }
        }

    }, 2000)// every two seconds.
    return interval
}

// run game
toggleModal()

startButton.addEventListener('click', ()=> {
    hit = 0
    miss = 0
    addBoxEvents(allBox)
    startTimer()
})
// touchscreen------------------------------------------------------------------
startButton.addEventListener('touchstart', ()=>{
    hit = 0
    miss = 0
    addBoxEvents(allBox)
    startTimer()
})

//------------------------------------------------------------------------------
