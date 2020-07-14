'use strict'

let cite = document.querySelector("cite")

//list of all parents Elements
let currentTarget = cite
let parentList = []

while (currentTarget.parentElement) {
    parentList.push(currentTarget.parentElement.nodeName + ' >')
    currentTarget = currentTarget.parentElement
}

console.log(...parentList.reverse())