// console.log(
//     // Входной массив
//     [1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0) )

// let sum = 1
// for (let i = 0;  i < 5; i++) {
//     let j = 5
//     sum += i * j
//     console.log(sum)
// }

// for (let i = 0; i <= 80; i=i+5) {
//     console.log(i)
// }

// for (let i = 1999; i <= 2090; i=i+5) 
// console.log(i)

// const arr = []

// for (let i = 0; i <= 5; i++) {
//     if (i === 0 || i ===5) {
//         arr[i] = 1
//     } else {
//         arr[i] = 0
//     }
// }  

// console.log(arr)

// const arr2 = []
// for (let i = 0; i < 0; i++) {
//     if (i+1 % 2 == 0) {
        // arr2[i] = 1
//     } else {
//         arr2[i] = 0
//     }
//     }
// console.log(arr2)

// let arr = [2, 4, 5, 7, 10]

// for (let item of arr) {
//     console.log(item * 2)
// }



// let arr = [1, 2, 3, 4, 20, 25, 30]
// let count = 0
// for (let i = 0; i<arr.length; i++) {
//     if (arr[i] %2 ==0) {
//         count++;
//     }
// }
// console.log(count)

// function fibo(count) {
//     let fib = []
//     for (let i = 0; i < count; i++){
//         if (i==0) fib[i] = 1;
//         else if (i==1) fib[i] = 2
//         else fib[i] = fib [i-2]+ fib[i-1];
//     }
//     return fib;
// }
// let f = fibo(10)
// console.log(f)

// function factorial(n) {
//     let fact = 1
//     if (n==0) return fact
//     for (let i = 1; i<=n; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// let a = factorial(12)
// console.log(a)
// let twoSum = function(nums, target) {
    

// let map = new Map()
// for (let i = 0; i <nums.length; i++) {
//     let num1 = nums [i]
//     let num2 = target - num1
//     if (map.has(num2)) {
//         return [i, map.get(num2)]
//     }
//     map.set(num1, i)
// }
// }

// console.log(twoSum(1, 23))
// let age = 18

// class group {
//     constructor (nameGroup = '', listStudent = []) {
//         this.nameGroup = nameGroup
//         this.listStudent = listStudent
//     }
//     info = () => console.log(`В группе ${this.nameGroup} учится ${this.listStudent.length} студента`)

// }

// const group1 = new group('2021', ['Kek', 'Bek', 'Chek', 'shrek',' ke4'])
// console.log(group1)
// group1.info()

// const example = 'hello123world92'
// function test(str) {
//     let total = 0
//     for (let i = 0; i < str.length; i++){
//         if (!isNaN ( +str[i])){
//             total += str [i]
//         }
//     }
//     return total
// }
// console.log

console.log(typeof null + NaN + ' ')