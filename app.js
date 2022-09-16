const prompt = require('prompt-sync')();
console.log("Hej hej");
let answer = prompt("How's it going? ");
console.log(`You think its going: ${answer}`);
console.log("Testing testing");


let fizzBuzz = function(num)
{
    if(num % 3 == 0 && num % 5 == 0)
    {
        return "FizzBuzz";
    }
    else if(num % 3 == 0)
    {
        return "Fizz";
    }
    else if(num % 5 == 0)
    {
        return "Buzz";
    }
    else
    {
        return num;
    }
}