
/* 
(1) Faça um programa para imprimir:
    1
    2   2
    3   3   3
    .....
    n   n   n   n   n   n  ... n

    para um n informado pelo usuário. Use uma função que receba um valor n inteiro e imprima até a n-ésima linha

Loucura que tava fazendo
function imprimir(n){
    var i = ''
    for(var c = 1; c <= n; c++){
        i = c.toString()
        console.log(i)
    }

}
let res = imprimir(3)
*/

function imprimir(n){                   // parâmetro
    let S = ''                          // declarei variável S 
    for(var x = 1; x <= n ; x++){       // repetição para pegar o número
        S = ''                          // apos executar o segundo bloco de repetição zerar o S
        for(var y = 0; y < x; y++){     //Segundo bloco de repetição para imprimir os números 
            S += ' ' + x.toString()     // String convertida mais um espaço pra ficar bonitinho
        } 
                                        // Nesse bloco, ele é executado enquanto o y for menor que o x do bloco anterior, ai ele fica meio q sempre na cola do outro.
        console.log(S)                  // aqui imprimi os números na sequencia que a questão deseja. Valor foi armazenado na variavel S
    }

}

let res = imprimir(5) // Chamada da função




// https://wiki.python.org.br/ExerciciosFuncoes