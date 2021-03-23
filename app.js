// initialize canvas
const canvas = document.querySelector('canvas')

// set canvas width and height
const canvasHeight = getComputedStyle(canvas).height
const canvasWidth = getComputedStyle(canvas).width

canvas.setAttribute('height', canvasHeight)
canvas.setAttribute('width', canvasWidth)

// initialize the canvas environment or context for commands
const context = canvas.getContext('2d')

// initialize global variables
const scoreValue = document.getElementById('scoreVal')
const timeValue = document.getElementById('timeVal')
const topValue = document.getElementById('topVal')
const splashStart = document.getElementById('welcomeSplash')
const splashEnd = document.getElementById('endingSplash')

const shadows = []

let scoreCounter = 0
let timeCounter = 1800
let animCounter = true
let topCounter = 0

const randomColors = ["black", "red", "green", "blue", "orange", "purple", "yellow"]
const randomRGBaColors = ["rgba(0, 0, 0, 0.5)", "rgba(255, 0, 0, 0.5)", "rgba(0, 128, 0, 0.5)", "rgba(0, 0, 255, 0.5)", "rgba(255, 165, 0, 0.5)", "rgba(128, 0, 128, 0.5)", "rgba(255, 255, 0, 0.5)"]


class Shadow {
    constructor(x, y, width, height, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
        this.exist = true
    }
    render() {
        context.fillStyle = this.color
        this.width += .5
        this.height += .5
        context.fillRect(this.x, this.y, this.width, this.height)           
    }
}


// mouse click hit detector
canvas.addEventListener('click', (e) => {
    const position = {
      x: e.clientX,
      y: e.clientY
    }
    //console.log(pos)
    //console.log("x", pos.x)
    //console.log("y", pos.y)

    shadows.forEach(e => {
        const xCheck = position.x > e.x && position.x < e.x + e.width
        const yCheck = position.y > e.y && position.y < e.y + e.height

        if (xCheck === true && yCheck === true) {
            //console.log(shadows.indexOf(e))
            e.exist = false
            shadows.splice(shadows.indexOf(e), 1)
            if (e.color === "orange" || e.color === "rgba(255, 165, 0, 0.5)") {
                scoreCounter += 5
                scoreValue.innerHTML = scoreCounter 
            } else {
                scoreCounter += 1
                scoreValue.innerHTML = scoreCounter
            }
        }
    })
})

document.getElementById('startbtn').addEventListener('click', () => {
    // clear game area
    animCounter = false
    shadows.forEach(e => {
        e.exist = false
        context.clearRect(e.x, e.y, e.width, e.height) 
    })
    while (shadows.length > 3) {
        shadows.pop()
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    // reset counters
    scoreCounter = 0
    timeCounter = 600
    scoreValue.innerHTML = scoreCounter
    timeValue.innerHTML = timeCounter

    // begin game loop
    animCounter = true
    animate()
})

/* document.getElementById('pausebtn').addEventListener('click', () => {
    animCounter = false
}) */

/* document.getElementById('endbtn').addEventListener('click', () => {
    
    animCounter = false
    shadows.forEach(e => {
        e.exist = false
        context.clearRect(e.x, e.y, e.width, e.height) 
    })
    //console.log("before the pop loop", shadows)
    while (shadows.length > 3) {
        shadows.pop()
    }
    //console.log("after the pop loop", shadows)
    context.clearRect(0, 0, canvas.width, canvas.height)
}) */

// game run function
const animate = () => {
    // check game time, end game loop if necessary
    if (timeCounter > 0) {
        timeCounter += -1
        timeValue.innerHTML = timeCounter
        splashStart.classList.add('hidden')
        if (splashEnd.classList.contains('hidden') !== true) {
            splashEnd.classList.add('hidden')
        }
    } else {
        splashEnd.classList.remove('hidden')  
        stopAndClear()  
        
    }

    // create new shapes
    context.clearRect(0, 0, canvas.width, canvas.height)
    let randomX = Math.floor(50 + (Math.random() * 300))
    let randomY = Math.floor(50 + (Math.random() * 300))
    let randomColor = randomColors[(Math.floor(Math.random() * 6))]
    let randomRGBa = randomRGBaColors[(Math.floor(Math.random() * 6))]
    let randomWidth = Math.floor(Math.random() * 10)
    let randomHeight = Math.floor(Math.random() * 10)

    if (shadows.length <= 10) {
    shadows.push(new Shadow (randomX, randomY, randomWidth, randomHeight, randomRGBa))
    }

    shadows.forEach(e => {
        if (e.exist) {
            e.render()
        } 
    } )

    if( animCounter === true) {
        requestAnimationFrame(animate)
    }
}

// game stop function
const stopAndClear = () => {
    animCounter = false
    shadows.forEach(e => {
        e.exist = false
        if (e.exist) {
            e.render()
        } 
    })
    while (shadows.length > 10) {
        shadows.pop()
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    
}

// top score listener
const checkTopScore = setInterval(() => {
    if (scoreCounter >= topCounter) {
        topCounter = scoreCounter
        topValue.innerHTML = scoreCounter
    } else {
        topValue.innerHTML = topCounter
    }
}, 50)

