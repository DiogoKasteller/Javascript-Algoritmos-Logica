/* 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
 */

let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

const sum = num1 + num2
const subtraction = num1 - num2
const multiplication = num1 * num2
const division = num1 / num2
const remainder = num1 % num2

let type = sum % 2 == 0 ? "par" : "ímpar"
let equal = num1 === num2 ? "iguais" : "diferentes"

alert(`
  Números: ${num1} e  ${num2}

  A Soma é: ${sum}
  A Subtração é: ${subtraction}
  A Multiplicação é: ${multiplication}
  A Divisão é: ${division}
  O Resto é: ${remainder}

  A soma dos dois números é ${type}
  Os dois números inseridos são ${equal}
`)
