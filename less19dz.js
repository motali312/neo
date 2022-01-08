const users = [
    {name: 'kek4', age: 22, login: 'bek1', pass: '1239'},
    {name: 'keks3', age: 27, login: 'bek22211212', pass: '1237'},
    {name: 'kek2', age: 29, login: 'bek3', pass: '1236'},
    {name: 'keks1', age: 14, login: 'bek4gasdeq', pass: '1234'},
]
//1
const usersInfo = users.map(item => {
    
    return {
        name: users.name,
        age: users.age,
        login: users.pass,
    }
    
})
console.log(usersInfo)
// 2
const usersAge = users.filter(pers => pers.age >= 18)
console.log(usersAge)

const longLogins = users.filter(longLogin => longLogin.login.length > 8)
console.log(longLogins)
// 3
const user1 = users.filter(word1 => word1.name.includes('s'))
console.log(user1)