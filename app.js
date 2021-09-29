const message = document.querySelector('.text-input');
const decmessage = document.querySelector('.dec-text-input');
const encryptbtn = document.querySelector('.enc-btn');
const decryptbtn = document.querySelector('.dec-btn');
const encbox = document.querySelector('.encryptedmsg');
const decbox = document.querySelector('.decryptedmsg');

encryptbtn.addEventListener('click', encrypter);
decryptbtn.addEventListener('click', decrypter);

function defaultreq(){
    if(message.value==0){
        encryptbtn.style.cursor = "url('cursor.cur'),not-allowed";
    }
     if(decmessage.value==0){
        decryptbtn.style.cursor = "url('cursor.cur'),not-allowed";
    }
    message.addEventListener('keypress', () => {
        encryptbtn.style.cursor = "pointer";
      }, false);
    
      decmessage.addEventListener('keypress', () => {
        decryptbtn.style.cursor = "pointer"
      }, false);
      
}
defaultreq();

function notallowmsg(){
    if(message.value==0){
        
        alert("Please enter some text");
    messagediv.remove();
}
}
function notallowdecmsg(){
    if(decmessage.value==0){
        alert("Please enter some text");
    decmessagediv.remove();
}
}
function encrypter(e) {
//does not allow to run if textinput is empty
    notallowmsg();

    e.preventDefault();
    //create a div
    const messagediv =document.createElement("textarea");
    messagediv.classList.add("msgdiv");


    encbox.appendChild(messagediv);

    let encryptedmessage; //a variale to return in the end

    const messagearr = message.value.split("");   //split is used to get each character of a string into an array

    let encryptedmessagearr = [];
    for (var i = 0; i < messagearr.length; i++) {
        let letter;
        switch (messagearr[i]) {
            case "a":
                letter = "+"
                break;
            case "b":
                letter = "_"
                break;
            case "c":
                letter = "'"
                break;
            case "d":
                letter = ">"
                break;
            case "e":
                letter = "<"
                break;
            case "f":
                letter = ","
                break;
            case "g":
                letter = "4"
                break;
            case "h":
                letter = "6"
                break;
            case "i":
                letter = "2"
                break;
            case "j":
                letter = "7"
                break;
            case "k":
                letter = "L"
                break;
            case "l":
                letter = "?"
                break;
            case "m":
                letter = "O"
                break;
            case "n":
                letter = "c"
                break;
            case "o":
                letter = "u"
                break;
            case "p":
                letter = "f"
                break;
            case "q":
                letter = ":"
                break;
            case "r":
                letter = ";"
                break;
            case "s":
                letter = "{"
                break;
            case "t":
                letter = "]"
                break;
            case "u":
                letter = "}"
                break;
            case "v":
                letter = "="
                break;
            case "w":
                letter = "t"
                break;
            case "x":
                letter = "r"
                break;
            case "y":
                letter = "~"
                break;
            case "z":
                letter = "w"
                break;
            case "1":
                letter = "q"
                break;
            case "2":
                letter = "$"
                break;
            case "3":
                letter = "%"
                break;
            case "4":
                letter = "^"
                break;
            case "5":
                letter = "&"
                break;
            case "6":
                letter = "*"
                break;
            case "7":
                letter = "("
                break;
            case "8":
                letter = ")"
                break;
            case "9":
                letter = "@"
                break;
            case "0":
                letter = "!"
                break;
            case "+":
                letter = "|"
                break;
            case "-":
                letter = "s"
                break;
            case "?":
                letter = "d"
                break;
            case "#":
                letter = "/"
                break;
            default:
                letter = messagearr[i];
                break;
        }
        encryptedmessagearr.push(letter);
        //push the changed value of texts into the array created
        
    };
    encryptedmessage   = encryptedmessagearr.join("") // joins the array elements with "".

messagediv.innerHTML= encryptedmessage;

//clear the input
message.value = "";

}

function decrypter(event){

    //does not allow to run if textinput is empty
    notallowdecmsg();

    event.preventDefault();

    //create a div
    const decmessagediv = document.createElement("textarea");
    decmessagediv.classList.add("decmsgdiv");

    decbox.appendChild(decmessagediv);
 
    let decryptedmessage; //a variale to return in the end

    const decmessagearr = decmessage.value.split("");   //split is used to get each character of a string into an array

    let decryptedmessagearr = [];
    for (i = 0; i < decmessagearr.length; i++) {
        let letter;
        switch (decmessagearr[i]) {
            case "+":
                letter = "a"
                break;
            case "_":
                letter = "b"
                break;
            case "'":
                letter = "c"
                break;
            case ">":
                letter = "d"
                break;
            case "<":
                letter = "e"
                break;
            case ",":
                letter = "f"
                break;
            case "4":
                letter = "g"
                break;
            case "6":
                letter = "h"
                break;
            case "2":
                letter = "1"
                break;
            case "7":
                letter = "j"
                break;
            case "L":
                letter = "k"
                break;
            case "?":
                letter = "l"
                break;
            case "O":
                letter = "m"
                break;
            case "c":
                letter = "n"
                break;
            case "u":
                letter = "o"
                break;
            case "f":
                letter = "p"
                break;
            case ":":
                letter = "q"
                break;
            case ";":
                letter = "r"
                break;
            case "{":
                letter = "s"
                break;
            case "]":
                letter = "t"
                break;
            case "}":
                letter = "u"
                break;
            case "=":
                letter = "v"
                break;
            case "t":
                letter = "w"
                break;
            case "r":
                letter = "x"
                break;
            case "~":
                letter = "y"
                break;
            case "w":
                letter = "z"
                break;
            case "q":
                letter = "1"
                break;
            case "$":
                letter = "2"
                break;
            case "%":
                letter = "3"
                break;
            case "^":
                letter = "4"
                break;
            case "&":
                letter = "5"
                break;
            case "*":
                letter = "6"
                break;
            case "(":
                letter = "7"
                break;
            case ")":
                letter = "8"
                break;
            case "@":
                letter = "9"
                break;
            case "!":
                letter = "0"
                break;
            case "|":
                letter = "+"
                break;
            case "s":
                letter = "-"
                break;
            case "d":
                letter = "?"
                break;
            case "o":
                letter = "#"
                break;
            default:
                letter = decmessagearr[i];
                break;
        }
    
    decryptedmessagearr.push(letter);
    // console.log("encrypted msg arr", encryptedmessagearr);
    };

    decryptedmessage   = decryptedmessagearr.join("") // joins the array elements with "".

    decmessagediv.innerHTML= decryptedmessage;

//clear value
decmessage.value = "";
}

//probs

//6 is star and star is k


