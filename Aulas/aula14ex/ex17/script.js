function clicar() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.querySelector('select#seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um número: ')
    } else{
        var n = Number(num.value)
        tab.innerHTML = ''

        for( var c = 0 ; c <= 10 ; c++){
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)

        }
}
}

/*
        res.innerHTML += `<p>Tabuada de ${n}</p>`
    let res = window.document.getElementById('res')
    res.innerHTML = ''
    res.innerHTML += `<p> ${n} x ${c} = ${n*c} </p>`

*/