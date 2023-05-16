// TASK 1
let a = 3;
let b = 5;
let c;

// alert("description of alerted_value: " + alerted_value);
let output = `
    let a = 3;
    let b = 5;
    let c;
    --------------------
    a + b = ${a + b}
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
    a % b = ${a % b}
    a += b = ${a += b}
    a -= b = ${a -= b}
    a *= b = ${a *= b}
    a /= b = ${a /= b}
    a %= b = ${a %= b}
    a == b = ${a == b}
    a != b = ${a != b}
    a > b = ${a > b}
    a < b = ${a < b}
    !a && !c = ${!a && !c}
    !a || !c = ${!a || !c}
    `;
alert(output);


/*
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c 
!a || !c 
*/



//TASK 2
// Declare the variable first_name and assign it with the value of your first name;
// Declare the variable last_name and assign it with the value of your last name;
// Declare the variable email and assign it with the value of your email;
// Declare the variable output;
// Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
// Assign output with gotten expression;
// Alert output.


let first_name = "Vishwa";
let last_name = "Shah";
let email = "shah0368@algonquinlive.com";
output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
alert(output);

