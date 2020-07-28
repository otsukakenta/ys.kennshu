var light = document.getElementsByClassName('light');

for (var i = light.length - 1; i >= 0; i--) {
	lightAction(light[i], i);
}

function lightAction(lightDOM, lightId) {

	lightDOM.addEventListener("click", function () {
		this.classList.add('active');
		for (var i = light.length - 1; i >= 0; i--) {
			if (lightId !== i) {
				if (light[i].classList.contains('active')) {
					light[i].classList.remove('active');
				}
			}
		}
	})
}
