$(function(){
	$("#main_nav a").click(function(){
		$("#main_image-content img").before("<img src='"+$(this).attr("href")+"' alt=''>");
		$("#main_image-content img:last").fadeOut("fast",function(){
			$(this).remove();
		});
		return false;
	});
});
