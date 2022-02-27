
// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);

  var letters= "abcdefghijklmnopqrstuvwxyz";
  var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number= "1234567890";
  var special= "~!@#$%^&*()-_=+/.`"
  var pool = letters;

  if (confirm("Do you want numbers in your password?")) {
    pool += number;
  }

  if (confirm("Do you want special characters in your password?")) {
    pool += special;
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    pool += uppercase;
  }

  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * pool.length);
    genPassword += pool[random];
  }

  console.log(genPassword);

  return genPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
