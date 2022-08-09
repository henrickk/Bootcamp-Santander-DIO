// Any é um tipo que pode receber qualquer tipo // Má prática.
let valorAny: any
valorAny = 3
valorAny = 'Ola'
valorAny = true

// Por que isso pode dar errado:
let valorString: string = 'teste'
valorString = valorAny
let valorString2: string = 'testando'
valorString2 = valorAny

function somarStrings(string1: string, string2: string) {
  console.log(string1 + string2)
}
 
somarStrings(valorString, valorString2)
somarStrings('olá', ', como vai?')