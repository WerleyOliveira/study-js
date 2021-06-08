(function () {
    'use strict';

    let display = document.getElementById('display');
    let btnNumbers = document.querySelectorAll('[id*=keybutton]');
    let btnOperators = document.querySelectorAll('[id*=operator]');
    let btnComma = document.getElementById('comma');
    let btnEquals = document.getElementById('equals');
    let btnBackspace = document.getElementById('backspace');
    let btnCleanCalculator = document.getElementById('clean-calculator');
    let btnPlusAndMinus = document.getElementById('plus-minus');


    let lastNumber;
    let doCalculation = false;
    let lastOperator;

    btnNumbers.forEach(All);

    btnBackspace.addEventListener('click', backspace);
    btnComma.addEventListener('click', validationComma);
    btnEquals.addEventListener('click', calculate);
    btnCleanCalculator.addEventListener('click', cleanCalculator);
    btnPlusAndMinus.addEventListener('click', plusAndMinus);

    function plusAndMinus ( ) {
        display.textContent = display.textContent * -1;
    };

    function cleanCalculator ( ) {
        display.textContent = '';
    };

    function backspace ( ) {
        let displayText = [...display.textContent];
        let length = displayText.length;
        length -= 1;
        displayText.length = length;
        display.textContent = displayText.join('');
    };

    function validationComma ( ) {
        if ( !display.textContent.includes('.') ) {
            display.textContent = display.textContent + '.';
        };
    };

    function All(button) {
        button.addEventListener('click', insertNumber);
    };

    function insertNumber(event) {
        updateDisplay(event.target.textContent);
    };

    function updateDisplay(text) {
        if (!doCalculation) {
            display.textContent += text;
        } else {
            display.textContent = text;
            doCalculation = false;
        };
    };

    btnOperators.forEach(operatorSignal);

    function operatorSignal(operator) {
        operator.addEventListener('click', calculate);
    };

    function operation(operator, first, second) {
        switch (operator) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '/':
                return first / second;
            case '*':
                return first * second;
        }
    }

    function calculate(event) {
        if (typeof lastNumber === 'undefined') {
            lastNumber = parseFloat(display.textContent);
            lastOperator = event.target.textContent;
        } else {
            let actualNumber = parseFloat(display.textContent);
            display.textContent = lastNumber = operation(lastOperator, lastNumber, actualNumber);
            lastOperator = event.target.textContent;
        };
        doCalculation = true;
    };





}());