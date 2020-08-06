import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");
const modalClass = document.querySelector(".modal");
const continueButton = document.getElementById("continue");


function resolveAfter6Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(modalClass.style.display = "block");
        }, 6000);
    });
}

let promiseOfModal = async () => {
    let result = await resolveAfter6Seconds();
};

promiseOfModal();


function resolveAfter2MilliSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(alert("Continue to subscription!"));
        }, 200);
    });
}



// promiseOfModal.then(function (val) {
//     console.log("User has been on the page for 60 seconds");
//     val.style.display = "block";
// })

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

continueButton.addEventListener("click", (e) => {
    let alertPop = async () => {
        resolveAfter2MilliSeconds();
    }
    alertPop();
})