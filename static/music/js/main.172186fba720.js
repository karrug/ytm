var PLAYER;

function toggle() {
    if (!PLAYER || PLAYER.paused) {
        PLAYER = this.firstChild;
        PLAYER.nextSibling.style.color = 'blue';
        PLAYER.play();
    } else {
        PLAYER.pause();
        PLAYER.nextSibling.style.color = '#000000';
        if (PLAYER !== this.firstChild) {
            PLAYER = this.firstChild;
            PLAYER.nextSibling.style.color = 'blue';
            PLAYER.play();
        }
    }
}


function set_audio(node, videoid) {
    var xmlhttp = new XMLHttpRequest();
    var url = "/src/" + videoid;
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            node.firstChild.src = myArr.src;
            node.addEventListener('click', toggle);
            node.style.cursor = 'pointer';
            node.firstChild.nextSibling.style.color = 'black';
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var lis = document.getElementsByTagName('li');
for (var i=0; i<lis.length; i++) {
    var videoid = lis[i].getAttribute('data-id');
    set_audio(lis[i], videoid);
}
