function returnEvenValues(array) {
  let eventNums = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      eventNums.push(array[i])
    } else {
      console.log(`${array[i]} não é par!`)
    }
  }
  console.log('os números pares são: ', eventNums)
}

let array = [1, 2, 3, 4, 5, 7, 8]

returnEvenValues(array)
