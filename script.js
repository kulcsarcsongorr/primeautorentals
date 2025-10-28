
function calculate() {
    let km = document.getElementById('kmInput').value;
    let pricePerKm = 40; // 40 Ft / km
    let total = km * pricePerKm;
    document.getElementById('result').innerText = 'Extra díj: ' + total + ' Ft';
}
