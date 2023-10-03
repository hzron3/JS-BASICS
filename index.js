//Varables
//1. Numbers
//let keyword
let age = 30;
let amount =32.67;

console.log(`age = ${age}`);
console.log(`amount = ${amount}`);

//2. boolean
let isMarried = false;
let isEducated= true;

console.log(`isMarried = ${isMarried}`);
console.log(`isEducated = ${isEducated}`);

//3. Object
let person = {name: 'John',age:30, height:45};
console.log(`person name = ${person.name}`);

//Array
let numbers = [1,2,3,4,5];
console.log(`numbers = ${numbers}`);

//function
let a = 3;
let b = 36
function add(a, b){
    console.log(`sum = ${a} + ${b}`);
}
//4. Null
let number = null;
console.log(`number = ${number}`);

//5. Undefined
let f;
console.log(`f = ${f}`);

//6. String
let middleName = "Collins";
console.log(`name = ${middleName} ${middleName.length}`);

//7. Symbol

//Operators
let num1 = 45;
let num2 = 100;
//1. Addition

console.log(`sum ${num1 + num2}`);

//2. Substraction

console.log(`sum ${num1 - num2}`);

//3. Multiplication 

console.log(`sum ${num1 * num2}`);

//4. Division

console.log(`sum ${num1 / num2}`);

//5. Modulus division
console.log(`sum ${num1 % num2}`);

//Conditional Statements
let volume = 30;

if(volume <= 20){
    console.log(`Volume is less than 20`);
}
else if(volume == 20){
    console.log(`Volume is equal to 20`)
}
else{
    console.log(`Volume is greater 20`);
}

//Loops
//Comparison Operators
//Switch
let c = 4;
switch(c){
    case 0:
        console.log(`c is equal to zero`);
        break;
    case 3:
        console.log(`c is equal to 3`);
        break;
    case 4:
        console.log(`c is equal to 4`);
        break;
    default:
        console.log(`Thank tou for being part of us`)
        break;
}

//ECS6-Javascript
//Var Keywrd => scoped to the function
//Example
function sayHello(){
    for(var i = 0; i <5; i++){
        console.log(i);
    }
    console.log(`i =${i}`);
}
sayHello();

//let Keywrd => block defined
//Example
function sayHello(){
    for(let i = 0; i <5; i++){
        console.log(i);
    }
    console.log(`i =${i}`);
}
sayHello();

//const Keyword => block defined
//Example
function sayHello(){
    for(const i = 0; i <5; i++){
        console.log(i);
    }
    console.log(`i =${i}`);
}
sayHello();

//This Keyword
const student = {
    name: "Aron",
    age: 21,
    gender:"Male"
};
console.log(this);

//Arrow Functions

//1. Old_Way
const square = function(number){
    return number*number;
}
square(5);

const square2 = number=>number*number;

square2(5);

//Filtering jobs sample using Arroe functions:
const jobs = [
    {id: 1, isActive:true},
    {id: 2, isActive:true},
    {id: 3, isActive:false}
];
//const activeJobs = jobs.filter(function (job){ return jobs.isActive;});
//console.log(activeJobs)
const activeJobs = jobs.filter( job=> jobs.isActive);

//Spread Operator
const array1 = [4, 7, 8, 9];
const array2 = [2, 19, 12, 11];
const array3 = [...array1, 'a', ...array2, 'b'];
console.log(array3);

//Arrays, and their functions!
//1. concat()
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
const arr3 = ['e', 'f'];
const arr4 = arr1.concat(arr2);
console.log(`array4 ${arr4}`); 

//2. Filter
function isBiggerNumber(value){
    return value > 5;
}
const integers = [1, 2, 3, 4, 5, 6, 7];
// const filtered = integers.filter(isBiggerNumber);
const filtered = integers.filter((x) => x % 2 == 0);
console.log(filtered);

//3.Map
const integer = [1, 2, 3, 4, 5, 6, 7];
const array1a = integer.map((a)=> a * 2);
console.log(`array1a ${array1a}`);

//4. Reduce
const int = [1, 2, 3, 4, 5, 6, 7];
const initialValue = 0;
 const reduced = int.reduce ((accumulator, currentValue) => accumulator + currentValue, initialValue);
 console.log(`reduced ${reduced}`);

//5. For Each
const arr5 = [1, 6, 8, 28, 67];
const each = arr5.forEach(element => {
    console.log(`Element ${element}`);
});

//Spread Operator
const numb1 = [3, 4, 5, 6, 7];
const numb2 = [10, 7, 8];
const numb3 = [...numb1, ...numb2, 5];
console.log(`numb3: ${numb3}`);