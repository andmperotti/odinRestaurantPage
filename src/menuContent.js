import sashimiPic from './sashimi.jpg'
import nigiriPic from './nigiri.jpg'
import makiPic from './maki.jpg'
import sakePic from './sake.jpg'
import beerPic from './beers.jpg'

export default function fillContent(){
    let divContent = document.querySelector('div#content')

    let sushiHone = document.createElement('h1')
    sushiHone.textContent = "Zen Sushi"
    divContent.appendChild(sushiHone)

    let menu = document.createElement('h2')
    menu.textContent = 'Menu'
    divContent.appendChild(menu)

    let sushiSection = document.createElement('h3')
    sushiSection.textContent = 'Sushi'
    divContent.appendChild(sushiSection)

    let sushiDiv = document.createElement('div')

    let sashimiImg = document.createElement('img')
    sashimiImg.src = sashimiPic
    sashimiImg.alt = "Sashimi image taken by marine Dumay on unsplash"
    sashimiImg.style.width = '55%'
    sushiDiv.appendChild(sashimiImg)
    let sashimiDescription = document.createElement('p')
    sashimiDescription.textContent = 'Sashimi $22'
    sushiDiv.appendChild(sashimiDescription) 


    let nigiriImg = document.createElement('img')
    nigiriImg.alt='Nigiri image taken by Helga Christina on unsplash'
    nigiriImg.src = nigiriPic
    nigiriImg.style.width = '55%'
    sushiDiv.appendChild(nigiriImg)
    let nigiriDescription = document.createElement('p')
    nigiriDescription.textContent = 'Nigiri $25'
    sushiDiv.appendChild(nigiriDescription) 

    let makiImg = document.createElement('img')
    makiImg.src = makiPic
    makiImg.alt = "Maki image take by Niclas Illg on unsplash"
    makiImg.style.width = '51%'
    sushiDiv.appendChild(makiImg)
    let makiDescription = document.createElement('p')
    makiDescription.textContent = 'Maki $22'
    sushiDiv.appendChild(makiDescription)

    divContent.appendChild(sushiDiv)

    let drinkDiv = document.createElement('div')
    let drinksTitle = document.createElement('h3')
    drinksTitle.textContent = 'Drinks'
    drinkDiv.appendChild(drinksTitle)
    //drink images and text
    let sakeImg = document.createElement('img')
    sakeImg.src = sakePic
    sakeImg.alt = "Bottles of sake, image by Zhuo Cheng on unsplash"
    sakeImg.style.width= '51%'
    drinkDiv.appendChild(sakeImg)
    let sake = document.createElement('p')
    sake.textContent = 'Sake $7'
    drinkDiv.appendChild(sake)
    let beerImg = document.createElement('img')
    beerImg.src = beerPic
    beerImg.alt = "Beer bottles, image by PTMP on unsplash"
    beerImg.style.width = "51%"
    drinkDiv.appendChild(beerImg)
    let beerTitle = document.createElement('p')
    beerTitle.textContent = "Beers $5"
    drinkDiv.appendChild(beerTitle)



    
    divContent.appendChild(drinkDiv)
}