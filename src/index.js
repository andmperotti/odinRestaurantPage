import homeContent from "./homeContent.js" 

let nav = document.querySelector('nav')
let divContent = document.querySelector('div#content')

homeContent()

nav.addEventListener('click', e=>{
    if(e.target.id==='home'){
        divContent.textContent=''
        homeContent()
    }else if(e.target.id==='menu'){
        divContent.textContent=''
    }else if(e.target.id==='contact'){
        divContent.textContent=''
    }
})