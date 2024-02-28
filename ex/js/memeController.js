'use strict'
let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    resizeCanvas()


    window.addEventListener('resize', () => resizeCanvas())
}

function renderMeme() {

    const selctedImg = getMeme()

    const img = new Image()
    console.log(selctedImg)
    img.src = selctedImg.url
    console.log(selctedImg.url)
    const elContainer = document.querySelector('.canvas')
    gElCanvas.width = elContainer.width //// back here!


    img.onload = () => {
        gElCanvas.height = (img.naturalHeight / img.naturalWidth) * gElCanvas.width
        gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
        drawText(selctedImg) //// back here!!!
    }
}



function resizeCanvas() { ///backhe!!!!!!!
    renderMeme()
}



function drawText(meme) {
    
//     let textMeme =  meme.lines
//    console.log(textMeme) 
//     const {text,size,color} = textMeme
    
 

    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'orange'

    gCtx.fillStyle = 'lightsteelblue'

    gCtx.font = '45px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText('hey', 100, 100)
    gCtx.strokeText('hey', 100, 100)
}


