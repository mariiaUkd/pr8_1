let count = 0;

const counterDisplay = document.getElementById('counter');
const btnMinus = document.getElementById('minusBtn');
const btnPlus = document.getElementById('plusBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateUI() {
    counterDisplay.innerText = count;
    counterDisplay.style.color = getRandomColor();
}

btnPlus.addEventListener('click', () => {
    count++;
    updateUI();
});

btnMinus.addEventListener('click', () => {
    count--;
    updateUI();
});