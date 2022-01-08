// function toUpperCase(text) {
//     return text.toUpperCase()
// }
// console.log(toUpperCase('Hello neobis'))

const neolabs = {
    'js-10/21' : ['Abdu', 'gul', 'beg', 'bek'],
    'js-8/21' : ['Islam', 'Arr', 'aibek'],
}
 function addStudent (group, name){
     const groups = Object.keys(neolabs)
    //  groups.includes (group) ? neolabs[group].push(name):'takoi gruppi net'
    if (groups.includes(group)) {
        neolabs[group].push(name)
    } else {
        console.log('Takoi gruppi net')
    }
 }
//  console.log(neolabs)
 addStudent('js-8/21', 'asd')
 addStudent('js-10/21', 'baxa')
 addStudent('asdw', 'asdwq')
 console.log(neolabs)

// function test1() {
//     console.log('test1')
// }

// const test2 = function() {
//     console.log('test2')
// }

// test1()
// test2()

// function test3() {
//     console.log('test3')
// }
// test3();

// (function(){
//     console.log('test4')
// })()

