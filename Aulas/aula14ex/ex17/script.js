function clicar() {
    let num = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')
    var n = Number(num.value)
    res.innerHTML = ''
    res.innerHTML = `<p>Tabuada de ${n}</p>`
    for( var c = 0 ; c <= 10 ; c++){
        res.innerHTML += `<p> ${n} x ${c} = ${n*c} </p>`
    }
}