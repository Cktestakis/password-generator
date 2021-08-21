// Assignment Code

var numbers = ["0", "1 " , "2", "3","4","5","6","7","8", "9" ]
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var characters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',
];

// Write password to the #password input
function passwordQuestion() {
    var length = parseInt(prompt("How many characters would you like in your password?"))
    if (Number.isNaN(length)) {
        alert ("Pass word must be a number!");
        return null
    }
    if (length < 8) {
        alert ("Must be more than 8 characters!");
        return null
    }
    if (length > 128) {
        alert ("Must be less than 128 characters!");
        return null
    }
    var hasNumbers = confirm("Click OK to confirm numbers!");
    var hasUppercaseLetters = confirm("Click OK to confirm numbers!");
    var hasLowercaseLetters = confirm("Click OK to confirm numbers!");
    var hasCharacters = confirm("Click OK to confirm numbers!");
    // loop if answer is outside the parameters
    if (hasNumbers === false && hasUppercaseLetters === false && hasLowercaseLetters === false && hasCharacters === false) {
     alert ("Please select a character type.");
     return null
    }

    var passwordCharacter = []
    

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
}

generatePassword.addEventListener("click", writePassword);
