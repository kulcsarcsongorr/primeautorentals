function calculate() {
    const days = document.getElementById('days').value;
    const price = document.getElementById('price').value;

    if (days && price) {
        const total = days * price;
        document.getElementById('result').innerHTML =
            `Összesen: <span style="color:#ff3333">${total.toLocaleString()} Ft</span>`;
    } else {
        document.getElementById('result').innerHTML = "Adj meg minden értéket!";
    }
}
