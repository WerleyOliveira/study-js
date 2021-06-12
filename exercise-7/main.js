(function () {
    'use strict';

    let inputHeight = document.getElementById('input-height');
    let inputWeight = document.getElementById('input-weight');
    let btnCalculate = document.getElementById('btn-calculate');
    let imcResult = document.getElementById('imc-result');
    let image = document.getElementById('div-img');
    let userHeight;
    let userWeight;
    let result;
    let imageID;
    let showMessage;

    const imgs = {
        1: './img/normal.png',
        2: './img/over.png',
        3: './img/obs1.png',
        4: './img/obs2.png',
        5: './img/obs3.png'
    };

    btnCalculate.addEventListener('click', calculate);

    function calculate() {
        cleanDisplay();
        userHeight = parseFloat(inputHeight.value.replace(',','')) || parseFloat(inputHeight.value.replace('.',''));
        userWeight = parseFloat(inputWeight.value);
        result = userHeight + userHeight;
        result = userWeight / result;
        console.log(result);
        result = result * 100;
        imcResult.innerHTML = result.toFixed(2);
        setImgAndMessage();
    };

    function cleanDisplay() {
        imcResult.innerHTML = '';
    };

    function setImgAndMessage() {
        if (result > 40) {
            imageID = 5;
            showMessage = 'Obese level III';
            setupCSS();
        } else if (result > 35 && result < 39.99) {
            imageID = 4;
            showMessage = 'Obese level II';
            setupCSS();
        } else if (result > 30 && result < 34.99) {
            imageID = 3;
            showMessage = 'Obese level I';
            setupCSS();
        } else if (result > 25 && result < 29.99) {
            imageID = 2;
            showMessage = 'Overweight';
            setupCSS();
        } else {
            imageID = 1;
            showMessage = 'Normal';
            setupCSS();
        };
    };

    function setupCSS() {
        let message = document.getElementById('imc-message');
        let table = document.getElementById('table-result');
        let imcText = document.getElementById('imc-text');
        let text = document.getElementById('text');
        table.classList.remove('table-result1');
        table.classList.add('table-result');
        imcText.classList.remove('td-remove');
        imcText.classList.add('td');
        imcText.innerHTML = 'Your IMC:'
        imcResult.classList.remove('td-remove');
        imcResult.classList.add('td');
        text.classList.remove('td-remove');
        text.classList.add('td');
        text.innerHTML = 'You are:';
        message.classList.remove('td-remove');
        message.classList.add('td');
        message.innerHTML = showMessage;
        image.style.backgroundImage = `url(${imgs[imageID]})`;
    };
}());
