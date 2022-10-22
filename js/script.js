let $ = document
let inputUser = $.querySelector('#converter')
let btnChenge = $.querySelector('.changeButton')
let btnReset = $.querySelector('.resetButton')
let btnConvert = $.querySelector('.convertButton')
let returns = $.querySelector('.result')
let warning = $.querySelector('.alert-string')
// ----------chenge------------
btnChenge.addEventListener('click', clickChenge)
let flagF = false
function clickChenge() {
    if (flagF) {
        $.querySelector('.C').innerHTML = "°C"
        $.querySelector('.F').innerHTML = "°F"
        $.title = 'SalzLearn| Js | °C to °F'
        inputUser.setAttribute('placeholder', '°C')
        flagF = false
    } else {
        $.querySelector('.C').innerHTML = "°F"
        $.querySelector('.F').innerHTML = "°C"
        $.title = 'SalzLearn| Js | °F to °C'
        inputUser.setAttribute('placeholder', '°F')
        flagF = true
    }
}
//  -----------Reset------------
btnReset.addEventListener('click', clickReset)
function clickReset() {
    returns.innerHTML = ''
    inputUser.value = ''
}
//  -----------Conver-----------
btnConvert.addEventListener('click', clickCovert)
function clickCovert() {
    let isNan = isNaN(inputUser.value)
    if (isNan === true) {
        warning.style.display = 'block'
        setInterval(function () {
            warning.style.display = 'none'
        }, 3000)
    } else {
        if (inputUser.getAttribute('placeholder') === '°C') {
            let silsios = ((inputUser.value) * 1.8) + 32

            returns.innerHTML = (silsios.toFixed(2)) + '°F'
        } else {

            let faren = (inputUser.value - 32) / 1.8
            returns.innerHTML = (faren.toFixed(2)) + '°C'
        }

    }
}