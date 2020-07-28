var oll = document.getElementById("oll");

// ボタンのDOM要素を取得
var modal = document.getElementsByClassName('modal_content');
var content = document.getElementsByClassName('content');
for (var i = content.length - 1; i >= 0; i--) {
	contentAction(content[i], i);
}

function contentAction(contentDOM, contentId) {
	contentDOM.addEventListener("click", function () {
		for (var i = modal.length - 1; i >= 0; i--) {
			if (contentId == i) {
				oll.style.display = "block";
				modal[i].style.display = "block";
			}
		}
	})
}

var btn = document.getElementsByClassName('close_btn');
for (var i = btn.length - 1; i >= 0; i--) {
	btnAction(btn[i]);
}

function btnAction(btnDOM) {
	btnDOM.addEventListener("click", function () {
		oll.style.display = "none";
		for (var i = modal.length - 1; i >= 0; i--) {
			modal[i].style.display = "none";
		}
	})
}