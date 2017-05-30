/**
 * Created by komar on 5/30/2017.
 */
var player = true;
function respond() {
    switch(player){
        case true:
            document.getElementById('text').innerHTML = 'I\'m right!';
            player = false;
            break;
        case false:
            document.getElementById('text').innerHTML = 'No, I\'m right!';
            player = true;
            break;
    }
}

// Problem 2
function donthover() {
    alert('Hey, I told you not to hover over me!');
}

// Problem 3
document.addEventListener("keypress", setKey, false);
function setKey(e) {
    document.getElementById('key').innerHTML = e.key;
}

// Problem 4
function show_modal() {
    window.location.href = '#openModal';
}

function login() {
    var pass = document.getElementById('password').value;
    var user = document.getElementById('username').value;
    if(pass === "12345678" && user.length < 14){
        document.getElementById('login').innerHTML = "Congrats on knowing your username and password!";
    }else{
        alert("Incorrect username or password");
    }
}