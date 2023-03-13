const { gets, print } = require('./funcoes');

const salarioBruto = gets();
const ValorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquotas(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}
const aliquotasImporto = pegarAliquotas(salarioBruto)
const valorImposto = (calcularPorcentagem(salarioBruto, aliquotasImporto));
const valorTransferir = salarioBruto - valorImposto + ValorBeneficios;

print(valorTransferir);