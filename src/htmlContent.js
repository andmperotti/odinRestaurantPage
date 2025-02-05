import sushiPic from "./vinicius-benedit--1GEAA8q3wk-unsplash.jpg"

export default function fillContent(){
    let nav = document.querySelector("nav")
    let divContent = document.querySelector('div#content')

    let sushiHone = document.createElement('h1')
    sushiHone.textContent = "Zen Sushi"
    divContent.appendChild(sushiHone)

    let sushiDescript = document.createElement('p')
    sushiDescript.textContent = "From the best itamae from Japan!"
    divContent.appendChild(sushiDescript)

    let sushiImage = document.createElement('img')
    sushiImage.src = sushiPic
    sushiImage.alt = "sushi on a plate, Photo by Vinicius Benedit on Unsplash"
    sushiImage.style.width = '100%'
    divContent.appendChild(sushiImage)

    let home = document.createElement('button')
    home.textContent= "Home"
    home.id='#home'
    nav.appendChild(home)

    let menu = document.createElement('button')
    menu.textContent= "Menu"
    menu.id='#menu'
    nav.appendChild(menu)

    let contact = document.createElement('button')
    contact.textContent= "Contact"
    contact.id='#contact'
    nav.appendChild(contact)
}
