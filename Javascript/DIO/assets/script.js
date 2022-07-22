var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0


function increment() { // Função parar o número aumentar
  currentNumber = currentNumber + 1 
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() { // Função parar o número diminuir
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}