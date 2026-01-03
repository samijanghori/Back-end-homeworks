
// the conditions 
/*
Exercise
In this exercise, 
you must construct an if inside the checkNumber function statement that checks if the number myNumber is equal to 42. 
If that is the case, the function must print out using console.log the word correct. 
If myNumber is not equal to 42, the function must print out using console.log the word incorrect. 
You can name the argument passed to a function by supplying the name inside the parentheses. 
For example, function myFunction(myArgument).
*/
function checkNumber(myNumber)
{
    // TODO: write your code here
    // expected OUTPUT   incorrect
                        //incorrect
                        //correct
 if (myNumber===42)
    {
        console.log("correct");
    }
    else
    {
        console.log("incorrect");
    }
}

checkNumber(3);
checkNumber(7);
checkNumber(42);


//===================== next Exercise from loops ================
// ================= Exercise ======================
//In this exercise, you must write a for loop that iterates on the myArray variable and prints out all of its members.
// expected out put : 
//          What is the meaning of life?
//          The meaning of life is
//          42
var myArray = ["What is the meaning of life?", "The meaning of life is", 42];

// TODO: modify this code
for (var i = 0 ; i<myArray.length ; i++)
{
    console.log(myArray[i]);
}



//===================== next Exercise ================
// ================= Objects in js ======================
// Exercise
//You must define an object called person with the following members:
//The member firstName of the person is "Jack"//
//The member lastName of the person is "Smith"
//The member age of the person is 19
//The member employed of the person is true
var person = {
    firstName : "Jack",
    lastName : "Smith",
    age : 19,
    employed : true
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.employed)







//===================== next Exercise ================
// ================= Functions in js ======================
// Exercise
// Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
var multiplyFive = function(number)
{
    return number * 5;
}
console.log(multiplyFive(2));



//=========================next Exercise ==============
// ======================== Pop-up-boxes in js =============
// Exercise
// Make a variable test set it equal to a prompt box, and type "Hi!" in it (without the quotes) when it pops up. Note: your pop-up blocker must not be enabled.
var test = prompt("Type Hi!");
console.log(test);