function contar() {
    let inicio = window.document.querySelector('#n1');
    let fim = window.document.querySelector('#n2');
    let passo = window.document.querySelector('#n3');
    let res = window.document.querySelector('#res');
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`[ERRO]   Insira dados válidos`);
    } else {
        res.innerHTML = `Contando: `;
        
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if(p<=0){
            window.alert(`Passo invalido | Considerando PASSO = 1`)
            p = 1
        }
        
        // Processo de contagem
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            }
        }
        
        // Exibir conclusão
        res.innerHTML += `\u{1F3C1}`;
    }
}
