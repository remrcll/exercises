// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/


// let modal = document.getElementById("myModal")
let displayModal = document.querySelector(".modal")
let close = document.querySelector(".close")

let modalPop = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(displayModal.style.display = "block")
        }, 3000)
    })
    return promise
}

modalPop()
    .then(result => {
        close.addEventListener("click", event);

        function event() {
            displayModal.style.display = "none";
        }
    })