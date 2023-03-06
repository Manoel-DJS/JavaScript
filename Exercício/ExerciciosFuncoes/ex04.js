function posneg(n){
    if(n.length == 0){
        console.log('Por Favor digite um número!')
    } else{
        if(n < 0){
            return 'N'
        } else{
            return 'P'
        }
    }
}
res = posneg(100)
console.log(res)