var btn = document.getElementsByClassName('btn');

for (var i = btn.length - 1; i >= 0; i--) {
	btnAction(btn[i], i);
}

function btnAction(btn1, btn2) {

	btn1.addEventListener("click", function () {
		this.classList.add('active');
		for (var i = btn.length - 1; i >= 0; i--) {
			if (btn2 !== i) {
				if (btn[i].classList.contains('active')) {
					btn[i].classList.remove('active');
				}
			}
		}
	})
}
