function escreverMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

// escreverMeuNome('Michelle');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('Michelle') + ', maior de idade.');
    } else {
        console.log(escreverMeuNome('Michelle') + ', menor de idade.');
    }
}

verificarIdade(15);