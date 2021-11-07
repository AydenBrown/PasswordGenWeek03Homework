// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*+_-="

function getRandomUpperCase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomLowerCase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
