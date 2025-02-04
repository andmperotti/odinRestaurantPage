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

    let menu = document.createElement('button')
    menu.textContent= "Menu"
    nav.appendChild(menu)

    let about = document.createElement('button')
    about.textContent= "About"
    nav.appendChild(about)

    let order = document.createElement('button')
    order.textContent= "Order"
    nav.appendChild(order)
}
