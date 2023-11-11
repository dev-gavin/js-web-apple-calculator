'use strict'

var currentExpression = []
const screen = document.querySelector('.screen')

function handleNumClick({ target }) {
    var numPressed = target.textContent.trim()
    var lastItem = currentExpression.at(-1)

    if (currentExpression.length == 0) {
        currentExpression.push(numPressed)
    } else if (lastItem.length == 7) {
        return
    } else if (!Number.isNaN(lastItem) || numPressed == undefined) {
        currentExpression[currentExpression.length - 1] = lastItem + numPressed
    }

    lastItem = currentExpression.at(-1)

    setScreen(lastItem)
}

function setScreen(result) {
    screen.textContent = result
}

function handleClear() {
    screen.textContent = 0
    currentExpression = []
}
