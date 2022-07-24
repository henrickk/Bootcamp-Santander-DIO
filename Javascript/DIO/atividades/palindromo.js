//Solução 1
function verifcaPalindromo(string) {
  if (!string) return 'string inexistente'

  return string.split('').reverse().join('') === string
}

//console.log(verifcaPalindromo('ama'))

//Solução 2
// Verificar se o primeiro carácter é o mesmo que está no final
function verifcaPalindromo2(string) {
  if (!string) return `string inexistente`

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }

  return true
}

console.log(verifcaPalindromo2('omo'))
