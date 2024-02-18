function gerar(){
    let n1 = document.querySelector('#n1')
    let tab = document.querySelector('#res')
    
    if(n1.value.length==0){
        alert(`[ERRO]  Numero invalido `)
    }
    else{
        let n = Number(n1.value)
        let c = 1
        tab.innerHTML=''// Essa tag vai ser pra sempre antes de executar o comando abaixo , ou seja executar a tabuada ,ele ira limpar a tabuada , em resumo ela sempre voltara a fica vazia 
        while(c<=10){
            let item = document.createElement(`option`) //Criara um elemento option dento de 'select' pra exibir a tabuada
            item.text = `${n} x ${c} = ${n*c}  ` //Essa seria a parte de dentro  do option( oq que vai ser exibido como texto por isso o ".text")
            tab.appendChild(item) // Vai adicionar um elemento filho a tag com id 'tab' e esse elemento sera a variavel 'item '
            c++ //Ira sempre adicionar mais ' 1'  a tag 'c' assim podendo seguir a ordem da tabuada ate chegar 10 

        }
    }


}