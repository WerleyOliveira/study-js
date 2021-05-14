(function (){

let userAmount = document.getElementsByClassName('value-user');
let buttonConverter = document.getElementById('button-converter');
let buttonDelete = document.getElementById('clear-value');

buttonConverter.addEventListener('click', showTheResult);
buttonDelete.addEventListener('click', clear);

function calculate () {
let totalOfCents = parseFloat(userAmount[0].value.replace(',', '.')) * 100;
return totalOfCents;
};

function separateCoins () {
let totalCents = calculate();
let totalCoins = [];
let remains = 0;

if ( isNaN(totalCents)) {
    return;
};

if ( totalCents >= 25 ) {
    remains = totalCents % 25;
    totalCoins.push((totalCents - remains) / 25);
    totalCents = remains;
} else {
    totalCoins.push(0);
};

if ( totalCents >= 10 ) {
    remains = totalCents % 10;
    totalCoins.push((totalCents - remains) / 10);
    totalCents = remains;
} else {
    totalCoins.push(0);
};

if ( totalCents >= 5 ) {
    remains = totalCents % 5;
    totalCoins.push((totalCents - remains) / 5);
    totalCents = remains;
} else {
    totalCoins.push(0);
}

if ( totalCents >= 1) {
    remains = totalCents %1;
    totalCoins.push((totalCents - remains) / 1);
    totalCents = remains;
} else {
    totalCoins.push(0);
};

return totalCoins;

};

function showTheResult () {
    let totalSeparateCoins = separateCoins();
    console.log(totalSeparateCoins);
    if (!totalSeparateCoins) {
        alert('Is not a number!');
        return;
    };
    let coinQuarter = document.getElementsByClassName('quarter');
    let coinDimer = document.getElementsByClassName('dimer');
    let coinNickel = document.getElementsByClassName('nickel');
    let coinPenny = document.getElementsByClassName('penny');
    let iWillNeedQuarter = totalSeparateCoins[0];
    let iWillNeedDimer = totalSeparateCoins[1];
    let iWillNeedNickel = totalSeparateCoins[2];
    let iWillNeedPenny = totalSeparateCoins[3];

    coinQuarter[0].textContent = iWillNeedQuarter;
    coinDimer[0].textContent = iWillNeedDimer;
    coinNickel[0].textContent = iWillNeedNickel;
    coinPenny[0].textContent = iWillNeedPenny;
    
};

function clear () {
    userAmount[0].value = '';
    let coinQuarter = document.getElementsByClassName('quarter');
    let coinDimer = document.getElementsByClassName('dimer');
    let coinNickel = document.getElementsByClassName('nickel');
    let coinPenny = document.getElementsByClassName('penny');
    
    coinQuarter[0].textContent = '';
    coinDimer[0].textContent = '';
    coinNickel[0].textContent = '';
    coinPenny[0].textContent = '';
};

})();