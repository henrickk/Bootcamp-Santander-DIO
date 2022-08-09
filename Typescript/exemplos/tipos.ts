// Para simplificar isso => somaValores(input1: number | string, input2: number | string)
type input = number | string

function somaValores(input1: input, input2: input) {
  if (typeof input1 === 'string' || typeof input2 === 'string') {
    return input1.toString() + input2.toString()
  } else {
    return input1 + input2
  }
}

console.log(somaValores(1, 5))
console.log(somaValores('Ola', ', tudo bem'))
console.log(somaValores('1', 5))
