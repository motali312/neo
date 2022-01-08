let a = [1, 2, 3, 4, 5]

function f1(a) {
    b = []
    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i])
    }
    return b
}
console.log(f1(a))

const word = 'neolabs is familly'
const letters = word.split('  ')
console.log(letters)

