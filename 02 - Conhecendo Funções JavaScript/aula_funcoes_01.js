function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
    //Math.pow(altura, 2); == (altura * altura);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso.';
    } else if (imc < 25) {
        return 'Peso normal.';
    } else if (imc < 30) {
        return 'Acima do peso.';
    } else if (imc < 40) {
        return 'Obeso.';
    } else {
        return 'Obesidade Grave.';
    }
}

// Main - Função principal que é imediatamente invocada
(function() {
    const peso = 70;
    const altura = 1.70;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();