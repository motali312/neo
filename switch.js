
let i = 0
while (i < 20) {
    
switch(true) {
    case (i % 3 === 0  && i % 5 === 0):
        console.log('FizzBuzz')
    break
    case (i % 5 === 0):
        console.log('Buzz')
    break
    case (i % 3 === 0):
        console.log('Fizz')
    break
    default:
        console.log(i)
  }
  i++
}
console.log(i)