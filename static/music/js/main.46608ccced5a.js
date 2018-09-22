function toggle(node) {
    console.log(node);
    if (node.firstChild.paused) {
        node.firstChild.play();
    } else {
        node.firstChild.pause();
    }
}

var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
    data = JSON.parse(event.data)
    var result = '<li onclick="toggle(this)"><audio src="' + data.url + '" preload="auto" controls></audio><a href="#">' + data.title + '</a></li>';
    document.getElementById('myUL').insertAdjacentHTML('beforeend', result);
};
