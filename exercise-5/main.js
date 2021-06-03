(function () {
    'use strict';
    let userText = document.getElementById('user-text');
    let button = document.getElementById('button');
    let userSelect = document.getElementById('user-select');
    let WordOption = document.getElementById('word');
    let tableBody = document.getElementById('table-body');    
    
    button.addEventListener('click', app);
    document.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            app()
        };
    });
    
    function app() {
        if (WordOption.checked === true) {
            countWord();
        } else {
            count();
        };
    };
    
    function countWord() {
        let counts = {};
        let wordText = userText.value;
        let allWords = wordText.split(/\W+/g);
        let totalWords = [];        
        
        for (let i = 0; i < allWords.length; i++) {
            let wordCounter = allWords[i].toLowerCase();
            if (!/\d+/.test(wordCounter)) {
                if (counts[wordCounter] === undefined) {
                    counts[wordCounter] = 1;
                    totalWords.push(wordCounter);
                } else {
                    counts[wordCounter] = counts[wordCounter] + 1;
                };
            };
        };
        tableBody.innerHTML = '';
        
        for (let n = 0; n < totalWords.length; n++) {
            
            let wordRowTable = document.createElement('tr');
            let wordColumTable = document.createElement('td');
            wordColumTable.className = 'td-data';
            let textColum = document.createTextNode(totalWords[n] + ' = ' + counts[totalWords[n]]);
            
            wordColumTable.appendChild(textColum);
            wordRowTable.appendChild(wordColumTable);
            tableBody.appendChild(wordRowTable);
        };
    };
    
    function count() {
        let textRandom = userText.value.replace(/[\s,.\-_]/g, '');
        let text = textRandom;
        if (userSelect.value === 'upper-case') {
            text = textRandom.toUpperCase();
        } else if (userSelect.value === 'lower-case') {
            text = textRandom.toLowerCase();
        } else {
            text = textRandom;
        };
        let max = 2500;
        let totalTimes = {};
        let character = '';
        
        if (text.length > max) {
            alert('Sorry, please enter a text with a maximum of 2500 character :(');
        } else {
            
            for (let i = 0; i < text.length; i++) {
                character = text[i];
                if (!totalTimes[character]) {
                    totalTimes[character] = 1;
                } else {
                    totalTimes[character]++;
                };
            };
            
            tableBody.innerHTML = '';
            
            for (let idx in totalTimes) {

                let tr = document.createElement('tr');
                let td = document.createElement('td');
                td.className = 'td-data';
                let tdText = document.createTextNode(idx + ' = ' + totalTimes[idx]);
                
                td.appendChild(tdText);
                tr.appendChild(td);
                tableBody.appendChild(tr);
                
            };
        };
    };
})();