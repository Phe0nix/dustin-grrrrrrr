var play = document.querySelectorAll("button"),
            audioElmnt = document.querySelectorAll("audio");
        for (var i = 0; i < play.length; i++) {
            play[i].onclick = function () {
                audioElmnt.forEach(function (el) {
                    el.pause();
                    el.currentTime = 0;
                });
                this.nextElementSibling.play();
            }
        }
