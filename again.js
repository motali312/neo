// const obj = {
//     a: 10,
//     b: true
// }
// console.log(obj)

// const copyOfA = obj
// // copyOfA.a = 20
// copyOfA.c = 'abc'
// copyOfA.dweq = [12]
// console.log(obj)

// const a = () => {
//     console.log('Hey')
// }

// a() 
const myCity = {
    city: 'New',
    info: { 
        popular: true,
        country: 'Usa'
    }
}
// console.log(myCity.city)
// myCity.city = 'Bishkek'
// console.log(myCity.city)
console.log(myCity.info.popular)
delete myCity.info['popular']
console.log(myCity)