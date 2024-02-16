function clicar(){
    var res = window.document.querySelector('#res')
    var ano = window.document.querySelector('#ano')
    var ano2 =Number(ano.value)
    var atual = new Date()
    var atualano =atual.getFullYear()
    var idade = atualano - ano2
    var sexo = window.document.getElementsByName('radio')
    var genero = ''

    if(ano2 <= 0 || atualano <  ano2  ){
        alert("Verifique os dados ")
        res.innerHTML= ' Insira dos validos '
    }
  
    else if (sexo[0].checked){
        genero = 'Homem'
        res.innerHTML= `Voce é um ${genero} e tem ${idade} anos ,ou ira fazer ${idade} anos`
    }
    else if (sexo[1].checked){
        genero = 'Mulher'
      
        
       res.innerHTML= `Voce é um ${genero} e tem ${idade} anos ,ou ira fazer ${idade} anos` 
    }
    else{
        res.innerHTML='Selecione um sexo '
} if (genero = 'Mulher'){
    img.setAttribute('src' , 'img/criança.jpg')
}
   
    if(idade >=0 && idade < 8){
        img.src = 'img/bebe.jpg'
    }
    else if (idade <12){
        img.src = 'img/criança.jpg'
    }
    else if (idade <=18){
        img.src = 'img/adolescente.jpg'
    }
    else {
        img.src = 'img/adulto.jpg'
    }
    
   


}