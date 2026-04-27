let number = 5674;

function sumOfDigits(num) {
    let digits = String(num).split("");
    
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log(`Сума цифр числа ${num} дорівнює: ${sum}`);
}

sumOfDigits(number);