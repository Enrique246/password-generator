//Possible input variables
var passLength;
var lowerCaseConfirm;
var upperCaseConfirm;
var numberConfirm;
var specialConfirm;

if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && specialConfirm === true)
{
  console.log ("Everything is true")
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
