var ollcontent = document.getElementById("oll");

var close_btn1 = document.getElementById("close_btn_01");
var close_btn2 = document.getElementById("close_btn_02");
var close_btn3 = document.getElementById("close_btn_03");
var close_btn4 = document.getElementById("close_btn_04");
var close_btn5 = document.getElementById("close_btn_05");
var close_btn6 = document.getElementById("close_btn_06");
var close_btn7 = document.getElementById("close_btn_07");
var close_btn8 = document.getElementById("close_btn_08");
var close_btn9 = document.getElementById("close_btn_09");
var close_btn10= document.getElementById("close_btn_10");

var modal1 = document.getElementById("modal_content_01");
var modal2 = document.getElementById("modal_content_02");
var modal3 = document.getElementById("modal_content_03");
var modal4 = document.getElementById("modal_content_04");
var modal5 = document.getElementById("modal_content_05");
var modal6 = document.getElementById("modal_content_06");
var modal7 = document.getElementById("modal_content_07");
var modal8 = document.getElementById("modal_content_08");
var modal9 = document.getElementById("modal_content_09");
var modal10 = document.getElementById("modal_content_10");

var close_myfunc1 = function () {
	oll.style.display = "none";
	modal1.style.display = "none";
	modal2.style.display = "none";
	modal3.style.display = "none";
	modal4.style.display = "none";
	modal5.style.display = "none";
	modal6.style.display = "none";
	modal7.style.display = "none";
	modal8.style.display = "none";
	modal9.style.display = "none";
	modal10.style.display = "none";
}
close_btn1.addEventListener("click", close_myfunc1);
close_btn2.addEventListener("click", close_myfunc1);
close_btn3.addEventListener("click", close_myfunc1);
close_btn4.addEventListener("click", close_myfunc1);
close_btn5.addEventListener("click", close_myfunc1);
close_btn6.addEventListener("click", close_myfunc1);
close_btn7.addEventListener("click", close_myfunc1);
close_btn8.addEventListener("click", close_myfunc1);
close_btn9.addEventListener("click", close_myfunc1);
close_btn10.addEventListener("click", close_myfunc1);



var open_btn1 = document.getElementById("content_01");
var open_btn2 = document.getElementById("content_02");
var open_btn3 = document.getElementById("content_03");
var open_btn4 = document.getElementById("content_04");
var open_btn5 = document.getElementById("content_05");
var open_btn6 = document.getElementById("content_06");
var open_btn7 = document.getElementById("content_07");
var open_btn8 = document.getElementById("content_08");
var open_btn9 = document.getElementById("content_09");
var open_btn10 = document.getElementById("content_10");

var open_myfunc1 = function () {
	oll.style.display = "block";
	modal1.style.display = "block";
}
open_btn1.addEventListener("click", open_myfunc1);

var open_myfunc2 = function () {
	oll.style.display = "block";
	modal2.style.display = "block";
}
open_btn2.addEventListener("click", open_myfunc2);

var open_myfunc3 = function () {
	oll.style.display = "block";
	modal3.style.display = "block";
}
open_btn3.addEventListener("click", open_myfunc3);

var open_myfunc4 = function () {
	oll.style.display = "block";
	modal4.style.display = "block";
}
open_btn4.addEventListener("click", open_myfunc4);

var open_myfunc5 = function () {
	oll.style.display = "block";
	modal5.style.display = "block";
}
open_btn5.addEventListener("click", open_myfunc5);

var open_myfunc6 = function () {
	oll.style.display = "block";
	modal6.style.display = "block";
}
open_btn6.addEventListener("click", open_myfunc6);

var open_myfunc7 = function () {
	oll.style.display = "block";
	modal7.style.display = "block";
}
open_btn7.addEventListener("click", open_myfunc7);

var open_myfunc8 = function () {
	oll.style.display = "block";
	modal8.style.display = "block";
}
open_btn8.addEventListener("click", open_myfunc8);

var open_myfunc9 = function () {
	oll.style.display = "block";
	modal9.style.display = "block";
}
open_btn9.addEventListener("click", open_myfunc9);

var open_myfunc10 = function () {
	oll.style.display = "block";
	modal10.style.display = "block";
}
open_btn10.addEventListener("click", open_myfunc10);

