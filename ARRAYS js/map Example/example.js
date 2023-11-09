import { lucas, maria, joao, ana } from "./people.js";
const people = [lucas, maria, joao, ana]

// Método map
// Similar ao forEach, porém com o adicional de poder retornar um outro array


const names = people.map((value, index, array)=>{
    console.log('index: ', index)
    console.log('value: ', value.name)
    console.log('________________')

    return value.lastName
})

names.forEach((names) => {
    console.log("Nomes: ", names)
    console.log('________________')
})