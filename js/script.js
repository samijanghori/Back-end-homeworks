
// the conditions 
// /*
// Exercise
// In this exercise, 
// you must construct an if inside the checkNumber function statement that checks if the number myNumber is equal to 42. 
// If that is the case, the function must print out using console.log the word correct. 
// If myNumber is not equal to 42, the function must print out using console.log the word incorrect. 
// You can name the argument passed to a function by supplying the name inside the parentheses. 
// For example, function myFunction(myArgument).
// */
// function checkNumber(myNumber)
// {
//     // TODO: write your code here
//     // expected OUTPUT   incorrect
//                         //incorrect
//                         //correct
//  if (myNumber===42)
//     {
//         console.log("correct");
//     }
//     else
//     {
//         console.log("incorrect");
//     }
// }

// checkNumber(3);
// checkNumber(7);
// checkNumber(42);


// //===================== next Exercise from loops ================
// // ================= Exercise ======================
// //In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.
// // expected out put : 
// //          What is the meaning of life?
// //          The meaning of life is
// //          42
// var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// // TODO: modify this code
// for (var i = 0 ; i<myArray.length ; i++)
// {
//     console.log(myArray[i]);
// }



// //===================== next Exercise ================
// // ================= Objects in js ======================
// // Exercise
// //You must define an object called person with the following members:
// //The member firstName of the person is "Jack"//
// //The member lastName of the person is "Smith"
// //The member age of the person is 19
// //The member employed of the person is true
// var person = {
//     firstName : "Jack",
//     lastName : "Smith",
//     age : 19,
//     employed : true
// }
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.employed)







// //===================== next Exercise ================
// // ================= Functions in js ======================
// // Exercise
// // Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
// var multiplyFive = function(number)
// {
//     return number * 5;
// }
// console.log(multiplyFive(2));



// //=========================next Exercise ==============
// // ======================== Pop-up-boxes in js =============
// // Exercise
// // Make a variable test set it equal to a prompt box, and type "Hi!" in it (without the quotes) when it pops up. Note: your pop-up blocker must not be enabled.
// var test = prompt("Type Hi!");
// console.log(test);




// //=========================next Exercise ==============
// // ======================== Callback function in js =============
// //Exercise
// //Define a function called callback which receives an argument and prints it out.
// function useCallback(callback) {
//     callback(1);
//     callback(2);
//     callback(3);
// }

// function callback(sentence) {
//     // print out sentence
//     console.log(sentence);
// }

// // execute useCallback with the callback as the argument
// useCallback(callback);







// //=========================next Exercise ==============
// // ======================== Arrow function in js =============
// //Exercise
// // Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.
// let divideByTwo = (number) => {return number / 2};
// console.log(divideByTwo(4));




// //=======================next Exercise ================
// // About call back methods and promises....
// // Exercise
// // Answer the questionS?
// /* 1. Explain the call back method fully in js?
//  Answer : the call back method is to give a function as an argument
// to other function .
// 2. give an example of call back method in js
// */ 
// //Answer 
// function mycallback(){
//     console.log("i am call back");
// }
// function mainfunction(cb){
//     console.log("hello ");
//     cb();
// }
// mainfunction(callback);

// /*
// 3. what is Asynchronous programming in javaScript?
// Answer : method of programming which enables different parts of code to run at changing time, instead of immediately
// let's see how the problem is
// */
// // the problem that is used using promise
// function printMyName(){
//     setTimeout(() => {
//         return 'hi';
//     },2000)
//     return 'sammi';
// }
// function sayMyName(){
//     console.log(printMyName());
// }
// // // it will print out the sammi first and then after 2 seconds will return hi so we don't want this
// // // to solve it use promise , async and await
// // function sprintMyName(){
// //     return new Promise(function(resolve){
// //         setTimeout(() => {
// //         resolve('sami');
// //     },2000)
// //     });
// // }
// // async function ssayMyName(){
// //     console.log(await sprintMyName());
// // }
// // // now the sami will print after 2 seconds











