const digits = Array.from(document.querySelectorAll('.digit'));
const buttons = Array.from(document.querySelectorAll('.step-btn'));

let value = 0;
const MODULO = 100000;

function normalize(number) {
  return ((number % MODULO) + MODULO) % MODULO;
}

function render() {
  const padded = String(value).padStart(5, '0');
  digits.forEach((digitEl, index) => {
    digitEl.textContent = padded[index];
  });
}

function updateBy(delta) {
  value = normalize(value + delta);
  render();
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const delta = Number(button.dataset.delta || 0);
    updateBy(delta);
  });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
}

render();
