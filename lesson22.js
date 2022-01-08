// class Rectangle {
//     constructor(width = 0, height = 0) {
//         this.width = width
//         this.height = height
//     }
//     findP = function() {
//         const P = this.width * this.height
//         console.log(P)
//     }
// }

// const rect1 = new Rectangle(10, 30)
// console.log(rect1)
// rect1.findP()

// const rect2 = new Rectangle(20, 60)
// console.log(rect2)
// rect2.findP()

class User {
    #password = null
    constructor(username = '', age = 0, job = '', login = '', password = '') {
        this.username = username
        this.age = age
        this.job = job
        this.login = login
        this.#password = password
    }
    get password() {
        return this.#password
    }
    set password(newPassword) {
        this.#password = newPassword
    }
}

const user1 = new User('Sher', 25, 'dev', 'kek', '2313131')
console.log(user1)
console.log(user1.password)
user1.password = 'NewPass'
console.log(user1.password)
console.log(user1)