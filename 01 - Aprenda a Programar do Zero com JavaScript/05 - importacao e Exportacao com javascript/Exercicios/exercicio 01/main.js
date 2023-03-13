const { gets, print } = require('./funcoes');

for (let i = 1; i <= 10; i++) {
    const numero = gets();
    let resultado = numero * i;
    print(`${numero} x ${i} = ${resultado}`)
}