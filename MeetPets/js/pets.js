$(function(){
	/*宠物美容*/
	var timer	= setInterval(move,100);
	var next	= 1;
	init();
	function move(){
		var vac	= getLeft(1-next);
		go(1-next, vac);
		var van	= 0;
		if(vac<=$(".show-wrap").width()-2440){
			van	= getLeft(next);
			go(next, van);
			if(vac<=-2440){
				next	= 1-next;
				init();
			}
		}
		
	}
	function init(){
		$(".beautify-example").eq(next).css("left", $(".show-wrap").width());
	}
	function getLeft(i){
		var le	= $(".beautify-example").eq(i).css("left");
		return le.substring(0, le.indexOf('p'));
	}
	function go(i, va){
		$(".beautify-example").eq(i).css("left", parseInt(va-15)+"px");
	}
	$(".show-wrap").hover(
		function(){
			clearInterval(timer);
		},
		function(){
			timer	= setInterval(move,100);
		}
	);
	
	/*查看图片详情*/
	$(".show-image>li").click(function(){
		$(this).addClass("now").siblings().removeClass("now");
		$(".show-detail>li").eq($(this).index()).show().siblings().hide();
	});
	$(".pop-show-close").click(function(){
		$(".pop-show").hide();
	});
	$(".petsBreed a").click(function(){
		$(".pop-show").show();
	});
});
