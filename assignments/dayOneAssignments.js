// Example: minMaxAvg([1,-2,9,4]) returns "The minimun is -2, the maximum is 9, and the average is 3."

function minMaxAvg(arr) {
    var min = arr[0];
    var max = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
        sum += arr[i]
    }

    var avg = sum / arr.length

    return ("The minium is " + min + ", the maximum is " + max + ", and the average is " + avg + ".")
}

console.log(minMaxAvg([1, -2, 9, 4]))


// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:
// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!
// Example - fizzbuzz(15) would log the following (each element on its own line):
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
// BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.
// Example - fizzbuzz("fifteen") would throw the following error:
// Parameter must be a positive number
// BONUS 2: Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.
// Example - fizzbuzz(15) would return the following string:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, and FizzBuzz.

function fizzBuzz(x) {
    var str = "";

    for (i = 1; i <= x; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            str += "FizzBuzz"
        }
        else if (i % 3 == 0) {
            str += "fizz"
        } else if (i % 5 == 0) {
            str += "buzz"
        } else {
            str += i
        }

    }
    return str
}

console.log(fizzBuzz(15))


// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
// HINT: Keep in mind that you may use arrays and objects to keep your information organized!
// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.
// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function validBraces(str) {
    var pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    var arr = [];

    for (var i = 0; i < str.length; ++i)
        if (str[i] === '(' || str[i] === '[' || str[i] === '{')
            arr.push(str[i]);
        else if (arr[arr.length - 1] === pairs[str[i]])
            arr.pop();
        else
            return false;

    return true;

}

console.log(validBraces("[[(){}]]"))


function bubbleSort(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));

// 1). O(n), 2). O(n), 3). O(1), 4). O(n^2)


// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
// Example: coinChange(312) returns 
// {dollars: 3, dimes: 1, pennies: 2}
// Example: coinChange(78) returns 
// {quarters: 3, pennies: 3}
// BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.
// Example: coinChange({dollars: 2, dimes: 15, pennies: 5}) returns
// {dollars: 3, quarters: 2, nickels: 1}

function generateCoinChange(cents) {
    change = {
        "Dollars": 0,
        "Quarters": 0,
        "Dimes": 0,
        "Nickels": 0,
        "Pennies": 0
    }
    while (cents >= 100) {
        cents -= 100;
        change.Dollars++;
    }
    while (cents >= 25) {
        cents -= 25;
        change.Quarters++;
    }
    while (cents >= 10) {
        cents -= 10;
        change.Dimes++;
    }
    while (cents >= 5) {
        cents -= 5;
        change.Nickels++;
    }
    while (cents > 0) {
        cents -= 1;
        change.Pennies++;
    }
    return change
}

console.log(generateCoinChange(33))


// Write a function called userLanguages that accepts an array of users, such as the one shown above. Return a string that lists all the users by first name and last name and the languages that each user knows. Make the string as nicely formatted as possible so that it is easy to read.
// Example: userLanguages(users) returns
// Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL. 
// Winnie the Pooh knows Python, Swift, and Java. 
// Arthur Dent knows JavaScript, HTML, and Go.
// BONUS: Adjust the userLanguages function to also include what each user's interests are.
// Example: userLanguages(users) returns
// Kermit the Frog knows Python, JavaScript, C#, HTML, CSS, and SQL.
// Kermit is also interested in guitar, flute, tap, salsa, Black Mirror, and Stranger Things.
// Winnie the Pooh knows Python, Swift, and Java. 
// Winnie is also interested in honey, honeycomb, honeysuckle, and Heffalumps.
// Arthur Dent knows JavaScript, HTML, and Go.
// Arthur is also interested in stars, planets, improbability, tea, and yellow bulldozers.

users = [
    {
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]
function nameAndLang(arr) {
    var usersNameLang = [];
    for (i = 0; i < arr.length; i ++) {
        usersNameLang.push(arr[i].fname);
        usersNameLang.push(arr[i].lname);
        usersNameLang.push(arr[i].languages);
    }
    return usersNameLang.join();
}

console.log(nameAndLang(users));

