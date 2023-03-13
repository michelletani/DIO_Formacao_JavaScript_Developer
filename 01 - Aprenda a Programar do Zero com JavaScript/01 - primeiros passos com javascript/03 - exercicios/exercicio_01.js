/*
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 = nota 2 = nota 3) / 3;

Classificação:
- Média menor que 5: Reprovado;
- Média entre 5 e 7: Recuperação;
- Média acima de 7: Aprovado.
*/

const nota1 = 8;
const nota2 = 5;
const nota3 = 3;

const notaMedia = (nota1 + nota2 + nota3) / 3;

if (notaMedia < 5) {
    console.log("Reprovado");
} else if (notaMedia <= 7) {
    confirm.log("Recuperação");
} else {
    console.log("Aprovado");
}

console.log(notaMedia.toFixed(2));