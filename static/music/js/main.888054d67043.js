var ws = new WebSocket("ws://127.0.0.1:5678/");
ws.onmessage = function (event) {
    console.log(event);
    console.log(event.data);
    console.log(event.data.title);
    var result = '<li><a href="' + event.data.url + '">' + event.data.title + '</a></li>';
    document.getElementById('myUL').innerHTML += result;
};
