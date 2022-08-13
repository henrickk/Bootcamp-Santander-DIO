"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Profissao.Atriz
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
let pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
};
let pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
};
