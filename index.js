const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"
,"V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"
,"v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^",
"&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Paragraph Version 1.0

// let passwordInputOne = document.getElementById("passwordElOne")
// let passwordInputTwo = document.getElementById("passwordElTwo")

// function generatePassword() {
//     passwordInputOne.textContent = ""
//     passwordInputTwo.textContent = ""
//     for (i = 0; i < 16; i++) {
//         let randomCharacterOne = characters[Math.floor(Math.random() * characters.length)]
//         let randomCharacterTwo = characters[Math.floor(Math.random() * characters.length)]
//         passwordInputOne.textContent += randomCharacterOne
//         passwordInputTwo.textContent += randomCharacterTwo
//     }
// }


// Input Version 1.0

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
        passwordInputTwo.value += randomCharacterTwo;
    }
}

function getClearPassword() {
    passwordInputOne.value = "";
    passwordInputTwo.value = ""
}

