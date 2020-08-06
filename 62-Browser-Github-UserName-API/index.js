let form = document.querySelector('.myform');
let input = document.querySelector('.myinput');
let buttonToListen = document.querySelector('button');


//event handler
function handler(event) {
    event.preventDefault();
    let url = `https://api.github.com/users/${input.value}/repos`;
    let fetchThis = fetch(url);

    fetchThis.then(data => data.json()).then(result => {
        let div = document.querySelector(".addhere");
        result.map(post => {
            let repoName = document.createElement("h3")
            let repoDescription = document.createElement("p")
            repoName.innerHTML = `Repo name: ${post.name}`;
            repoDescription.innerHTML = `Repo description: ${post.description}`;
            div.appendChild(repoName);
            div.appendChild(repoDescription);

        })
    })
    // if (input.value === '') {
    //     changeThis.innerHTML = `You forgot to add your name!`;
    // } else {
    //     changeThis.innerHTML = `Hello ${input.value}! Today is ${n}. Only ${leftDays} days left until Weekend!`;
    //     input.value = "";
    // }


    /*  button.innerHTML="changed" */
};


//attaching event listener on button
buttonToListen.addEventListener("click", handler);