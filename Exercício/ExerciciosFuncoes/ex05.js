/*
(5)
    Faça um programa com uma função chamada somaImposto. A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de custo para incluir o imposto sobre vendas.
*/

/*

function somaImposto(produto, taxaImposto){
    valorf = produto
    return produto * (taxaImposto/100)

}

taxa = somaImposto(1000,7)
console.log(`O valor da taxa é ${taxa}`)
console.log(`Valor Final do produto: ${valorf+taxa}`)

*/
function somaImposto(taxaImposto, custo){
    return ((taxaImposto/100) * custo) + custo
}

res = somaImposto(6, 1000)
console.log(res)