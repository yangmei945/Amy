$(function(){	
	/*banner 轮播*/
	var slide_time;
	var index	= 0;
	function slidePlay(){
		var i=0;
		slide_time	= setInterval(function(){
			if(i==$(".slide_image li").length){
				i	= 0;
			}
			console.log(i);
			$(".slide_image li").eq(i).fadeIn(1000).siblings().fadeOut(1000);
			$(".slide_icon span").eq(i).addClass("slide_css").siblings().removeClass("slide_css");
			index	= i;
			i++;
		},5000);
	}
	slidePlay();
	$(".slide_image").hover(
		function(){
			clearInterval(slide_time);
		},
		function(){
			slidePlay();
		}
	);
	$(".banner").hover(
		function(){
			$(".slide").show();
		},
		function(){
			$(".slide").hide();
		}
	);
	$(".pre_slide").bind("click", function(){
		if(index==0){
			index	= $(".slide_image li").length;
		}
		index--;
		$(".slide_image li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".slide_icon span").eq(index).addClass("slide_css").siblings().removeClass("slide_css");
	});
	$(".next_slide").bind("click", function(){
		if(index==$(".slide_image li").length-1){
			index	= -1;
		}
		index++;
		$(".slide_image li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$(".slide_icon span").eq(index).addClass("slide_css").siblings().removeClass("slide_css");
	});
	$(".slide_icon span").bind("click", function(){
		$(this).addClass("slide_css").siblings().removeClass("slide_css");
		$(".slide_image li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
	})
});
