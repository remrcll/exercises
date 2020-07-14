'use strict';

let body = document.querySelector('body')
let h1 = document.querySelector('h1')
let category = [...document.getElementsByClassName("category")]
let main = [...document.getElementsByClassName("main")]
let foodCategory = [...document.getElementsByClassName("food-category")]
let warning = document.getElementById('warning')
let allergyInfo = document.querySelectorAll(".allergies li:nth-child(even)")
let allergies = [...document.getElementsByClassName("allergies")]
let foodDesc = [...document.getElementsByClassName("food-desc")]
let footer = [...document.getElementsByClassName("footer")]

// let color;
const colorGenerator = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

category.forEach(element => {
    element.style.color = 'red';
    element.style.fontStyle = 'italic';
});

allergies.forEach(element => {
    element.style.width = '500px';
    element.style.margin = 'auto'
});

main.forEach(element => {
    element.style.display = 'flex'
    element.style.flexWrap = 'wrap'
});

foodCategory.forEach(element => {
    element.style.width = '27%'
    element.style.minWidth = '300px'
    element.style.padding = '20px'
    element.style.margin = '10px'
    element.style.paddingLeft = '50px'
    element.style.backgroundColor = colorGenerator();
});

allergyInfo.forEach(element => {
    element.style.background = 'purple'
});



foodDesc.forEach(element => {
    element.style.width = '300px';
    element.style.margin = '50px';
    element.style.borderRadius = '50px';
    element.style.height = '300px';
});

body.style.fontSize = "2rem"
h1.style.textAlign = "center"
warning.style.fontSize = '40px'
warning.style.color = 'red'
footer.style.display = 'flex'