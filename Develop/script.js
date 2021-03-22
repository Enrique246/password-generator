//Possible input variables
var passLength;
var lowerCase;
var upperCase;
var numbers;
var special;




// if (lowerCaseConfirm && upperCaseConfirm && numberConfirm && specialConfirm === true)
// {
//   console.log ("Everything is true")
// }
// Assignment Code
var generateBtn = document.querySelector("#generate");

 const randomFunc = {
lower: getRandomLower,
  upper: getRandomUpper,
   number: getRandomNumber,
  symbol: getRandomSymbol,
 };

// Function Generate password
function generatePassword (lower, upper, number, symbol, length){
   
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{
       lower
     }, {
       upper
     }, {
       number
    }, {
       symbol
     }].filter(item => Object.values(item)[0]);


     for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
  
    const finalPassword = generatedPassword.slice(0, length);
  
    return finalPassword;
  }
    

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  
  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
    

// Write password to the #password input
//    function writePassword() {
//    var password = generatePassword();
//    var passwordText = document.querySelector("#password");

//    passwordText.value = password;

// }

// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);
const resultEl = document.getElementById('password');


document.getElementById('generate').addEventListener('click', () => {
  resultEl.value = generatePassword(lowerCase, upperCase, numbers, special, passLength);
});

document.getElementById ("generate").onclick = function() {
  promlen()

  while (!(lowerCase || upperCase || numbers || special)) {
    alert("You must select at least one character type.");

  lowerCase = confirm ("Would you like to use lowercase letters?");
  upperCase = confirm ("Would you like to use uppercase?");
  numbers = confirm ("Would you like to use numbers?");
  special = confirm ("Would you like to use special symbols?");
  }

}
  
  function promlen() {
 
    while (!(passLength >= 8 && passLength <= 128)) {

      passLength = prompt ("How many characters would you like your password to have?");
      
    if  (!(passLength >= 8 && passLength <= 128)) {
      alert("Length must be 8-128 characters.");
    }
    }
}
  


  // while (promlen < 8 || promlen > 128) {
    // passLength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");}
  

// document.getElementById("button").onclick = function() {
//   confirm("Great to see you," + " " + prompt("What's Your Name"));
// };
// var plength = prompt("How many characters would you like your password to be?");

//   while (plength < 8 || plength > 128) {
//     plength = prompt("Length must be 8-128 characters. How many characters would you like your password to be?");