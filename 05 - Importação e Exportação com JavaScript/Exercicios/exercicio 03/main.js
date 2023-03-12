const { gets, print } = require('./funcoes');

const quantidadeNumeros = gets();

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (numero % 2 == 0) {
        print(numero);
    }
}