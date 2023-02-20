var agora = new Date()
var hora = agora.getHours()
console.log(`O relógio indica ${hora} horas`)
if(hora >= 1 && hora < 6){
    console.log('Boa Madrugada!')
}else if(hora >= 6 && hora < 12){
    console.log('Bom Dia!')
}else if (hora >= 12 && hora < 18){
    console.log('Boa Tarde!')
}else if (hora >= 18 && hora < 25){
    console.log('Boa Noite!')
}

/** 
 *  
 * 
*/