/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código. Condição de pagamento:
1 - A vista no Dinheiro ou Pix: 15% de desconto;
2 - A vista no Débito: 10% de desconto;
3 - Em até duas vezes: Preço normal;
4 - Acima de duas vezes: 10% de juros.
*/


function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100)));
}

function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros / 100)));
}


const preco = 100.00;
const tipoPagamento = 3;


if (tipoPagamento == 1) {
    console.log(aplicarDesconto(preco, 15));
} else if (tipoPagamento == 2) {
    console.log(aplicarDesconto(preco, 10));
} else if (tipoPagamento == 3) {
    console.log(preco);
} else if (tipoPagamento == 4) {
    console.log(aplicarJuros(preco, 10));
}