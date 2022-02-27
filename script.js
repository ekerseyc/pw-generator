var generateBtn = document.querySelector("#generate");

function generatePassword(){
// will specifiy the number of characters
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);

  // variables with the required characters for the generated password
  var letters= "abcdefghijklmnopqrstuvwxyz";
  var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number= "1234567890";
  var special= "~!@#$%^&*()-_=+/.`"
  // pool var will clean up the code so it's not a mess, simplifies it
  var pool = letters;

  // prompts for choosing what you want in your password
  if (confirm("Do you want numbers in your password?")) {
    pool += number;
  }

  if (confirm("Do you want special characters in your password?")) {
    pool += special;
  }

  if (confirm("Do you want uppercase letters in your password?")) {
    pool += uppercase;
  }

  // generates the password based on the amount of characters and which elements you picked
  var genPassword = "";
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * pool.length);
    genPassword += pool[random];
  }

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
