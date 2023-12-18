
let img = document.getElementById('imagem')
let footer = document.querySelector('footer')
let titulo = document.querySelector('header')
let sec = document.querySelector('section')

const horas = document.getElementById('horas')
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const relogio = setInterval(function time() {
    let dateTodey = new Date()
    let hr = dateTodey.getHours();
    let min = dateTodey.getMinutes();
    let s = dateTodey.getSeconds();

    if(hr < 10){
        hr = `${"0" + hr}`

    }else if (min < 10){
        min = "0" + min
        
    } else if(s < 10){
        s = `${"0" + s}`
       
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

    if( hr >= 0 && hr < 12){
        img.src = 'img/fotodia.png'
        sec.style.background = 'orange'
        document.body.style.background = '#F0E68C'
            // Bom dia!
    } else if ( hr >= 12 && hr <= 18){
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
})



