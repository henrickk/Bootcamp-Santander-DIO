"use strict";
function printaValoresNumericos(num1, num2) {
    console.log(num1 + num2);
}
function somarValoresNumericos(num1, num2, callback) {
    let resultado = num1 + num2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function divididoPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericos(1, 3, aoQuadrado));
console.log(somarValoresNumericos(1, 3, divididoPorEleMesmo));
