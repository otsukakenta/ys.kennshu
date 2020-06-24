var images = document.getElementsByTagName('img');
var percent = document.getElementById('percent-text');
var gauge = document.getElementById('gauge');
var loadingBg = document.getElementById('loadingBg');
var loading = document.getElementById('loading'); //
var imgCount = 0;
var baseCount = 0;
var current;
var lord = document.getElementById('load_icon');
for (var i = 0; i < images.length; i++) {
	var img = new Image();
	img.onload = function () {
		imgCount += 1;
	}
	img.onerror = function () {
		imgCount += 1;
	}
	img.src = images[i].src;
};

var nowLoading = setInterval(function () {
		if (baseCount <= imgCount) {
			current = Math.floor(baseCount / images.length * 100);
			percent.innerHTML = current;
			if (current >= 30) {
				gauge.style.background = "center / contain no-repeat url(../image/lord02.png)";
			}
			if (current >= 60) {
				gauge.style.background = "center / contain no-repeat url(../image/lord03.png)";
			}
			baseCount += 1;

			if (baseCount == images.length) {
				loadingBg.style.display = 'none';
				loading.style.display = 'none';
				clearInterval(nowLoading);
			}
		}
	},
	50);
