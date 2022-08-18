function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'ftm.png'
        document.body.style.background = '#fde7cf'

    } else if (hora >= 12 && hora <=18) {
        //BOA TARDE!
        img.src = 'ftt.png'
        document.body.style.background = '#f19757'

    } else {
        //BOA NOITE!
        img.src = 'ftn.png'
        document.body.style.background = '#233757'
    }
}