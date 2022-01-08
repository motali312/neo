// function palindrom (str) {
//     str = str.toLowerCase()
//     return str==str.split('').reverse().join('')
// }
// console.log(palindrom('zakaz'))

// let = arr[1,2,3,4]; 

// switch(true) {
//     case (age < 18): console.log('NotAdult')
//     break
//     case (age >= 18): console.log('Adult')
//     break
// }



// const a3 = [2, "hello", 3, "hi", 4, "Mazai"];
// const a3_res = a3.filter(function(elem) {
//   return typeof elem === "number";
// });
// console.log(a3_res);

// const arr = [ 
//     {name: 'Adi', age: 25},
//     {name: 'Adi', age: 25},
//     {name: 'Adi', age: 25},
//     {name: 'Adi', age: 255}
// ]

// const arr2 = arr.reduce((acc, name) => {
//     acc += name.age
//     return acc
// }, 0)
// console.log(arr2)

// const age = 17
// if (age >= 18) {
//     console.log('Adult')
// } else {
//     console.log('notADult')
// }

// for (let i = 0; i <= 80; i++) {
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }

// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }


// const max = new Person('Max')
// console.log(max)

let isPalindrome = function(s) {
    let pointerOne = 0
    let pointerTwo = s.length -1
    
    while (pointerOne < pointerTwo) {
        while (!isValidCharacter(s.charAt(pointerOne))) {
            pointerOne++
        }
        while (!isValidCharacter(s.charAt(pointerTwo))) {
            pointerTwo++
        }
        if (s.charAt(pointerOne).toLowerCase() !==
        s.charAt(pointerTwo).toLowerCase()) {
            return false
        }
        pointerOne++
        pointerTwo--
    }
    return true
}
let isValidCharacter = function(char) {
    let validChars = 'asdasdasdsad'

    return validChars.indexOf(char.toLowerCase()) >-1
}