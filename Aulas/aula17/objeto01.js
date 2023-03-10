// Object
let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.2,
    engordar(p){
        console.log('Gordin')
        this.peso += p
    }
}
console.log(`Antes de engordar José pesava: ${amigo.peso}`)
amigo.engordar(3)
console.log(amigo.peso)

/*

Array syntax: 
let identificador = [valor, valor, valor] 
0        1        2 
Object syntax: 
let identificador = {nome:valor, 
nome:valor, nome:valor}

Diferenças: 
Para declarar um ARRAY usa-se COLCHETES [ ] 
Para declarar um OBJECT usa-se CHAVES { }



const person = {
    fName: "Elon",
    lName: "Musk",
    fullName() {
        return `${this.fName} ${this.lName}`
    }
}
console.log(person.fullName())

/*  this  é uma keyword que refere-se a um OBJETO. 
Portanto,  this.fName  refere-se à propriedade  fName  DESTE (this) OBJETO (person). */
