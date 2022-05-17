var a 
//if any value is undefined it will give you false

console.log(a<5) 
console.log(undefined<"shariq")

console.log(7>6n) //BigInt

console.log('5'<6)//true first try to convert into a number

console.log(5<'Shariq')//if one is number and another can't be converted into a number (Nan ) hemce false
console.log('123'<'124z')//true because there is to string and one can not be both cannot be converted into a number then unicode value compared
console.log(123<'124p')//false cause one is a number and other can't be converted to a number then num<NaN line Number 11
console.log('Bignint',5n == 5)