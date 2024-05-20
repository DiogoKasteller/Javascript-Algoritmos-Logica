/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nome = prompt("Nome do Aluno:")
let nota1 = prompt("Nota 1:")
let nota2 = prompt("Nota 2:")
let nota3 = prompt("Nota 3:")

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
media = media.toFixed(2)

if (media >= 6) {
  alert(`
    Aluno: ${nome}
    Média: ${media}

    Parabéns! Você foi aprovado!
  `)
} else {
  alert(`
    Aluno: ${nome}
    Média: ${media}

    Você não foi aprovado. Dê o seu melhor na prova de recuperação.
  `)
}
