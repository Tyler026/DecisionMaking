// Hands On Project 1


function phoneNumberFormat(phoneNumber) {
    phoneNumber = document.getElementById("phNumber").value;
    let phoneRegex = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/g;
    // Convert the following if..esle into a ternary
    // condition ? Expression on a true : false
    phoneNumber.match(phoneRegex) <= phoneRegex
    ? console.log("Valid number entered")
    : console.log( "Phone number entered is invalid");
    
}
    

//     if (phoneNumber.match(phoneRegex)) {
//       alert("Valid number entered");
//     } else {
//       alert("Phone number entered is invalid");
//     }
//   }