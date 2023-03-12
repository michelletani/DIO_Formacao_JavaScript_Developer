const { gets, print } = require('./funcoes');

const notaMedia = gets();

if (notaMedia < 5) {
    print('Reprovado');
} else if (notaMedia >= 5 && notaMedia < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}