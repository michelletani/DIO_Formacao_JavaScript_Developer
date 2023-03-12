const { gets, print } = require('./funcoes');

const n = gets();
let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 == 0) {
        if (numero > maiorPar) {
            maiorPar = numero;
        }
    } else {
        if (menorImpar === 0) {
            menorImpar = numero;
        } else if (numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print(maiorPar);
print(menorImpar);