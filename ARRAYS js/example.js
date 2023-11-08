import { lucas, maria, joao, ana } from "./people.js";
const people = [lucas, maria, joao, ana]

// Método forEach
function callback(){
    console.log("Callback")
}

people.forEach(callback)