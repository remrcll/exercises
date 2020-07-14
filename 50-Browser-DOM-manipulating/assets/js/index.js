//append element into DOM
let listContainer = document.querySelector(".book-list")

const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];


books.map(elem => {
  let card = document.createElement("div")
  let h2 = document.createElement("h2")
  let image = document.createElement("img")
  let p1 = document.createElement("p")
  let p2 = document.createElement("p")
  h2.innerHTML = elem.title
  image.setAttribute("src", elem.img)
  p1.innerHTML = elem.author
  p2.innerHTML = elem.alreadyRead

  /*  card.appendChild(h2)
   card.appendChild(image)
   card.appendChild(p) */
  card.append(image, h2, p1, p2)
  listContainer.appendChild(card)
  listContainer.style.display = "flex"
})