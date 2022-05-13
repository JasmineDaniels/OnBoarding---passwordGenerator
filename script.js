// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordContinue();
  var passwordText = document.querySelector("#password");

  passwordText.value = result;

}

function passwordContinue() {
  var proceed = confirm('Begin Password Generator?')
  if (proceed) {
    generatePassword()
  } else {

  }
}

// var passwordObj = {
//   "lengthChar": prompt('How many Characters?', 'Enter Password Length'),
//   "upperChar":  confirm('Include Uppercase?', 'Enter Characters'),
//   "lowerChar":  confirm('Include Lowercase?', 'Enter Characters'),
//   "numChar":  confirm('Include Numbers?', 'Enter Characters'),
//   "specChar":  confirm('Include Special Characters?', 'Enter Characters'),
//   "createdAlert": alert('Password has been Created'),

// }

function generatePassword() {
  var lengthChar = prompt('How many Characters?', 'Enter Password Length')
  var upperChar =  confirm('Include Uppercase?', 'Enter Characters')
  var lowerChar=  confirm('Include Lowercase?', 'Enter Characters')
  var numChar =  confirm('Include Numbers?', 'Enter Characters')
  var specChar =  confirm('Include Special Characters?', 'Enter Characters')
  var createdAlert = alert('Password has been Created')


  generate = disclosure + lengthChar + upperChar + lowerChar + numChar + specChar + createdAlert
  console.log(generate)

  //Add for loop 
  // var generate = prompt(passwordObj.lengthChar)
  //   if (lengthChar === " "){
  //     lengthChar += upperChar
  //   } 
  //   else {
  //     alert('You must add Password Length')
  //   }
  
  // result = disclosure + lengthChar + upperChar + lowerChar + numChar + specChar + createdAlert
  // document.getElementById(generate)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//1st Attempt

// for (i =0; i < passwordPrompts.length; i++) {
  // prompt("Password can be anywhere between 8 and 128 characters", "Enter Password")
// }

//2nd Attempt

// function generatePassword() {
//     var result = prompt('Password Length', 'Enter Password')
//     if (result !== null) {
//       prompt('Character Types', 'Enter Characters')
//     } if (result !== null) {
//       alert('Password has been Created')
//     }
//     console.log(result)
// }

// Misc
// if (disclosure !== true) {
  
// }

// 4th Attempt
// var disclosure = confirm('Begin Password Generator?')
//   var lengthChar = prompt('How many Characters?', 'Enter Password Length')
//   var upperChar =  confirm('Include Uppercase?', 'Enter Characters')
//   var lowerChar=  confirm('Include Lowercase?', 'Enter Characters')
//   var numChar =  confirm('Include Numbers?', 'Enter Characters')
//   var specChar =  confirm('Include Special Characters?', 'Enter Characters')
//   var createdAlert = alert('Password has been Created')


//   generate = disclosure + lengthChar + upperChar + lowerChar + numChar + specChar + createdAlert
//   console.log(generate)
//   // document.getElementById(generate)