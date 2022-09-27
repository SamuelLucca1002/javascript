function carregar() {

var msg = document.getElementById('msg')
var Image = document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
//var hora = 22
msg.innerHTML = `Agora são ${hora}:${minuto}  horas`

if (hora >= 5 && hora < 12 ) {
    Image.src = 'imagens/manha.jpg'
    document.body.style.background = '#cf7c38'
} else if (hora > 12 && hora < 18) {
    Image.src = 'imagens/tarde.jpg'
    document.body.style.background = '#be2e00'
} else {
    Image.src = 'imagens/noite.jpg'
    document.body.style.background = '#1e4f7a'
}

}