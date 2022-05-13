// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword () {

  var disclosure = confirm('Begin Password Generator?')
  var lengthChar = prompt('How many Characters?', 'Enter Password Length')
  var upperChar =  confirm('Include Uppercase?', 'Enter Characters')
  var lowerChar=  confirm('Include Lowercase?', 'Enter Characters')
  var numChar =  confirm('Include Numbers?', 'Enter Characters')
  var specChar =  confirm('Include Special Characters?', 'Enter Characters')
  var createdAlert = alert('Password has been Created')


  generate = disclosure + lengthChar + upperChar + lowerChar + numChar + specChar + createdAlert
  return generate
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);