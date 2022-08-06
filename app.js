const message = document.querySelector(".text-input");
const decmessage = document.querySelector(".dec-text-input");
const encryptbtn = document.querySelector(".enc-btn");
const decryptbtn = document.querySelector(".dec-btn");
const encbox = document.querySelector(".encryptedmsg");
const decbox = document.querySelector(".decryptedmsg");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

var ciphertext;
var normaltext;

encryptbtn.addEventListener("click", encrypter);
decryptbtn.addEventListener("click", decrypter);

function defaultreq() {
  if (message.value == 0) {
    encryptbtn.style.cursor = "url('cursor.cur'),not-allowed";
  }
  if (decmessage.value == 0) {
    decryptbtn.style.cursor = "url('cursor.cur'),not-allowed";
  }
  message.addEventListener(
    "keypress",
    () => {
      encryptbtn.style.cursor = "pointer";
    },
    false
  );

  decmessage.addEventListener(
    "keypress",
    () => {
      decryptbtn.style.cursor = "pointer";
    },
    false
  );
}
defaultreq();

function notallowmsg() {
  if (message.value == 0 || password.value == 0) {
    alert("Please enter both text and a password");
    messagediv.remove();
  }
}

function notallowdecmsg() {
  if (decmessage.value == 0 || password2.value == 0) {
    alert("Please enter both text and a password");
    decmessagediv.remove();
  }
}

function encrypter(e) {
  //does not allow to run if textinput is empty
  notallowmsg();

  e.preventDefault();
  //create a div
  const messagediv = document.createElement("textarea");
  messagediv.classList.add("msgdiv");
  encbox.appendChild(messagediv);

  ciphertext = CryptoJS.AES.encrypt(message.value, password.value);

  messagediv.innerHTML = ciphertext.toString();

  //clear the input
  message.value = "";
  password.value= "";
}

function decrypter(event) {
  //does not allow to run if textinput is empty
  notallowdecmsg();

  event.preventDefault();

  //create a div
  const decmessagediv = document.createElement("textarea");
  decmessagediv.classList.add("decmsgdiv");
  decbox.appendChild(decmessagediv);

  if (password.value != password2.value) {
    alert("Wrong password");
    return false;
  }
  normaltext = CryptoJS.AES.decrypt(decmessage.value, password2.value);

  decmessagediv.innerHTML = normaltext.toString(CryptoJS.enc.Utf8);

  decmessage.value = "";
  password2.value= "";
}
