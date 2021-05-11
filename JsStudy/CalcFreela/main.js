function priceHour() {
    let won = document.querySelector('input#wantWon').value
    let day = document.querySelector('input#hoursDay').value
    let week = document.querySelector('input#daysWeek').value
    let result = parseFloat(won / (day * week * 4)).toFixed(2)

    if (won == "" || day == "" || week == "") {
        alert('Favor preencher os campos corretamente')
    } else {
        let resultH = document.querySelector('div.result').innerHTML = `O valor de sua hora de trabalho é R$${result}`
    }
}

function projectPrice() {
    let price = document.querySelector('input#priceProject').value
    let hourP = document.querySelector('input#hourProject').value
    let dayP = document.querySelector('input#dayProject').value
    let result = parseFloat(price * hourP * dayP).toFixed(2)

    if (price == "" || hourP == "" || dayP == "") {
        alert('Favor preencher os campos corretamente')
    } else {
        let resultP = document.querySelector('div.result1').innerHTML = `<br>O valor do seu projeto é R$${result}`
    }
}