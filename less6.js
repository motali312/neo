//1
let num = 11
while (num <= 33) console.log(num++);

for (let i = 11; i <=33; i++) {
    console.log(i)
}

//2
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0)
    console.log(i)
}

//3
let numb = 0
for (let i = 1; i <= 100; i++) {
    numb += i
}
console.log(numb)

//5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ''
for (let i = 0; i < arr.length; i++) {
str += '-' + arr[i];
}
console.log(str + '-')

//6
const group1021 = [
    { name: 'Bakyt', age: 17, job: 'Student' },
    { name: 'Erjan', age: 21, job: 'Student' },
    { name: 'Gulzada', age: 16, job: 'Student' },
    { name: 'Aizada', age: 20, job: 'Student' },
    { name: 'Ibragim', age: 13, job: 'Student' },
    { name: 'Bektur', age: 19, job: 'Student' },
    { name: 'Shermamat', age: 25, job: 'Student' },
  ]
  
  for (let i = 0; i < group1021.length; i++) {
    if (group1021[i].age >= 18) {
      console.log(`${group1021[i].name} совершеннолетний`) 
      }
    }

//4
let num1 = 1

for (let i = 1; i <= 10; i++) {
num1 = num1 * i
console.log(num1)
}
console.log(num1)