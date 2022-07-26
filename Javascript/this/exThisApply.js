// É possível passar parâmetros para essa função dentro de um array.

const pessoa = {
  nome: "Ana",
}

const animal = {
  nome: "Amorinha",
}

function getSomething() {
  console.log(this.nome)
}

getSomething.apply(pessoa)