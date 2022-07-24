function comparaNumeros(num1, num2) {
  if (!num1 || !num2) return `Defina dois números!`

  const primeiraFrase = criaPrimeiraFrase(num1, num2)
  const segundaFrase = criarSegundaFrase(num1, num2)

  return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
  let saoIguais = ''

  if (num1 != num2) {
    saoIguais = 'não'
  }

  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2) {
  const soma = num1 + num2

  let resultado10 = 'menor'
  let resultado20 = 'menor'

  const compara10 = soma > 10
  const compara20 = soma > 20

  if (compara10) {
    resultado10 = 'maior'
  }

  if (compara20) {
    resultado20 = 'maior'
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`
}

console.log(comparaNumeros(10, 10))

/* MEU JEITO DE FAZER

function numeros(num1, num2) {
  if(num1 == num2) {
    console.log(`Os números ${num1} e ${num2} são iguais`)
  }else {
    console.log(`Os números não são iguais`)
  }

  soma = num1 + num2 
  console.log(`Sua soma é ${soma}`)

  if(soma > 10 && soma < 20){
    console.log(`O valor da soma é maior que 10 e menor que 20`)
  }else if(soma < 10){
    console.log(`O valor é menor que 10`)
  }
}

numeros(2, 3)
*/

/*
# Sintaxe e Operadores

Este repositório contém a atividade prática do Curso "Sintaxe e Operadores", que faz parte do Basecamp de Javascript que minstrei pela [Digital Innovation One](https://digitalinnovation.one/).

## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```
*/
