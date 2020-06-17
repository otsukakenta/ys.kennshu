var button01 = document.getElementByclassname("btn01");
var button02 = document.getElementByclassname("btn02");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var myfunc = function () {
	list1.style.color = "#f6821e";
	list2.style.color = "white";
	button01.style.transform = "translateX(-25px)";
	button02.style.transform = "translateX(0px)";
}
list1.addEventListener("click", myfunc);


var button01 = document.getElementByclassname("btn01");
var button02 = document.getElementByclassname("btn02");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var myfunc2 = function () {
	list1.style.color = "white";
	list2.style.color = "#f6821e";
	button01.style.transform = "translateX(0px)";
	button02.style.transform = "translateX(-25px)";
}
list2.addEventListener("click", myfunc2);
