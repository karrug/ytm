var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
    data = JSON.parse(event.data)
    var result = '<li><audio src="' + data.url + '" controls></audio><a href="' + data.url + '">' + data.title + '</a></li>';
    document.getElementById('myUL').innerHTML += result;
};
