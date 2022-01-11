const input = 'hello123world92'
function findNumbers(str){
    str = str.split('')
    return str
    .filter(el => Number(el))
    .reduce((a,b)=>+a + +b)
}
console.log(findNumbers(input))