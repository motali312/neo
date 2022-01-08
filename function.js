// function max(a,b) {
//     if (a > b) {
//         return a
//     }else {
//         return b
//     }
// }
// console.log(max(4, 25))



// function rgb(r, g, b) {
//     return `rgb(${r},${g},${b})`
    
// }
// console.log(rgb(23,100,134))


const arr1 = [3, 4, 5, 6, 10, 12]

// const res4 = arr1.map(a => a ** 2)
// console.log(res4)

const res6 = arr1.filter((item, index) => (index % 2 === 0))
console.log(res6)