var vetor = []

function adicionar(){
    let numero = window.document.getElementById('txtnum')
    let res = window.document.querySelector('div#res')
    let tab = window.document.getElementById('seltab')
    

    if (numero.value <= 0 || numero.value > 100){
        window.alert('Digite um número entre 1 a 100')
    } else{
        var n = parseInt(numero.value)
        vetor.push(n)

        var item = window.document.createElement('Option')
        item.text = `O valor ${n} foi adicionado`
        tab.appendChild(item)
        
    }
}

