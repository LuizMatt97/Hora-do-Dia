function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){
        img.src = 'img/fotodia.png'
        document.body.style.background = '#F0E68C'
            // Bom dia!
    } else if ( hora >= 12 && hora <= 18){
        img.src = 'img/fototarde.png'
        document.body.style.background = '#B0E0E6'
          // Boa tarde!
    } else{
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#1C1C1C'
         // Boa noite!
    }
}

