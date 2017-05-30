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