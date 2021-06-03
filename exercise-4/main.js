(function () {
    'use strict';

    let number = document.getElementById('user-number');
    let button = document.getElementById('button');
    let userSelect = document.getElementById('user-select');
    let text = document.getElementsByClassName('text');
    let answer = document.getElementsByClassName('answer');
    let errorMessage = document.getElementsByClassName('error');

    button.addEventListener('click', romanToArabic);

    function romanToArabic() {
        errorMessage[0].textContent = '';
        text[0].textContent = '';
        answer[0].textContent = '';

        if (number.value > 3999){
            errorMessage[0].textContent = "Sorry! You must choose a number between 1 and 3.999.";
            return;
        };
        let romanToNumber = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };

        if (userSelect.value === 'roman-number') {
            let num = number.value;
            let roman = "";

            for (let key in romanToNumber) {
                while (num >= romanToNumber[key]) {
                    roman += key;
                    num -= romanToNumber[key];
                };
            };

            text[0].textContent = 'Your number from ARABIC to ROMAN is:';
            answer[0].textContent = roman;

        } else {
            let nu = number.value;
    let total = 0;
    let lookUp = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    while (nu.length > 0) {

        let acc = [0, 0];

        for (let idx in nu) {
            let word = nu[idx];
            let valor = lookUp[word];
            if (acc[0] < valor) {
                acc[0] = valor;
                acc[1] = idx;
            };
        };

        let upPosition = acc[1];
        let lastPosition = upPosition - 1;
        let atualLetter = nu[upPosition];
        let lastLetter = nu[lastPosition];
        let letterAtualValue = lookUp[atualLetter];
        let letterLastValue = lookUp[lastLetter];
        let nuArray = [...nu];
        nuArray.splice(upPosition, 1);
        nu = nuArray.join('');

        if (letterLastValue && letterAtualValue > letterLastValue) {
            total += letterAtualValue - letterLastValue;
            let nuArray = [...nu];
            nuArray.splice(lastPosition, 1);
            nu = nuArray.join('');

        } else {
            total += letterAtualValue;
        };

    };

            if(!total) {
                errorMessage[0].textContent = 'Sorry! The character probably doesn\'t correspond to a roman number.';
            } else {

            text[0].textContent = 'Your number from ROMAN to ARABIC is:';
            answer[0].textContent = total;
            };
        };
    };
})();