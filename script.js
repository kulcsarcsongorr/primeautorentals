function calculate() {
  const category = document.getElementById('category').value;
  const days = Number(document.getElementById('days').value);
  const km = Number(document.getElementById('km').value);

  let basePrice = 0;
  let includedKm = 400; // km/nap
  let extraKmPrice = 0;

  switch(category) {
    case 'kis_auto':
      basePrice = 150;
      extraKmPrice = 0.5;
      break;
    case 'kis_busz':
      basePrice = 300;
      extraKmPrice = 1;
      break;
    case 'kis_busz_plus':
      basePrice = 350;
      extraKmPrice = 1;
      break;
  }

  const extraKm = Math.max(0, km - (includedKm * days));
  const totalPrice = (basePrice * days) + (extraKm * extraKmPrice);

  document.getElementById('result').innerText =
    `Összesen fizetendő: ${totalPrice.toFixed(2)} lej (Extra km: ${extraKm})`;
}
