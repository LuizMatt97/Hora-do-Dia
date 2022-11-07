function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    let footer = document.querySelector('footer')
    let titulo = document.querySelector('header')
    let sec = document.querySelector('section')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if( hora >= 0 && hora < 12){
        img.src = 'img/fotodia.png'
        sec.style.background = 'orange'
        document.body.style.background = '#F0E68C'
            // Bom dia!
    } else if ( hora >= 12 && hora <= 18){
        img.src = 'img/fototarde.png'
        sec.style.background = '#008080'
        document.body.style.background = '#B0E0E6'
          // Boa tarde!
    } else{
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#1C1C1C'
        sec.style.background = 'red'
        footer.style.color = 'white'
        titulo.style.color = 'white'
         // Boa noite!
    }
}

