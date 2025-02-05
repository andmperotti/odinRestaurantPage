import homeContent from "./homeContent.js" 
import menuContent from "./menuContent.js"
import contactContent from "./contactContent.js"

let nav = document.querySelector('nav')
let divContent = document.querySelector('div#content')

homeContent()

nav.addEventListener('click', e=>{
    if(e.target.id==='home'){
        divContent.textContent=''
        homeContent()
    }else if(e.target.id==='menu'){
        divContent.textContent=''
        menuContent()
    }else if(e.target.id==='contact'){
        divContent.textContent=''
        contactContent()
    }
})