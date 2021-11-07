// Assignment Code
var generateBtn = document.querySelector("#generate");

let password = [];
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*+_-=";

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

const randomupper = getRandomUpperCase();
const randomlower = getRandomLowerCase();
const randomnumber = getRandomNumber();
const randomsymbol = getRandomSymbol();

function generatePassword() {
  let setlength = parseInt(prompt("How many characters will your password be?"));
  const setupper = confirm("Add Uppercase letters?");
  const setnumbers = confirm("Add Numbers?");
  const setsymbols = confirm("Add Symbols?");

  if (setlength < 8) {
    let setlength = parseInt(prompt("Character length must be 8 or greater."));
    if (setlength < 8) {
      let setlength = confirm("Password can not be shorter than 8 characters.");
    }
  }
  if (setlength > 128) {
    let setlength = parseInt(prompt("Character length must be shorter than 128."));
    if (setlength > 128) {
      let setlength = confirm("Password can not be longer than 128 characters.");
    }
  }
  for (let i = 0; i < setlength; i++) {
    if (lowercase) {
      password.push(randomlower);
    }
    if (setupper) {
      password.push(randomupper);
    }
    if (setnumbers) {
      password.push(randomnumber);
    }
    if (setsymbols) {
      password.push(randomsymbol);
    }
  }
  return password;
}

// Could not figure out how to get function below to work and shuffle my generated password array.

// function shufflearray(password) {
//   for (let i = password.length - 1; i > 0; i--);
//   var j = Math.floor(Math.random() * (i +1));
//   [password[i], password[j]] = [password[j], password[i]];
// }

// password.slice(0, setlength);

// Write password to the #password input
function writePassword() {
  var finalpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
