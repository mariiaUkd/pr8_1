function startGame() {

    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let isGuessed = false;

    alert("Я загадав число від 1 до 100. Спробуй вгадати!");

    while (!isGuessed) {
        const input = prompt("Введіть ваше число (або натисніть 'Скасувати' для виходу):");

        if (input === null) {
            alert("Гру припинено.");
            break;
        }

        const guess = Number(input);
        attempts++;

        if (input.trim() === "" || isNaN(guess)) {
            alert("Будь ласка, введіть число!");
            continue;
        }

        if (guess < targetNumber) {
            alert("Замало! Спробуйте ще раз.");
        } else if (guess > targetNumber) {
            alert("Забагато! Спробуйте ще раз.");
        } else {
            alert(`Вітаю! Ви вгадали число ${targetNumber} за ${attempts} спроб.`);
            isGuessed = true;
        }
    }
}