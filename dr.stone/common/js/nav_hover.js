var bd= document.getElementById("header_nav-border");
var tw= document.getElementById("twitter");
var myfunc = function () {
	bd.style.width = "60px";
}
tw.addEventListener("mouseover", myfunc);
var myfunc2 = function () {
	bd.style.width = "30px";
}
tw.addEventListener("mouseout", myfunc2);