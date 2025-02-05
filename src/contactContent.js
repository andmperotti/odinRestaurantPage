import restaurantPic from "./restaurant.jpg"

export default function fillContent(){
    let divContent = document.querySelector('div#content')

    let sushiHone = document.createElement('h1')
    sushiHone.textContent = "Zen Sushi"
    divContent.appendChild(sushiHone)
    let restaurantImg = document.createElement('img')
    restaurantImg.src = restaurantPic
    restaurantImg.style.width = '40%'
    restaurantImg.alt = "Japanese restaurant, image by Audrey Mari on unsplash"
    divContent.appendChild(restaurantImg)
    let restaurantContact = document.createElement('p')
    restaurantContact.textContent = 'zenSushi@gmail.com'
    divContent.appendChild(restaurantContact)

    
}