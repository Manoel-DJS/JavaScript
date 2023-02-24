function clicar(){
    var tini = window.document.getElementById('txtini')
    var tpas = window.document.getElementById('txtpas')
    var tfim = window.document.querySelector('input#txtini')
    var res = window.document.getElementById('res')
    let i = Number(tini.value)
    let p = Number(tpas.value)
    let f = Number(tfim.value)

    for(var c = i; c <= f; c += p){
        res.innerHTML += `${c}`
    }
}