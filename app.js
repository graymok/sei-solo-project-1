// initialize canvas
const canvas = document.querySelector('canvas')

// set canvas width and height
const canvasHeight = getComputedStyle(canvas).height
const canvasWidth = getComputedStyle(canvas).width

canvas.setAttribute('height', canvasHeight)
canvas.setAttribute('width', canvasWidth)

// initialize the canvas environment or context for commands
const c = canvas.getContext('2d')

let scoreValue = document.getElementById('scoreVal')
let scoreCounter = 0

let gameTime = 1



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
        c.fillStyle = this.color
        this.width += .5
        this.height += .5
        c.fillRect(this.x, this.y, this.width, this.height)   
    }
}



canvas.addEventListener('click', (e) => {
    const pos = {
      x: e.clientX,
      y: e.clientY
    }
    console.log(pos)
    console.log("x", pos.x)
    console.log("y", pos.y)
    
    const xCheck = pos.x > shadow1.x && pos.x < shadow1.x + shadow1.width
    const yCheck = pos.y > shadow1.y && pos.y < shadow1.y + shadow1.height
    console.log("x check", xCheck)
    console.log("y check", yCheck)

    shadows.forEach(e => {
        const xCheck = pos.x > e.x && pos.x < e.x + e.width
        const yCheck = pos.y > e.y && pos.y < e.y + e.height
        if (xCheck === true && yCheck === true) {
            e.exist = false
            scoreCounter += 1
            scoreValue.innerHTML = scoreCounter
        }

    })

})

const shadow1 = new Shadow (100, 100, 10, 10, "black")

const shadows = [
    new Shadow (0, 0, 10, 10, "black"),

]

console.log(shadows)

document.getElementById('testbtn').addEventListener('click', () => {

    animate()
})

document.getElementById('endbtn').addEventListener('click', () => {
    gameTime = 0
    shadows.forEach(e => {
        e.exist = false
        if (e.exist) {
            e.render()
        }
    })
    c.clearRect(0, 0, canvas.width, canvas.height)
    
})






const animate = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)

    if (gameTime = 1) {
        
        let randomX = Math.floor(Math.random() * 300)
        let randomY = Math.floor(Math.random() * 300)
        shadows.push(new Shadow (randomX, randomY, 1, 1, "black"))
    }    
    
        shadows.forEach(e => {
            if (e.exist) {
                e.render()
            } 
        
    } )    
    requestAnimationFrame(animate)
    }
