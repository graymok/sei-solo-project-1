console.log("All systems go")

// Game Variables
let playerInput = document.querySelector('#inputField')
let playerInputArray = []
let npcMessage = document.querySelector('#messagesNPC')
let riddleCounter = 0

// Ending Conditions
const endings = {
    win: {

    },
    loss: {

    },

}

// NPC Dialogue
const riddles = {
    set1: {
        question: "What can fill up a room but takes up no space?",
        answer: ["Light", "light", "LIGHT"],
        right: "Darkness is nothing without light. Just as light is nothing without darkness.",
        wrong: "As expected, you have irresponsibly made light of the situation."
    }, 
    set2: {
        question: "The more you take, the more you leave behind. What are they?",
        answer: ["Footsteps", "steps", "footsteps", "STEPS", "FOOTSTEPS"],
        right: "Moving forward is the only outcome that matters. Remember that always.",
        wrong: "As expected, you lack the conviction to take the necessary steps forward."
    },
    set3: {
        question: "What walks on four feet in the morning, two in the afternoon, and three at night?",
        answer: ["man", "MAN", "Man", "huamnity", "HUMANITY", "Humanity", "Woman", "WOMAN", "woman"],
        right: "Even in the darkest of hours, man will find a way to persevere.",
        wrong: "As expected, you lack the will to save humanity."
    },
    set4: {
        question: "There is a house. One enters it blind and comes out seeing. What is it?",
        answer: ["school", "SCHOOL", "School"],
        right: "Even in the darkest of hours, man will find a way to persevere.",
        wrong: "As expected, you lack the will to save humanity."
    }
}

const gears = {
    act1: {
        question: "To help you on your journey, I can bestow upon you a single gift. Ask for what you need, and I will give you what you deserve.",
        answer: ""
    }
}

const requests = {

}


// Characters

const player = {

}


// Event Listeners
// Debug Player Input
document.querySelector('#btn-start').addEventListener('click', () => {
    console.log(playerInput.value)
    playerInputArray.push(playerInput.value)
    playerInput.value = ""
    console.log(playerInputArray)
    npcRiddleOutput()

})

// Debug Game Reset
document.querySelector('#btn-reset').addEventListener('click', () => {
    playerInputArray = []
    playerInputArray.length = 0
    riddleCounter = 0
    console.log(playerInputArray)
    while(npcMessage.firstChild) {
        npcMessage.removeChild(npcMessage.firstChild);
    }
})

// Debug NPC Output
document.querySelector('#btn-npc').addEventListener('click', () => {

    npcRiddleInput()


})






// NPC Mechanics
const npcRiddleInput = () => {
    let dialogue = document.createElement('p')
    dialogue.textContent = riddles.set1.question
    dialogue.classList.add("dialogue")
    npcMessage.appendChild(dialogue)
 
}

const npcRiddleOutput = () => {
    console.log("riddles set 1 answer array", riddles.set1.answer)
    console.log("chosen player words", playerInputArray)

    if ( riddles.set1.answer.includes(playerInputArray[0]) === true) {
        let dialogue = document.createElement('p')
        dialogue.textContent = riddles.set1.right
        dialogue.classList.add("dialogue")
        npcMessage.appendChild(dialogue)
        riddleCounter += 2

        console.log(riddleCounter)

    } else {
        let dialogue = document.createElement('p')
        dialogue.textContent = riddles.set1.wrong
        dialogue.classList.add("dialogue")
        npcMessage.appendChild(dialogue)
        riddleCounter += 1

        console.log(riddleCounter)
    }

}




