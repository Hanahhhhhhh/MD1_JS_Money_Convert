let Convert1 = document.getElementById('button_convert');
Convert1.addEventListener('click', click);

function click() {
    let amount = document.getElementById('input').value;
    let fCurrency = document.getElementById('select1').value;
    let tCurrency = document.getElementById('select2').value;
    let result = amount * fCurrency / tCurrency;
    parseInt(result)

    document.getElementById('result').innerHTML = 'Result: ' + result;
}