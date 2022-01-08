const numbers = [1, 2, 3, 4, 5]
const letters = ['a', 'b', 'c', 'd']
const arr = [numbers, letters]
// console.log(arr)
// console.log(arr[1][2])

// const arr2 = []
// function pushItems(arr = [], items = []) {
// for (let item of items) {
//     arr.push(item)
//     }
// }
// for (let letter of letters) {
//     arr.push(letter)
// }
// pushItems(arr2, numbers)
// pushItems(arr2, letters)

// const arr1 = [numbers, letters]
// const arr3 = [...numbers, ...letters]
// arr3.push(...numbers)
// console.log(arr3)

// let a = 10
// let b = 20
// let c = a
// a = b
// b = c
// console.log(a, b)
// a += 10

// let numbers1 = [1, 2, 3, 4, 5]
// const numbers2 = numbers1
// console.log(numbers1, numbers2)
// numbers1.push(6, 7, 8)
// numbers2.push(9, 10)


// const person2 = JSON.parse(JSON.stringify(person1))
// console.log(person1)
// console.log(person2)

// function sum(a = 0, b = 0) {
    //     return Object.values(arguments)
    //     .filter(item => item == +item)
    //     .reduce((a, b ) =>+ a + + b)
    // }
    
    
function sum(...items) {
        if (items.length < 1) {
            return 0
        }
        return items.length < 1 ? 0 : items
        .filter(item => item == +item)
        .reduce((a, b ) =>+ a + + b)
    }
    console.log(sum())
    console.log(sum(1, 23, 44, 2, 34))


    const person1 = {
        name: 'Kek',
        age: 20,
        job: 'Student'
    }
    
const person2 = {
        hobby: 'Football',
        bd: '07-09',
        age: 21
    }

// const person3 = {...person1, ...person2}
// console.log(person3)
Object.assign(person1, person2)
console.log(person1)