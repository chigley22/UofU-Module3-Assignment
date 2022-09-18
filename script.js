// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

var capLettersChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "X",
  "Y",
  "Z",
];

var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var possibleChar = [];

function generatePassword() {
  var passwordLength = window.prompt(
    "Please enter Password length. Atleast 8, no more than 128 characters."
  );
  console.log(passwordLength);

  possibleChar.push.apply(possibleChar, lettersChar);

  if (passwordLength <= 8 || passwordLength >= 128) {
    generatePassword();
    return;
  }
  var special = window.prompt("Would you like to include special characters?");
  special = special.toUpperCase();

  if (special == "Yes") {
    possibleChar.push.apply(possibleChar, specialChar);
  }
  console.log(special);
  var numbersOkay = window.prompt("Would you like to include numbers?");
  numbersOkay = numbersOkay.toUpperCase();

  if (numbersOkay == "Yes") {
    possibleChar.push.apply(possibleChar, numbersChar);
  }
  console.log(numbersOkay);
  var capLetters = window.prompt("Would you like to include Capital Letters?");
  capLetters = capLetters.toUpperCase();

  if (capLetters == "Yes") {
    possibleChar.push.apply(possibleChar, capLettersChar);
  }
  console.log(capLetters);
  var password = "";
  for (i = 0; i <= passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * possibleChar.length);
    password += possibleChar[randomNum];
  }
  console.log(password);

  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = " ";
  var password = generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