// // //Exercise
// // //Write a function which receives a string, and returns a Promise.
// // //The promise should resolve with the uppercase version of the string, but should reject if the string is null.
// // function upperCaseAsync(s) {
// //     return new Promise((resolve, reject) => {
// //         if (s === null) {
// //             reject();
// //         } else {
// //             resolve(s.toUpperCase());
// //         }
// //     });
// // }

// // upperCaseAsync("steve").then(console.log);
// // upperCaseAsync(null).catch((x) => {
// //     console.log("No string received!");
// // });








// // //=======================Next Exercise =====================
// // //=================sleep function===========================
// // // an example of sleep function

// // //defining sleep method
// // function sleep(ms){
// //     return new Promise(resolve => setTimeout(resolve,ms));
// // }


// // //using sleep method
// // async function counting(){
// //     console.log("the couning begin");

// //     for( let i = 5; i > 0 ; i--){
// //         console.log(`${i}...`);
// //         await sleep(1000);
// //     }
// //     console.log('happy new year!');

// // }
// // counting();



// // //next Example from code to learn website
// // // Exercise
// // // Write an async function which waits 500 milliseconds and then returns the uppercase of a given string. Use the sleep function provided.
// // //-----------------first define sleep function
// // function sleep(ms){
// //     return new Promise((resolve) => setTimeout(resolve,ms) );
// // }
// // async function strtoupper(st){
// //     await sleep(500);
// //     return st.toUpperCase();
// // }
// // strtoupper("sami").then(console.log);



// // //==================================next Exercise ===============
// // //==============OOP js ===========================
// // //Exercise
// // //Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// // //The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
// // class Person{
   
// // constructor(personname , age){
// //     this.personname = personname;
// //     this.age = age;
// // }
// //      describe()
// //     {
// //         console.log(this.personname +", " + this.age +" " + "years old");
// //     }


// // }
// // var jack = new Person("Jack",25);
// // var jill = new Person("Jill",24);
// // jack.describe();
// // jill.describe();












// //=========================Next Exercise==================
// //==================== function context ==================
// // apply , bind , call , this keyword


// const myobject = {x:10};

// function mySecondFunction(param1 , param2){
//     console.log(this.x + param1 + param2);
// }
// mySecondFunction.call(myobject,2,3);


// // here is a difference between call and apply
// mySecondFunction.apply(myobject,[2,3]);


// // here is difference between call - apply vs bind
// let sumnum = mySecondFunction.bind(myobject);
// sumnum(2,3);



// //Exercise
// //Create bound copies of printFullName and printDetails to person called boundPrintFullName and boundPrintDetails.

// var person = {
//     firstName : "John",
//     lastName : "Smith",
//     age : 23
// };

// function printFullName()
// {
//     console.log(this.firstName + " " + this.lastName);
// }

// function printDetails()
// {
//     console.log(this.firstName + " is " + this.age + " years old");
// }

// // TODO: create bound copies of printFullName and printDetails.
// var boundPrintFullName = printFullName.bind(person);
// var boundPrintDetails = printDetails.bind(person);

// boundPrintFullName();
// boundPrintDetails();



















// //======================== inheritence in javascript===================
// //=====================================================================
// //2 types -> 1. prototype based             2. class based
// //1. prototype based example exercise is below:

// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.sayHello = function(){
//     console.log("Hello I am " + this.name);
// }
// function Dog(name , breed){
//     //به ارث بردن پراپرتی 
// Animal.call(this,name);
// this.breed = breed;
// }

// // inhereting the methods
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// const dog1 = new Dog("Max", "Labrador");
// dog1.sayHello;





// //inheritence using class ES6
// class Animal{
//     constructor(name){
//         this.name = name;

//     }
//     speak(){
//         console.log("hello I am  " + this.name);
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name);
//         this.breed = breed;
//     }
//     break(){
//         console.log("woof!");
//     }
// }
// const dog = new Dog("buddy" , "husky");
// dog.speak();
// dog.break();




//====================== function paramaters small game============
//user see 3 clicks on the web page when click on each of them will win a different prize
function showcurtain(prize)
{
    alert("You won :" + prize);
}

 



//============================ Destructuring in javascript
//===========================================================
// Basic example
const student = {
    name : "ali",
    lastname : "mohammadi",
    age : 14,
};
let {name,lastname} = student;
console.log(name,lastname);