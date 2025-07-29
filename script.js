// 1.Alert exercise practice

//exercise 1: Using alert and storing the string data type in quotation marks 
alert("Hello World");


//exercise 2: Using alert and displaying name in place of Hello world
alert("Hello Hastman");

//exercise 3: Using alert and storing the numirecal data type without quotation marks
alert(10);


//exercise 4: Using varible named studentName and storing the string data Syed Hastman Jan then displaying that variable in alert
var studentName = "Syed Hastman Jan";
alert(studentName);

//exercise 5: Using varibles declaration let and combining 2 strings and displaying them in alert
let greet = "Hi this is " + studentName;
alert(greet);






// 2.Variables for Strings exercise practice

//exercise 1: Declared variable named userName and storing my name it
var userName = "Syed Hastman Jan";


//exercise 2: Declared variable named message and stored a message in it and then called is using alert function
var message = "Welcome to Ecmascript/Javascript";
alert(message);


//exercise 3: Declared 2 variables named fName and lName and combined both into 1 variable named fullName using arithmetic operator +.
var fName = "Syed Hastman";
var lName = " Jan";
var fullName = fName + lName;


//exercise 3: Declared variable named quote and stored my favorite quote in it.
var quote = " “A room without books is like a body without a soul.” ― Marcus Tullius Cicero ";


//exercise 5. Declared a variable city and assigned it value "Welcome to Karachi" and then called var city in alert.
var city = "Welcome to Karachi";
alert(city);






// 3.Variables for Numbers exercise practice

//exercise 1: Declared a variable named age and assigned my age to it.
var age = 22;


//exercise 2: Declared 2 variables and stored two numbers in them and added them in var add.
var num1 = 10;
var num2 = 20;
var add = num1 + num2;


//exercise 3: Declared 2 variables and stored two numbers in them and subtracted one number from another in var sub.
var num3 = 20;
var num4 = 7;
var sub = num3 - num4;


//exercise 4: Declared 2 variables and stored 2 numbers in them and multiplied both in var mul.
var num5 = 5;
var num6 = 6;
var mul = num5 * num6;


//exercise 5: Declared a variable message2 showed a message "You are 20 years old" in console logs.
var message2 = "You are 20 years old";
console.log(message2);






// 4.Math Expressions exercise practice

//exercise 1: Created two variables: x = 10, y = 5 and added them in var addxy and logged the result in console.
var x = 10;
var y = 5;
var addxy = x + y;
console.log(addxy);


//exercise 2: Subtracted y from x and showed the answer using alert.
alert(x-y);


//exercise 3: Multiplied x and y, and logged result to the console.
console.log(x*y);


//exercise 4: Divided x by y in var div.
var div = x / y;


//exercise 5: Found the remainder of x % y and logged result in console.
console.log(x % y);






// 5.Prompt exercise practice

//exercise 1: Asked the users name using prompt and assigned that value to var question and greeted them using concatenated alert message.
var question = prompt("What is your name?");
alert("Hello " + question);


//exercise 2: Asked the users age using prompt and assigned that value to var question2 and displayed it using alert.
var question2 = prompt("What is your age?");
alert("Your age is " + question2);


//exercise 3: Asked the user for a number using prompt and assigned that value to var double and multiplied it by 2 and show the result in alert.
var double = prompt("Give me a number, I will double it.");
alert("Double is " + (double*2));


//exercise 4: Asked for favorite colour and showed a message like "Wow! I like [colour] too!" using alert
var colour = prompt("What is your favourite colour?");
alert("Wow! I like " + colour + " too!");


//exercise 5: Asked for city name and said: "You are from [city]" in alert.
var city = prompt("Which city are you from?");
alert("You are from " + city);








// 6.If Statement and Comparison Operators exercise practice

//exercise 1: Asked user age in previous prompt exercise line 127. Compared using if statement and condition operator If age < 30, showed You're still young man.
if (question2 < 30) {
    alert("You're still young man");
}
else {
    alert("You're an old man");
};


//exercise 2: Asked for a number using prompt and stored in var even. If even is divided by 2 and remainder is strict 0 then showed Even number.
var even = prompt("Enter a number to check is it even or odd");
if ((even % 2) === (0)){
    alert(even + " is Even number");
}
else{
    alert(even + " is Odd number");
};


//exercise 3: Compared two numbers and showed which one is greater.
var num7 = Number(prompt("Enter the first number for comparison"));
var num8 = Number(prompt("Enter the second number for comparison"));
if (num7 > num8) {
    alert(num7 + " is greater than " + num8);
}
else if (num7 < num8) {
    alert(num8 + " is greater than " + num7);
}
else {
    alert("Both numbers are equal");
}


//exercise 4: Asked the user for password. If strictly correct , assuming the correct password is "abc1234", said "Access granted".
var password = prompt("Enter your password");
if (password === "abc1234") {
    alert("Access granted");
} else {
    alert("Access denied");
};


//exercise 5: Used ==, ===, !=, !== to compare two values:
// == (loose equality)
// === (strict equality)
// != (loose inequality)
// !== (strict inequality)
// First declared 2 variables one is number the other is string
var a = 5;
var b = "5";
// == (loose equality)
console.log(a == b); // answer will be true, because values are equal after type conversion
// === (strict equality)
console.log(a === b); // answer will be false, because data types are different
// != (loose inequality)
console.log(a != b); // answer will be false, because values are considered equal after type conversion
// !== (strict inequality)
console.log(a !== b); // answer will be true, because data types are different
