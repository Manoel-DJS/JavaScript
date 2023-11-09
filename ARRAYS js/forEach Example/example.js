import { lucas, maria, joao, ana } from "./people.js";
const people = [lucas, maria, joao, ana]

// Método forEach
// A função foreach:

/** 
function callback(value, index, array){
    console.log('index: ', index)
    console.log('value: ', value.name)
    console.log('________________')
}
people.forEach(callback)
**/

// forEach
// Função que executa 1 vez pra cada item do array 


people.forEach((value, index, array)=>{
    console.log('index: ', index)
    console.log('value: ', value.name)
    console.log('________________')
})
