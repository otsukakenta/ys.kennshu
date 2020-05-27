var button = document.getElementById("mybutton");
var youtube = document.getElementById("youtube_content");
var ollcontent = document.getElementById("oll");
var youtube2 = document.getElementById("youtube_content2");

var myfunc = function () {
	youtube.style.display = "none";
	oll.style.display = "none";
	youtube2.style.display = "none";
}
button.addEventListener("click", myfunc);


var button2 = document.getElementById("yt_button");
var button5 = document.getElementById("yt_button3");
var myfunc2 = function () {
	youtube.style.display = "block";
	oll.style.display = "block";
	youtube2.style.display = "none";
}
button2.addEventListener("click", myfunc2);
button5.addEventListener("click", myfunc2);



var button3 = document.getElementById("mybutton2");
var myfunc3 = function () {
	youtube.style.display = "none";
	oll.style.display = "none";
	youtube2.style.display = "none";
}
button3.addEventListener("click", myfunc3);

var button4 = document.getElementById("yt_button2");
var button6 = document.getElementById("yt_button4");
var myfunc4 = function () {
	youtube.style.display = "none";
	oll.style.display = "block";
	youtube2.style.display = "block";
}
button4.addEventListener("click", myfunc4);
button6.addEventListener("click", myfunc4);
