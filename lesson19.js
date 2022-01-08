const numbers = [1, 'eqw', 2, 3, '10$', 4, 5, ]

const result = numbers.reduce((acc, item) => acc + (+item || 0))
console.log(result)

// const users = [
//     {name: 'kek4', age: 22, login: 'bek1', pass: '1239'},
//     {name: 'kek3', age: 27, login: 'bek2', pass: '1237'},
//     {name: 'kek2', age: 29, login: 'bek3', pass: '1236'},
//     {name: 'kek1', age: 14, login: 'bek4', pass: '1234'},
// ]
// const usersTotalAge = users.reduce((acc, item) => acc + item.age, 0)
// console.log(usersTotalAge)

// const users = [
//     {name: 'kek4', age: 22, login: 'bek1', pass: '1239'},
//     {name: 'keks3', age: 27, login: 'bek22211212', pass: '1237'},
//     {name: 'kek2', age: 29, login: 'bek3', pass: '1236'},
//     {name: 'keks1', age: 14, login: 'bek4gasdeq', pass: '1234'},
// ]
// const usersInfo = users.map(item => {
//     delete item.pass
//     return item
// })
// console.log(usersInfo)

// const usersAge = users.filter(pers => pers.age >= 18)
// console.log(usersAge)

// const longLogins = users.filter(word => word.login.length > 8)
// console.log(longLogins)

// const user1 = users.filter(word1 => word1.name.includes('s'))
// console.log(user1)