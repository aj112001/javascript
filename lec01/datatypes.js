// primitive data type
// call by value
// 7 types :- STRING , NUMBER , BOOLEAN , NULL , UNDEFINED , SYMBOL , BIGINT

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id==anotherid)

// REFERENCED TYPE & NON PRIMITIVE TYPE
// directly allocate the reference 
// ARRAY , OBJECTS , FUNCTIONS

const cars = ["Tiago", "i20" ,"baleno"]

// Objects
   let myObj ={
        name : "ashish",
        age : 22
}

// console.log(myObj.name) 

// function

const myFunction = function(){
       console.log(" hello world " );
}

console.log(typeof cars)