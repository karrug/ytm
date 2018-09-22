var PLAYER;
var PLAYER_SETTIMEOUT;
var PLAY_NOW;

function toggle(node) {
    PLAY_NOW = node.getAttribute('data-id');
    function repeat(node) {
        if (node.firstChild.src && PLAY_NOW === node.getAttribute('data-id')) {
            clearTimeout(PLAYER_SETTIMEOUT);
            if (!PLAYER || PLAYER.paused) {
                PLAYER = node.firstChild;
                PLAYER.nextSibling.style.color = 'blue';
                PLAYER.play();
            } else {
                PLAYER.pause();
                PLAYER.nextSibling.style.color = '#000000';
                if (PLAYER !== node.firstChild) {
                    PLAYER = node.firstChild;
                    PLAYER.nextSibling.style.color = 'blue';
                    PLAYER.play();
                }
            }
        } else if (PLAY_NOW === node.getAttribute('data-id')) {
            setTimeout(repeat, 0, node);
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
