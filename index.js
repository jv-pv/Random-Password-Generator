const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U",
                    "V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
                    "v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^", "&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const includeSymbolsCheckbox = document.getElementById("includeSymbols");
const includeNumbersCheckbox = document.getElementById("includeNumbers");

let passwordInputOne = document.getElementById("passwordElOne");
let passwordInputTwo = document.getElementById("passwordElTwo");
let passwordLength = document.getElementById("passwordLengthEl");

passwordLength.addEventListener("input", function() {
    passwordLength = this.value;
});

function getRandomPassword() {
    passwordInputOne.value = "";
    passwordInputTwo.value = "";
    for (i = 0; i < passwordLength; i++) {
        let randomCharacterOne = characters[Math.floor(Math.random() * characters.length)]
        let randomCharacterTwo = characters[Math.floor(Math.random() * characters.length)]
        passwordInputOne.value += randomCharacterOne;
        console.log(passwordInputOne.value = randomCharacterOne)
        passwordInputTwo.value += randomCharacterTwo;
    }
}


function clearPassword() {
    passwordInputOne.value = "";
    passwordInputTwo.value = ""
}

passwordInputOne.addEventListener("click", function() {
  this.select();
  showNotification();
});

passwordInputTwo.addEventListener("click", function() {
  this.select();
  showNotification();
});

function showNotification() {
  let notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(function() {
    notification.style.display = "none";
  }, 1500);
}

includeSymbolsCheckbox.addEventListener("change", function() {
  if (this.checked) {
    characters.push(...symbols);
  } else {
    characters.splice(characters.indexOf(...symbols), symbols.length);
  }
});

includeNumbersCheckbox.addEventListener("change", function() {
  if (this.checked) {
    characters.push(...numbers);
  } else {
    characters.splice(characters.indexOf(...numbers), numbers.length);
  }
});


