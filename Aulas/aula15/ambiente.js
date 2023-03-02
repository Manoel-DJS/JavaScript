let num = [4,5,6,9,2]
console.log(num)

console.log(`O vetor tem ${num.length} posições`)
console.log(`A posição 4 do vetor é o valor: ${num[3]} `)

/*
for(var p = 0 ; p < num.length ; p ++){
    console.log(`O valor na posição ${p} é ${num[p]}`)
}
*/
num.sort()
pos = num.indexOf(9)
if (pos == -1){
    console.log('Não tem o valor pedido(3)')
} else {
    console.log(`O valor 9 está na posição ${pos}`)

}