function clicar(){
    var tini = window.document.getElementById('txtini')
    var tpas = window.document.getElementById('txtpas')
    var tfim = window.document.querySelector('input#txtfim')
    var res = window.document.getElementById('res')
    let i = Number(tini.value)
    let p = Number(tpas.value)
    let f = Number(tfim.value)
    res.innerHTML = ''

    // ainda farei correções

    if( i == 0 || p == 0 || f == 0){
        window.alert('Error! Falta Valores!')
        res.innerHTML += `<p>Valor do I: ${i}</p>`
        res.innerHTML += `<p>Valor do P: ${p}</p>`
        res.innerHTML += `<p>Valor do F: ${f}</p>`

    } else{
        if(i < f){
            for(var c = i ; c <= f ; c += p){
                res.innerHTML +=` ${c} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1} `
        }else{
            for(var c = i; c >= f ; c -= p){
                res.innerHTML +=` ${c} \u{1F449}`
            }
            res.innerHTML += ` \u{1F3C1} ` 
        }
    }
}
/**
        res.innerHTML += `<p>Valor do I: ${i}</p>`
        res.innerHTML += `<p>Valor do P: ${p}</p>`
        res.innerHTML += `<p>Valor do F: ${f}</p>`
 */