const pessoa = {
  nome: "Henrick",
}

const animal = {
  nome: "Dara",
}

function getSomething() {
  console.log(this.nome)
}

getSomething.call(animal)