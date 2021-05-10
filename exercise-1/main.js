+function () {
'use strict'

let numBin = document.getElementById('numbin');
let numDec = document.getElementById('numdec');
let buttonNumberBinary = document.getElementById('btBinario');
let buttoNumberDecimal = document.getElementById('btDecimal');

buttoNumberDecimal.addEventListener('click', numberToBinaray );
buttonNumberBinary.addEventListener('click', numberToDecima );

let resultadoDecimal = document.querySelector(".resultdecimal");
let resultadoBinario = document.querySelector(".resultbinario");


function numberToBinaray (){
    let valor = +numDec.value; 
    let resultado = [];
    while ( valor > 0 ) {
        let resto = valor % 2;
        valor = (valor - resto) / 2;
        resultado.unshift(resto);
    };

    resultadoBinario.textContent = resultado.join('');
};



function numberToDecima () {
    let resultado = 0;
    let valor = numBin.value;
    valor = Array.from(valor);
    valor = valor.reverse(); 
    valor = valor.join('');
    for(let x=0; x < valor.length; x++) {
        let potencia = Math.pow(2, x);
        let elemento = +valor[x];
        resultado += potencia * elemento;
    };

    resultadoDecimal.textContent = resultado;

};


}();