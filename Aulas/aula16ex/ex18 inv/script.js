let numero = window.document.getElementById('txtnum')
let res = window.document.querySelector('div#res')
let lista = window.document.getElementById('seltab')
var vetor = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, vetor)){
        window.alert('Tudo nos conformes.')
    } else{
        window.alert('Valor encontrado ou inválido.')
    }
}
/*

var vetor = []
let numero = window.document.getElementById('txtnum')
let res = window.document.querySelector('div#res')
let tab = window.document.getElementById('seltab')
function adicionar(){



    

    if (numero.value <= 0 || numero.value > 100){
        window.alert('Digite um número entre 1 a 100')
    } else{
        var n = parseInt(numero.value)
        var test = n
            vetor.push(n)
            var item = window.document.createElement('Option')
            item.text = `O valor ${n} foi adicionado`
            tab.appendChild(item)
        }
        
    }


function finalizar(){
    let res = window.document.querySelector('div#res')
    let quant = vetor.length
    let soma = 0
    let menor = 0
    let maior = 0

    for(var c = 0;c <= 3; c++){
        var media = media + vetor[c]
    }       

    res.innerHTML += `Vetor = ${vetor} e quant ${media}`
}

*/