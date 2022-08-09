"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 29;
// Dizendo explicitamente o que esse objeto tem
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
// Enums são úteis ao definir propriedades ou valores que podem ser apenas um certo número de valores possíveis.
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadorDeFultebol"] = 3] = "JogadorDeFultebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'Programação']
};
const monica = {
    nome: 'Monica',
    idade: 28,
    materias: ['Matemática discreta', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
