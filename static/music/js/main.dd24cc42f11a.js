var lis = document.getElementsByTagName('li');

function set_audio(node, videoid) {
    var xmlhttp = new XMLHttpRequest();
    var url = "/src/" + videoid;
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            node.firstChild.src = myArr.src;
            node.addEventListener('click', function (e) {
                node.firstChild.play();
            });
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

for (var i=0; i<lis.length; i++) {
    var videoid = lis[i].getAttribute('data-id');
    set_audio(lis[i], videoid);
}
