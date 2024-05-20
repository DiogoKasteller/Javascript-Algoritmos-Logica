/* Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão */

let num1 = prompt("Digite o primeiro número:")
let num2 = prompt("Digite o segundo número:")

let sum = Number(num1) + Number(num2)
let subtraction = num1 - num2
let multiplication = num1 * num2
let division = num1 / num2
let remainder = num1 % num2

alert(`
  Números: ${num1} e  ${num2}

  A Soma é: ${sum}
  A Subtração é: ${subtraction}
  A Multiplicação é: ${multiplication}
  A Divisão é: ${division}
  O Resto é: ${remainder}
`)
