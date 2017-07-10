var myFirebase = new Firebase('https://js-chat-app-61a37.firebaseio.com/');
var usernameInput = document.querySelector('#username');
var textInput = document.querySelector('#text');
var postButton = document.querySelector('#post');

postButton.addEventListener("click", function () {
    var msgUser = usernameInput.value;
    var msgText = textInput.value;

    myFirebase.push({
        username: msgUser,
        text: msgText
    });
    textInput.value = "";
});

var beginListening = function () {
    myFirebase.on('child_added', function (snapshot) {
        var msg = snapshot.val();
        //display name
        var msgUsernameElement = document.createElement("b");
        msgUsernameElement.textContent = msg.username;
        //display text
        var msgTextElement = document.createElement("p");
        msgTextElement.textContent = msg.text;


        //each of the messages will apear in a div

        var msgElement = document.createElement("div");
        msgElement.appendChild(msgUsernameElement);
        msgElement.appendChild(msgTextElement);
        //every message will have msg class
        msgElement.className = "msg";
        document.getElementById("results").appendChild(msgElement);


    });
}
beginListening();
