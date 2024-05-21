/* 
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Diogo",
    num1: 7.0,
    num2: 10.0,
    average: 0,
  },
  {
    name: "Carlos",
    num1: 5.0,
    num2: 8.5,
    average: 0,
  },
  {
    name: "Matheus",
    num1: 3.5,
    num2: 5.0,
    average: 0,
  },
]

function calculateAverage(student) {
  average = ((student.num1 + student.num2) / 2).toFixed(2)
  return average
}

for (let student of students) {
  student.average = calculateAverage(student)

  if (student.average >= 7.0) {
    alert(`
      A média do aluno ${student.name} é: ${student.average}
      Parabéns, ${student.name}! Você foi aprovado no concurso!
    `)
  } else {
    alert(`
      A média do aluno ${student.name} é: ${student.average}
      Não foi dessa vez, ${student.name}! Tente novamente.
    `)
  }
}
