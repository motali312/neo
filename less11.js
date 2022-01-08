

for (let i = 0; i <= 80; i += 5) { //14
 
    console.log(i)
}

const arr = [ 'Hello', 12, true, null, 23] //15
for (let i = 0; i < arr.length;i++) {
    if (typeof arr[i] == 'number'){
        console.log(arr[i])
    }
}

const group1021 = [ //16
    { name: 'kek', age: 20},
    { name: 'bek', age: 30},
  ]
  
  let total = 0
  for (let i = 0; i < group1021.length; i++) {
    
    total +=  group1021[i].age
  }
  console.log(total / group1021.length)


const group10221 = {
    number: 'js-10/21',
    stundents: ['kek', 'ya']
}



//20
const example = 'hello123world92'
function test(str) {
    let total = 0
    for (let i = 0; i < str.length; i++){
        if (!isNaN ( +str[i])){
            total += str [i]
        }
    }
    return total
}
console.log()