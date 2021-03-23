// initialize canvas
const canvas = document.querySelector('canvas')

// set canvas width and height
const canvasHeight = getComputedStyle(canvas).height
const canvasWidth = getComputedStyle(canvas).width

canvas.setAttribute('height', canvasHeight)
canvas.setAttribute('width', canvasWidth)

// initialize the canvas environment or context for commands
const context = canvas.getContext('2d')

const scoreValue = document.getElementById('scoreVal')
const timeValue = document.getElementById('timeVal')
const topValue = document.getElementById('topVal')

let scoreCounter = 0
let timeCounter = 30
let animCounter = true

const randomColors = ["black", "red", "green", "blue", "orange", "purple", "yellow"]

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

const shadows = [
    new Shadow (20, 20, 1, 1, "black"),
    new Shadow (150, 150, 1, 1, "black"),
    new Shadow (300, 300, 1, 1, "black"),
]

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
            if (e.color === "orange") {
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
    scoreCounter = 0
    scoreValue.innerHTML = scoreCounter
    animCounter = true
    animate()
})

document.getElementById('pausebtn').addEventListener('click', () => {
    animCounter = false
})

document.getElementById('endbtn').addEventListener('click', () => {
    animCounter = false
    shadows.forEach(e => {
        e.exist = false
        if (e.exist) {
            e.render()
        } 
    })
    //console.log("before the pop loop", shadows)
    while (shadows.length > 3) {
        shadows.pop()
    }
    //console.log("after the pop loop", shadows)
    context.clearRect(0, 0, canvas.width, canvas.height)
})

const animate = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    
    let randomX = Math.floor(50 + (Math.random() * 300))
    let randomY = Math.floor(50 + (Math.random() * 300))
    let randomColor = randomColors[(Math.floor(Math.random() * 6))]
    let randomWidth = Math.floor(Math.random() * 10)
    let randomHeight = Math.floor(Math.random() * 10)

    if (shadows.length <= 3) {

    shadows.push(new Shadow (randomX, randomY, randomWidth, randomHeight, randomColor))
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

