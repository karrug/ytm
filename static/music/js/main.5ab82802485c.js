var PLAYER;

function toggle() {
    var node = this;
    if (!PLAYER || PLAYER.paused) {
        PLAYER = node.firstChild;
        PLAYER.nextSibling.style.color = 'gray';
        PLAYER.play();
    } else {
        PLAYER.pause();
        PLAYER.nextSibling.style.color = '#000000';
        if (PLAYER !== node.firstChild) {
            PLAYER = node.firstChild;
            PLAYER.nextSibling.style.color = 'gray';
            PLAYER.play();
        }
    }
}

var ws_url = "ws://" + window.location.hostname + ":5678/";
var ws = new WebSocket(ws_url);
ws.onmessage = function (event) {
    data = JSON.parse(event.data)
    if (data.extracted === false) {
        var result = '<li id="' + data.id + '"><a href="#">' + data.title + '</a></li>';
        document.getElementById('myUL').insertAdjacentHTML('beforeend', result);
    } else {
        console.log(data);
        var audio = '<audio src="' + data.url + '" preload="auto"></audio>';
        var audio = document.createElement('audio');
        audio.src = data.url;
        audio.preload = 'auto';
        var li = document.getElementById(data.id);
        li.addEventListener('click', toggle);
        li.insertBefore(audio, li.firstChild);
    }
};
