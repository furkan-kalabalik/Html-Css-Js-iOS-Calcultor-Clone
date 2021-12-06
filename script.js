const cButton = document.querySelector('.c-button');
const deleteButton = document.querySelector('.delete-button');
const divideButton = document.querySelector('.divide-button');
const sevenButton = document.querySelector('.seven-button');
const eightButton = document.querySelector('.eight-button');
const nineButton = document.querySelector('.nine-button');
const multiplyButton = document.querySelector('.multiply-button');
const sixButton = document.querySelector('.six-button');
const fiveButton = document.querySelector('.five-button');
const fourButton = document.querySelector('.four-button');
const substractButton = document.querySelector('.substract-button');
const threeButton = document.querySelector('.three-button');
const twoButton = document.querySelector('.two-button');
const oneButton = document.querySelector('.one-button');
const addButton = document.querySelector('.add-button');
const zeroButton = document.querySelector('.zero-button');
const equalButton = document.querySelector('.equal-button');
const inputText = document.querySelector('.input-text');

let process = [];

sevenButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '7';
    else inputText.textContent += '7';
});

eightButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '8';
    else inputText.textContent += '8';
});

nineButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '9';
    else inputText.textContent += '9';
});

sixButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '6';
    else inputText.textContent += '6';
});

fiveButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '5';
    else inputText.textContent += '5';
});

fourButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '4';
    else inputText.textContent += '4';
});

threeButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '3';
    else inputText.textContent += '3';
});

twoButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '2';
    else inputText.textContent += '2';
});

oneButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '1';
    else inputText.textContent += '1';
});

zeroButton.addEventListener('click', (e) => {
    if (inputText.textContent === '0') inputText.textContent = '0';
    else inputText.textContent += '0';
});

deleteButton.addEventListener('click', (e) => {
    inputText.textContent = inputText.textContent.substring(
        0,
        inputText.textContent.length - 1
    );

    if (inputText.textContent.length === 0) {
        inputText.textContent = '0';
    }
});

cButton.addEventListener('click', (e) => {
    inputText.textContent = '0';
    process = [];
});

substractButton.addEventListener('click', (e) => {
    process.push(inputText.textContent);
    process.push('-');
    inputText.textContent = '0';
});

multiplyButton.addEventListener('click', (e) => {
    process.push(inputText.textContent);
    process.push('*');
    inputText.textContent = '0';
});

addButton.addEventListener('click', (e) => {
    process.push(inputText.textContent);
    process.push('+');
    inputText.textContent = '0';
});

divideButton.addEventListener('click', (e) => {
    process.push(inputText.textContent);
    process.push('/');
    inputText.textContent = '0';
});

equalButton.addEventListener('click', (e) => {
    process.push(inputText.textContent);
    while (process.length != 1) {
        const num1 = parseInt(process.shift());
        const operator = process.shift();
        const num2 = parseInt(process.shift());
        switch (operator) {
            case '-':
                process.unshift(num1 - num2);
                break;
            case '+':
                process.unshift(num1 + num2);
                break;
            case '*':
                process.unshift(num1 * num2);
                break;
            case '/':
                process.unshift(parseInt(num1 / num2));
                break;
        }
        console.log('After equal:' + process);
    }
    inputText.textContent = process[0];
    process.shift();
});
