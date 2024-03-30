// const { produce_b_given_a } = require('./arrays_1.js');
const { pattern_match } = require('./strings_1.js')

//--- arrays_1
// let a = [1, 2, 4]
// let res = produce_b_given_a(a);
// console.log(res)

//--- strings_1
let res = pattern_match('010', 'abad')
console.log(`main res ${res}`)
