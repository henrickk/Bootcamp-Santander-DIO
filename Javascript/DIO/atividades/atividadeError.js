function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

    if (typeof arr !== 'object')
      throw new TypeError('Array precisa ser do tipo object')

    if (typeof num !== 'number')
      throw new TypeError('Num precisa ser do tipo number')

    if (arr.length !== num) throw new RangeError('Tamanho inválido')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Esse erro é um ReferenceError!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Esse erro é um TypeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Esse erro é um RengeError!')
      console.log(e.message)
    } else {
      console.log('Ocorreu um erro não esperado: ' + e)
    }
  }
}

console.log(validaArray())
/* Esse erro é um ReferenceError!
Envie os parâmetros
undefined */

console.log(validaArray(5, 5))
/* Esse erro é um TypeError!
Array precisa ser do tipo object
undefined */

console.log(validaArray([], 'a'))
/* Esse erro é um TypeError!
Num precisa ser do tipo number
undefined */

console.log(validaArray([], 5))
/* Esse erro é um RengeError!
Tamanho inválido
undefined */

console.log(validaArray([1, 2, 3, 4, 5], 5))
// [ 1, 2, 3, 4, 5 ]