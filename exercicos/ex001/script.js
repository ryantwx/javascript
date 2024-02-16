
function enviar(){
    var res = window.document.querySelector('#res')
    var img = window.document.querySelector('#img')
    var data = new Date()
    var horas= data.getHours()
   
    res.innerHTML =`Agora são ${horas} horas  `
    if(horas<=12){
        document.body.style.background ='#734ff5'
        img.src ='img002/manha.jpg'

    }else if(horas>12 && horas <18 ){

        img.src= 'img002/tarde.jpg'
        document.body.style.background ='#86880e'
    } else{
        img.src= 'img002/noite.jpg'
        document.body.style.background = '#171325'
    }
    
        

}