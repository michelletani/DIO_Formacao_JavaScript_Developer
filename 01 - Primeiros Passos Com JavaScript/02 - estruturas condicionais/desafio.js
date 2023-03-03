/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;/
2 - Preço da gasolina;
3 - O tipo de combustível;
4 - Gasto médio do combustível do carro por KM;
5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const gastoMedioCombustivel = 15;
const distanciaKm = 150;

const gastoMedio = distanciaKm / gastoMedioCombustivel;

let valorGasto = 0;

if (tipoCombustivel == 'Etanol') {
    valorGasto = gastoMedio * precoEtanol;
} else {
    valorGasto = gastoMedio * precoGasolina;
}

console.log(valorGasto.toFixed(2));