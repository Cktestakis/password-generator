// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1 " , "2", "3","4","5","6","7","8", "9" ]
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var characters = ['@' ,
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
var characterChosen = "";


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Generating password function 
function generatePassword() {

    var length = prompt("How many would you like in your random password? (between 8 - 128)");
    if(isNaN(length)){
        alert("You must input a number!");
        return generatePassword()
    }
    if(length < 8 || length > 128) {
        alert("Please choose a number between 8 - 128!");
        return generatePassword()
    }
    // This will ask the user if they would like to use uppercase, lowercase, numbers, and characters
    var hasNumbers = confirm("Would you like to include numbers?");
    var hasUppercaseLetters = confirm("Would you like to include uppercase letters?");
    var hasLowercaseLetters = confirm("Would you like to include lowercase letters?");
    var hasCharacters = confirm("Would you like to include characters?");

    if(!hasNumbers && !hasUppercaseLetters && !hasLowercaseLetters && !hasCharacters) {
        alert("You must at least choose 1 character type");
        return generatePassword.join()
    }
    if(hasNumbers) {
        characterChosen += numbers
    }
    if(hasUppercaseLetters) {
        characterChosen += uppercaseLetters
    }
    if(hasLowercaseLetters) {
        characterChosen += lowercaseLetters
    }
    if(hasCharacters) {
        characterChosen += characters
    }

}
var randomPassword =[]

for(var i = 0; i < length; i++) {
    result += characterChosen.charAt[Math.floor(Math.random() * characterChosen.length)];

}
    
   generateBtn.addEventListener("click", writePassword)