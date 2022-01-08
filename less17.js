const numbers1 = ['asd', 2, 3, 4, 5]
numbers1.map((item) => {
    console.log(item)
})

// function log(item) {
//     console.log(item)
//     return item * 20
// }
// const numbers2 = numbers1.map(log)

// console.log(numbers1)
// console.log(numbers2)

const arr1 = [true, 1, 'hello', 192, false, null]

const arr2 = arr1.map((item, i) => {
    if (i != arr1.length ) {
        if (typeof item === 'number')
    
    return item
    }
    return item
})
console.log(arr2)

// const users = [
//     {name: 'Adilet', age: 20, job: 'Node.js dev'},
//     {name: 'Aktan', age: 22, job: 'Node.js dev'},
//     {name: 'De', age: 25, job: 'ux/ui des'},
//     {name: 'Chek', age: 21, job: 'manager'},
// ]

// const users1 = users.map(user => user)
// const userNames = users.map(user => user.name)
// const userAges = users.map(user=> user.age)
// const userJobs = users.map(user => user.job)
// console.log(users1)
// console.log(userAges)
// console.log(userJobs)

// const users = [
//     {name: 'Adilet', age: 20, job: 'Node.js dev'},
//     {name: 'Aktan', age: 22, job: 'Node.js dev'},
//     {name: 'De', age: 18, job: 'Frontend dev'},
//     {name: 'Chek', age: 21, job: 'manager'},
// ]

// const users1 = users.filter(user => user.age >= 18)
// const frontendDevs = users.filter(user => user.job == 'Frontend dev')
// console.log(users1)
// console.log('frontendDevs:', frontendDevs)

// const adilet1 = users.find(user => user.job == 'Frontend dev')
// console.log(adilet1)