import {lucas, maria, joao, ana} from "./pessoas.js";
const people = [lucas, maria, joao, ana]

// Método forEach
function callback(){
    console.log("Callback")
}

people.forEach(callback)