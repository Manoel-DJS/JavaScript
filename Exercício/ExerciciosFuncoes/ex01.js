/*
function imprimir(n){
    let i = ''
    for(var c = 1; c <= n; c++){
        i += String(c) 
    }
    return c

}

let res = imprimir(3)
console.log(res)
*/

function imprimir(n){
    var i = 0
    for(var c = 1; c <= n; c++){
        i = c.toString()
        console.log(i)
    }

}
let res = imprimir(3)