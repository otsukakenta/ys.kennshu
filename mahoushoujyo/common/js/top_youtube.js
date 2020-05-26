var youtube = document.getElementById("main_youtube");
var thumb = document.getElementById("main_youtube-eria");
var button = document.getElementById("yt_button");
var button2 = document.getElementById("yt_button2");
var myfunc = function () {
	youtube.style.display = "block";
	thumb.style.display = "none";
}
button.addEventListener("click", myfunc);
button2.addEventListener("click", myfunc);

