'use strict'

var currentExpression = []
const screen = document.querySelector('.screen')

function handleNumClick({ target }) {
    var numPressed = target.textContent.trim()
    var lastItem = currentExpression.at(-1)

    if (!lastItem) {
        currentExpression.push(numPressed)
    }

    setScreen(numPressed)
}

function setScreen(result) {
    screen.textContent = result
}

function handleClear() {
    screen.textContent = 0
}
