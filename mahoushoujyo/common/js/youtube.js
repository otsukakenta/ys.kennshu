var youtube = document.getElementById("youtube_content");
var oll = document.getElementById("oll");
var youtube2 = document.getElementById("youtube_content2");


var ytbtn = document.getElementsByClassName('yt_button');
for (var i = ytbtn.length - 1; i >= 0; i--) {
	ytbtnAction(ytbtn[i], i);
}

function ytbtnAction(ytbtnDOM, btnId) {
	ytbtnDOM.addEventListener("click", function () {
		if (btnId < 2) {
			youtube.style.display = "block";
			oll.style.display = "block";
			youtube2.style.display = "none";
		} else {
			youtube.style.display = "none";
			oll.style.display = "block";
			youtube2.style.display = "block";
		}
	})
}

var btn = document.getElementsByClassName('mybutton');
for (var i = btn.length - 1; i >= 0; i--) {
	btnAction(btn[i]);
}

function btnAction(btnDOM) {
	btnDOM.addEventListener("click", function () {
		youtube.style.display = "none";
		oll.style.display = "none";
		youtube2.style.display = "none";
	})
}
