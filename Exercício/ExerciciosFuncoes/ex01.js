
/*
function imprimir(n){
    var i = ''
    for(var c = 1; c <= n; c++){
        i = c.toString()
        console.log(i)
    }

}
let res = imprimir(3)
*/

function imprimir(n){
    let S = ''
    for(var x = 1; x <= n ; x++){
        for(var y = 0; y < x; y++){
            S += x.toString()
            console.log(S)
        }
    }

}

let res = imprimir(3)




// https://wiki.python.org.br/ExerciciosFuncoes