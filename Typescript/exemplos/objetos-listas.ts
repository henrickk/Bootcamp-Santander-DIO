const pessoa = {
  nome: 'Mariana',
  idade: 28,
  profissao: 'desenvolvedora'
}

pessoa.idade = 29

// Dizendo explicitamente o que esse objeto tem
const andre: { nome: string; idade: number; profissao: string } = {
  nome: 'Andre',
  idade: 25,
  profissao: 'pintor'
}

const paula: { nome: string; idade: number; profissao: string } = {
  nome: 'Paula',
  idade: 25,
  profissao: 'Desenvolvedora'
}

// Enums são úteis ao definir propriedades ou valores que podem ser apenas um certo número de valores possíveis.
enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  JogadorDeFultebol
}

// criação de interface para ser mais prático doque declarar em todos os objetos o que tem neles 
interface Pessoa {
  nome: string
  idade: number
  profissao?: Profissao // '?' para que não seja obrigatório declarar profissão
}

interface Estudante extends Pessoa {
  materias: string[]
}

const vanessa: Pessoa = {
  nome: 'Vanessa',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
  nome: 'Maria',
  idade: 23,
  profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
  nome: 'jessica',
  idade: 28,
  profissao: Profissao.Desenvolvedora,
  materias: ['Matemática discreta', 'Programação']
}

const monica: Estudante = {
  nome: 'Monica',
  idade: 28,
  materias: ['Matemática discreta', 'Programação']
}

function listar(lista: string[]) {
  for(const item of lista) {
    console.log('- ', item)
  }
}

listar(monica.materias)