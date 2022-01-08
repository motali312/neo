// // // // const a = 'hello Hello'
// // // // const b = [
// // // //     1, 2, 3, 4, 5
// // // // ]
// // // // // // console.log(a.indexOf(''))
// // // // // console.log(b[3])
// // // // // console.log(a[0])

// // // // let text = 'Hello World'
// // // // console.log(text.toLowerCase())
// // // // console.log(text.toUpperCase())
// // // // console.log(text.length)

const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]
console.log(arr)
arr.push(9)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(-1, 0)
console.log(arr)
arr.shift()
console.log(arr)

// // const arr = [
// //     1, 2, 3, 4, 'a', 'bc', false, null, 'asd'
// // ]

// // console.log(arr.includes('bc'))

// const arr2 = [1, 2, 3]
// const arr3 = ['a', 'b', 'c']

// console.log(arr2, typeof(arr2))
// console.log(arr3, typeof(arr3))
const arr2 =[1, 2, 3]
const obj = {
    key: 'value',
    arr: arr2,
    a: 10,
    b: 'text',
    c: null,
    d: true
}
console.log(obj)
console.log(obj['value'])
console.log(obj.c)

