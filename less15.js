// const num = [1, 2, 3, 4, 5]
// console.log(num);
// function ownPop(array) {
//     const lastItem = array[array.length - 1]
//     array.length = array.length -1;
//     return lastItem;
// }
// const popResult = ownPop(num)
// console.log(num)

function fun(rev) {
    let x = num;
    for (let i = rev.length-1; i >= 0; i--) {
        x.push(rev[i])
    }
    return x
}

const numbers1 = [1, 2, 3, 4, 5]

const numbers2 = numbers1.reverse()
console.log(numbers2)



