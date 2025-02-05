export default function fillContent(){
    let divContent = document.querySelector('div#content')

    let sushiHone = document.createElement('h1')
    sushiHone.textContent = "Zen Sushi"
    divContent.appendChild(sushiHone)
    
}