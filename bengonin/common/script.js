
        var button = document.getElementById("mybutton");
        var youtube = document.getElementById("youtube_content");
        var ollcontent = document.getElementById("oll");
        var myfunc = function() {
            youtube.style.display = "none";
            oll.style.display = "none";
        }

        button.addEventListener("click", myfunc);

        var button2 = document.getElementById("yt_button");
        var myfunc2 = function() {
            youtube.style.display = "block";
            oll.style.display = "block";
        }

        button2.addEventListener("click", myfunc2);
