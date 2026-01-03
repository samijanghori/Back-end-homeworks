
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