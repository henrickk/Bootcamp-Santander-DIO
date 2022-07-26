// Bind clona a estrutura da função monde é chamada e aplicada o valor do objeto passado como parâmetro

const retornaNomes = function () {
  return this.nome
}

let bruno = retornaNomes.bind({ nome: 'Bruno' })

console.log(bruno())
