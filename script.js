const inputUrl = document.getElementById('inputUrl')
const gerarBtn = document.getElementById('gerarBtn')
const qrcodeContainer = document.getElementById('qrcode-container')


function gerarQRCode(){
    const url = inputUrl.value

    if (url === "") {
        alert('Porfavor, digite uma URL válida')
        return
    }
    qrcodeContainer.innerHTML = ``

    new QRCode(qrcodeContainer, {
        text: url,
        width: 128,
        height: 128,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    })
}

gerarBtn.addEventListener('click', gerarQRCode)