const { gets, print } = require('./funcoes');

const quantidadeValores = gets();

let maiorValor = 0;
let menorValor = gets(0);

for (let i = 0; i < quantidadeValores; i++) {
    const valor = gets();
    if (maiorValor < valor) {
        maiorValor = valor;
    } else if (menorValor > valor) {
        menorValor = valor;
    }
}

/*
for (let i = 0; i < quantidadeValores; i++) {
    const valor = gets();
    if (menorValor > valor) {
        menorValor = valor;
    }
}
*/

print(maiorValor);
print(menorValor);