/*

Reverso do número. Faça uma função que retorne o reverso de um número inteiro informado. Por exemplo: 127 -> 721.

*/

function reverter(n){ // 2 o parametro
    let numero = n.toString() // passando n para string
    let saida = '' // criando a variável de saida

    for(var i = numero.length -1 ; i >= 0; i--){ // numero.length -1 é a contagem de caracteres -1
        saida += numero[i]
    }
    
    return saida
    }

chamadaf = reverter(123) // Primeiro a chamada
console.log(chamadaf)

// numero.length daria 3, mas o [i] tem que começar de 0. Por isso o -1 ^^, ai a repetição vai começar do ultimo caractere e vai até o primeiro 2,1,0... Fosse um número maior seria a mesma coisa.