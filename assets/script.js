// Assignment Code
var numbers = ["0", "1 " , "2", "3","4","5","6","7","8", "9" ]
var uppercaseLetters = []
var lowercaseLetters = []
var characters = ['@',
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
'.',]


function passwordQuestion() {
    var length = parseInt(prompt("How many characters would you like in your password?"))
    if (Number.isNaN(length)) {
        alert ("Pass word must be a number!");
        return null
    }
    if (length < 8) {
        alert ("Must be more than 8 characters!")
        return null
    }
    if (length > 128) {
        alert ("Must be greater less than 128 characters!")
        return null
    }
    var hasNumbers = confirm("Click okay to confirm numbers!")
    var hasUppercaseLetters = confirm("Click okay to confirm numbers!")
    var hasUppercaseLetters = confirm("Click okay to confirm numbers!")
    var hasUppercaseLetters = confirm("Click okay to confirm numbers!")
    if (hasNumber === false && hasUppercaseLetters === false) {
     alert ("Please select a character type.")   
     return null
    }

    var passwordOption = {
        length:length
    }
    //change ^^^
}










var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
