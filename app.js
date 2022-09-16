const prompt = require('prompt-sync')();

console.log("Hej hej, hej på dig!");

let answer = prompt("How's it going? ");
console.log("You said: " + answer);
console.log("Hej hej");
answer = prompt("How's it going? ");
console.log(`You think its going: ${answer}`);
console.log("Testing testing");


let fizzBuzz = function(num)
{ for (let i = 1; i <= num; i++)
    { if (i % 3 === 0 && i % 5 === 0)
        { console.log("FizzBuzz"); }
      else if (i % 3 === 0)
        { console.log("Fizz"); }
      else if (i % 5 === 0)
        { console.log("Buzz"); }
      else
        { console.log(i); }
    }
}

console.log(fizzBuz(100));