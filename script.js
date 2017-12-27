// Hands On Project 1


// function phoneNumberFormat(phoneNumber) {
//     phoneNumber = document.getElementById("phNumber").value;
//     let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
//     // Convert the following if..esle into a ternary
//     // condition ? Expression on a true : false
//     phoneNumber.match(phoneRegex) <= phoneRegex
//     ? console.log("Valid number entered")
//     : console.log( "Phone number entered is invalid");
    
// }
//     if (phoneNumber.match(phoneRegex)) {
//       alert("Valid number entered");
//     } else {
//       alert("Phone number entered is invalid");
//     }
//   }

// Hands On Project 2
// Write a try...catch statement using the given variable; 
// it should have at least three try statements such as if (x < 5) throw true. 
// Your catch should log error to the console. 

let newNumber = 10;

try {
    if (newNumber > 5) 
    console.log(false);
    if (newNumber < 5) 
    console.log(true);
    if (newNumber == 5)
    console.log("Not equal");
} catch (err) {
    console.log(err);
}