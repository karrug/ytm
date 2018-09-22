var CURRENT = {};

function toggle(node) {
    if (CURRENT.paused) {
        CURRENT = node.firstChild;
        CURRENT.play();
    } else {
        CURRENT.pause();
        if (CURRENT !== node.firstChild) {
            CURRENT = node.firstChild;
            CURRENT.play();
        }
    }
}

var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
    data = JSON.parse(event.data)
    var result = '<li onclick="toggle(this)"><audio src="' + data.url + '" preload="auto"></audio><a href="#">' + data.title + '</a></li>';
    document.getElementById('myUL').insertAdjacentHTML('beforeend', result);
};
