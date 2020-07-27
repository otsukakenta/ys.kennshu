var oll = document.getElementById("oll");
var close_btn = document.getElementById("close_btn");
var modal = document.getElementById("modal_content");
var close_myfunc = function () {
	oll.style.display = "none";
	modal.style.display = "none";
}
close_btn.addEventListener("click", close_myfunc);

var link = document.getElementsByClassName('link');
for (var i = link.length - 1; i >= 0; i--) {
	linkAction(link[i]);

}

function linkAction(linkbtn) {
	linkbtn.addEventListener("click", function () {
		oll.style.display = "block";
		modal.style.display = "block";
	})
}
