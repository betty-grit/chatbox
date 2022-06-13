let automatedText = document.getElementById("usermessage1");
let mspace = document.getElementById("mspace");
let send = document.getElementById("send");
let inputtext = document.getElementById("message1");
function list() {
  let messagediv = document.createElement("div");
  messagediv.setAttribute("id", "mdiv");
  let messageTexts = document.createElement("p");
  messageTexts.setAttribute("id", "mtexts");
  messagediv.appendChild(messageTexts);
  mspace.appendChild(messagediv);
  let timeText = document.createElement("p");
  timeText.setAttribute("id", "ttexts");
  messagediv.appendChild(timeText);
  let date1 = new Date();
  let current = date1.getHours() + ":" + date1.getMinutes();

  messageTexts.innerHTML = inputtext.value;
  if (inputtext.value.trim() == "") {
    messagediv.style.display = none;
  }
  messageTexts.style.color = "black";
  messagediv.style.width = "200px";
  messagediv.style.height = "48px";
  messagediv.style.backgroundColor = "grey";
  messagediv.style.borderRadius = "10px 10px 10px 0px";
  messagediv.style.padding = "10px";
  messagediv.style.marginLeft = "280px";
  timeText.innerHTML = current;
  timeText.style.marginLeft = "158px";
  timeText.style.marginTop = "-17px";

  let new1 = document.getElementById("new");
  new1.innerHTML = inputtext.value;

  //   usermage.style.width = "fit-content";ess

  let automateddiv = document.createElement("div");
  automateddiv.setAttribute("id", "adiv");
  let automatedText = document.createElement("p");
  automatedText.setAttribute("id", "atexts");
  automateddiv.appendChild(automatedText);
  mspace.appendChild(automateddiv);
  let timeText1 = document.createElement("p");
  timeText1.innerHTML = current;
  automateddiv.appendChild(timeText1);
  // if (inputtext.value.toLowerCase() == "hello") {
  if (inputtext.value.toLowerCase().includes("hello")) {
    automatedText.innerHTML = "hii Jane";

    automateddiv.style.border = "1px solid grey";
    automateddiv.style.backgroundColor = "rgb(173, 233, 229)";
    automateddiv.style.width = "200px";
    automateddiv.style.height = "48px";
    automateddiv.style.borderRadius = "10px 10px 10px 0px";
    automateddiv.style.padding = "10px";
    timeText1.style.marginLeft = "158px";
    timeText1.style.marginTop = "-17px";
  }
}
// }
send.addEventListener("click", function () {
  list();
  clearFields();
});
function clearFields() {
  inputtext.value = "";
}

// let message = [];
// function list() {
//   let inputtext = document.getElementById("message1").value;

//   message.push(inputtext);
//   let messageText = "";
//   for (i = 0; i < message.length; i++) {
//     messageText = messageText + "<br>"  + message[i];
//   }
//   if (inputtext.trim() !== "") {
//     document.getElementById("usermessage").innerHTML = messageText;
//     usermessage.style.border = "1px solid grey";
//     usermessage.style.borderRadius = "5px";
//     usermessage.style.marginLeft = "420px";
//   }

//   let new1 = document.getElementById("new");
//   new1.innerHTML = inputtext;
//   //   usermage.style.width = "fit-content";ess
//   if (inputtext.includes("hello")) {
//     automatedText.innerHTML = "hii Betty";

//     automatedText.style.border = "1px solid grey";
//     automatedText.style.backgroundColor = "rgb(173, 233, 229)";
//     automatedText.push(inputtext);
//     //   }
//   let automaticmessage = [];
//   automaticmessage.push(automatedText);
//   let auto = "";
//   for (i = 0; i < automaticmessage.length; i++) {
//     auto = auto + "<br>" + automaticmessage[i];
//   }
// }
//   }
// }

// let startermessage = document.getElementById("startermessage");
// // startermessage.innerHTML = "hello";
// // startermessage.style.border = "2px solid grey";
// // startermessage.style.marginLeft = "420px";
// function botMessage() {
//   let firstMessage = "hello";
//   document.getElementById("startermessage").innerHTML =
//     '<p class="botText"><span>' + firstMessage + "</span></p>";
// }
