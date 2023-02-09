import './styles.sass'
import img from '.src/pexels.webp'


function tittleComponent() {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello Word'
    elemH1.classList.add('tittle')
    return elemH1
}

function imageComponent() {
    const elemImg = new Image(600,400)
    elemImg.src = img
    return elemImg
}


document.body.appendChild(tittleComponent())
document.body.appendChild(imageComponent())