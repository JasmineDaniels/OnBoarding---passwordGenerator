// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spec = ['&', '!', '#', '%', '*', '$', '(', ')', '+', '-', ',', '.', '\', '/', \':', ';', '<', '=', '>', '?', '@', '[', '\', \']', '^', '_', '`', '{', '|', '}', '~']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upper =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function generatePassword () {
  var possible = []
  var disclosure = confirm('Begin Password Generator?')
  var lengthChar = prompt('How many Characters?', 'Enter Password Length')
  if (lengthChar >= 8 && lengthChar <= 128) {
    var upperChar =  confirm('Include Uppercase?', 'Enter Characters')
    var lowerChar=  confirm('Include Lowercase?', 'Enter Characters')
    var numChar =  confirm('Include Numbers?', 'Enter Characters')
    var specChar =  confirm('Include Special Characters?', 'Enter Characters')
    var createdAlert = alert('Password has been Created')

    if (upperChar) {
      possible = [...upper, ...possible]
    } if (lowerChar) {
      possible = [...lower, ...possible]
    } if (numChar) {
      possible = [...nums, ...possible]
    } if (specChar) {
      possible = [...spec, ...possible]
    }

    console.log(possible)
    // Function 

    
    var test = " "
    var str = '';
    for (i=0; i <= lengthChar.length; i++) {
      
      var str = possible[Math.floor(Math.random()*[lengthChar.length])]
      test += str[possible]
      console.log(test)
    }


    //  return password
  } else {
    generatePassword ()
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);