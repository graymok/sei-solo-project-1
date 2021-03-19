console.log("All systems go")

//Game Variables
let playerInput = document.querySelector('#inputField')
let playerInputArray = []
let npcMessage = document.querySelector('#messagesNPC')

//Dialogue
const riddles = {
    set1: {
        question: "What can fill up a room but takes up no space?",
        answer: ["Light", "light", "LIGHT"],
        right: "I see you may be more skilled than I realized.",
        wrong: "As expected, you lack the wisdom needed for the road ahead."
    }, 
    set2: {
        question: "The more you take, the more you leave behind. What are they?",
        answer: ["Footsteps", "steps", "footsteps", "STEPS", "FOOTSTEPS"],
        right: "Moving forward is the only outcome that matters. Remember that always.",
        wrong: "As expected, you lack the wisdom needed for the road ahead."
    }
}


//Characters

const player = {

}


//Event Listeners
document.querySelector('#btn-start').addEventListener('click', () => {
    console.log(playerInput.value)
    playerInputArray.push(playerInput.value)
    playerInput.value = ""
    console.log(playerInputArray)
    npcResult()

})

document.querySelector('#btn-reset').addEventListener('click', () => {
    playerInputArray = []
    playerInputArray.length = 0
    console.log(playerInputArray)
    while(npcMessage.firstChild) {
        npcMessage.removeChild(npcMessage.firstChild);
    }
})

document.querySelector('#btn-npc').addEventListener('click', () => {

    npcDialogue()


})


//NPC Output
const npcDialogue = () => {
    let dialogue = document.createElement('p')
    dialogue.textContent = riddles.set1.question
    dialogue.classList.add("dialogue")
    npcMessage.appendChild(dialogue)
 
}

const npcResult = () => {
    console.log("riddles set 1 answer array", riddles.set1.answer)
    console.log("chosen player words", playerInputArray)

    if ( riddles.set1.answer.includes(playerInputArray[0]) === true) {
        let dialogue = document.createElement('p')
        dialogue.textContent = riddles.set1.right
        dialogue.classList.add("dialogue")
        npcMessage.appendChild(dialogue)
    } else {
        let dialogue = document.createElement('p')
        dialogue.textContent = riddles.set1.wrong
        dialogue.classList.add("dialogue")
        npcMessage.appendChild(dialogue)
    }

}




