// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//Global-scoped variables:
let passwordLength;
let characterType = []

// Function to prompt user for password options
function getPasswordOptions() {
  while (true) {
    passwordLength = prompt ("Welcome to the Password Generator!\nPlease enter the desired length of password.\n(Enter a number from 8 to 128.)") 

    if (passwordLength >= 8 && passwordLength <= 128 ) {
      while (true) {
        let isLowerCasedCharacters = confirm ("Include lower-cased characters?\nClick 'OK' to include or 'Cancel' to exclude.");
        let isUpperCasedCharacters = confirm ("Include upper-cased characters?\nClick 'OK' to include or 'Cancel' to exclude.");
        let isNumericCharacters = confirm ("Include numeric characters?\nClick 'OK' to include or 'Cancel' to exclude.");
        let isSpecialCharacters = confirm ("Include special characters in your password?\nClick 'OK' to include or 'Cancel' to exclude.");

        if (isLowerCasedCharacters === true) {
          characterType.push(lowerCasedCharacters); 
        }
        if (isUpperCasedCharacters === true) {
          characterType.push(upperCasedCharacters);
        }
        if (isNumericCharacters === true) {
          characterType.push(numericCharacters);
        }
        if (isSpecialCharacters === true) {
          characterType.push(specialCharacters);
        }
        console.log (passwordLength)
        console.log (characterType)
  
        if (characterType.length > 0) {
          break
        } else {
          alert ("Error.\nPassword must include at least one character type.")
        }
      }
      break
    } else {
      alert ("Error.\nPassword needs to be at least 8 characters but no more than 128.\n(Please enter a number from 8 to 128.)");
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let password = [];
  while (passwordLength > 0) {
    let selectedArray = characterType[Math.floor(Math.random() * characterType.length)]
    password.push(getRandom(selectedArray))
    passwordLength--
  }
  return password.join('')
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);