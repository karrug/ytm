var PLAYER;

function toggle(node) {
    if (!PLAYER || PLAYER.paused) {
        PLAYER = node.firstChild;
        PLAYER.nextSibling.style.color = '#6D6D6D';
        PLAYER.play();
    } else {
        PLAYER.pause();
        PLAYER.nextSibling.style.color = '#000000';
        if (PLAYER !== node.firstChild) {
            PLAYER = node.firstChild;
            PLAYER.nextSibling.style.color = '#6D6D6D';
            PLAYER.play();
        }
    }
}

var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
    data = JSON.parse(event.data)
    var result = '<li onclick="toggle(this)"><audio src="' + data.url + '" preload="auto"></audio><a href="#">' + data.title + '</a></li>';
    document.getElementById('myUL').insertAdjacentHTML('beforeend', result);
};
