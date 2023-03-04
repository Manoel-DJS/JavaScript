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
        vetor.push(Number(numero.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${Number(numero.value)} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor encontrado ou inválido.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(vetor.length == 0){
        window.alert('Adicione valores antes de finalizar')
        numero.focus()
    } else{
        let tot = vetor.length
        let soma = 0
        let maior = vetor[0]
        let menor = vetor[0]
        let media = 0

        for(var p = 0; p <= tot; p++){
            if(vetor[p] > maior){
                maior = vetor[p]
            }
            if(vetor[p] < menor){
                menor = vetor[p]
            }
            
        }
        for(let pos in vetor){ // Se usar o VETOR, CORRA PRA ESSE
            soma += vetor[pos]
        }

        media = soma /tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>A soma de todos os valores resulta: ${soma}</p>`
        res.innerHTML += `<p>O maior número é: ${maior}</p>`
        res.innerHTML += `<p>O menor número é: ${menor}</p>`
        res.innerHTML += `<p>A média dos valores é: ${media} </p>`

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