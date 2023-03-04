/*
let valores = [8, 1, 7, 4, 2, 9]

for(var p = 0 ; p < valores.length ; p++){
    console.log(`O valor na posição ${p} é ${valores[p]}`)
}
*/

// Nova forma

let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
media = 0
for(var p in valores){
    console.log(`O valor na posição ${p} é ${valores[p]}`)
    media += valores[p]
}
console.log(media)