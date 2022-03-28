let Convert1 = document.getElementById('button_convert');
Convert1.addEventListener('click',click);
function click(){
    let amount = document.getElementById('input').value;
    parseInt(amount)
    let fCurrency = document.getElementById('select1').value;
    parseInt(fCurrency)
    let tCurrency = document.getElementById('select2').value;
    parseInt(tCurrency)
    let result;
    result = amount * tCurrency / fCurrency;
    document.getElementById('result').innerHTML = 'Result: ' + result;
}