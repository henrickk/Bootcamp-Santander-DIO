function calculeIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30
}

const pessoa2 = {
  nome: 'Carla',
  idade: 26
}

const animal = {
  nome: 'FIona',
  idade: 5,
  raca: 'pug'
}

console.log(calculeIdade.apply(animal, [7]))
