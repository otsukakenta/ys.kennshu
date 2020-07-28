var button01 = document.getElementById("btn01");
var button02 = document.getElementById("btn02");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var bd1 = document.getElementById("before1");
var bd2 = document.getElementById("before2");
var main = document.getElementById("main");
var myfunc = function () {
	list1.style.color = "#f6821e";
	list2.style.color = "white";
	button01.style.transform = "translateX(0px)";
	button02.style.transform = "translateX(-25px)";
	bd1.style.opacity = "1";
	bd1.style.backgroundColor = "#f6821e";
	bd2.style.opacity = "0";
	bd2.style.backgroundColor = "white";
	main.style.height = "1200px";
}
list1.addEventListener("click", myfunc);

var myfunc2 = function () {
	list1.style.color = "white";
	list2.style.color = "#f6821e";
	button01.style.transform = "translateX(-25px)";
	button02.style.transform = "translateX(0px)";
	bd1.style.opacity = "0";
	bd1.style.backgroundColor = "white";
	bd2.style.opacity = "1";
	bd2.style.backgroundColor = "#f6821e";
	main.style.height = "1600px";
}
list2.addEventListener("click", myfunc2);

var myfunc3 = function () {
	bd2.style.opacity = "1";
	button02.style.transform = "translateX(0px)";
}
button02.addEventListener("mouseover", myfunc3);

var myfunc4 = function () {
	bd1.style.opacity = "1";
	button01.style.transform = "translateX(0px)";
}
button01.addEventListener("mouseover", myfunc4);
