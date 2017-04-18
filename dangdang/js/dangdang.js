$(function(){
	/*广告关闭按钮*/
	$(".close_btn").bind("click",function(){
		$(".top").slideUp();
	});
	/*送至地点下拉框*/
	$(".nav_left").hover(
		function(){
			$(".nav_left_list").show();
			$(".nav_left .tangle_icon").addClass("tangle_hover");
			$(".nav_left_list").hover(
				function(){
					$(this).show();
					$(".nav_left").addClass("nav_left_hover");
					$(".nav_left .tangle_icon").addClass("tangle_hover");
				},
				function(){
					$(this).hide();
					$(".nav_left").removeClass("nav_left_hover");
					$(".nav_left .tangle_icon").removeClass("tangle_hover");
				}
			);
		},
		function(){
			$(".nav_left_list").hide();
		}
	);
	/*导航栏右侧效果*/
	$(".nav_right>li").hover(
		function(){
			$(".nav_list>li").eq($(this).index()).show().siblings().hide();
		},
		function(){
			$(".nav_list>li").eq($(this).index()).hide();
		}
	);
	$(".phone_dd_css, .phone_popbox").hover(
		function(){
			$(".nav_list>li").eq(0).show();
		},
		function(){
			$(".nav_list>li").eq(0).hide();
		}
	);
	$(".nav_list>li").hover(
		function(){
			if($(this).index()>0){
				$(this).show();
			}
		},
		function(){
			if($(this).index()>0){
				$(this).hide();
			}
		}
	);
	/*搜索框*/
	$(".wrap_search input").focus(function(){
		$(this).val("");
	});
	$(".wrap_search input").blur(function(){
		if(!$(this).val()){
			$(this).val("开学换新 满300减100");
		}
	});
	/*搜索框下拉列表*/
	$(".all_classify").hover(
		function(){
			$(".all_classify_list").show().hover(
				function(){
					$(this).show();
				},
				function(){
					$(this).hide();
				}
			);
		},
		function(){
			$(".all_classify_list").hide();
		}
	);
	/*二级导航栏*/
	$(".left_second_nav>li").hover(
		function(){
			$(".popbox>ul").eq($(this).index()).show().hover(
				function(){
					$(this).show();
					$(".left_second_nav>li").eq($(this).index()).addClass("left_nav_li");
					$(".left_second_nav>li").eq($(this).index()).children("a").addClass("left_nav_a");
				},
				function(){
					$(this).hide();
					$(".left_second_nav>li").eq($(this).index()).removeClass("left_nav_li");
					$(".left_second_nav>li").eq($(this).index()).children("a").removeClass("left_nav_a");
				}
			);
		},
		function(){
			$(".popbox>ul").hide();
		}
	);
	/*banner轮播大图*/
	var bannerBig;
	var bannerIndex1	= 0;
	function showBannerBig(){
		$(".banner_lunbo_big li").eq(bannerIndex1).fadeIn(1000).siblings().fadeOut(1000);
		$(".number_icon a").eq(bannerIndex1).addClass("num_icon_hover").siblings().removeClass("num_icon_hover");
	}
	function autoPlay1(){
		bannerBig	= setInterval(function(){
			if(bannerIndex1==$(".banner_lunbo_big li").length-1){
				bannerIndex1	= -1;
			}
			bannerIndex1++;
			showBannerBig();
		}, 2000);
	}
	autoPlay1();
	$(".banner_lunbo_big").hover(
		function(){
			clearInterval(bannerBig);
			$(this).children(".left_page, .right_page").show();
		},
		function(){
			autoPlay1();
			$(this).children(".left_page, .right_page").hide();
		}
	);
	$(".banner_lunbo_big .left_page").click(function(){
		if(bannerIndex1==0){
			bannerIndex1	= $(".banner_lunbo_big li").length;
		}
		bannerIndex1--;
		showBannerBig();
	});
	$(".banner_lunbo_big .right_page").click(function(){
		if(bannerIndex1==$(".banner_lunbo_big li").length-1){
			bannerIndex1	= -1;
		}
		bannerIndex1++;
		showBannerBig();
	});
	$(".banner_lunbo_big .number_icon a").mouseover(function(){
		bannerIndex1	= $(this).index();
		showBannerBig();
	});
	/*banner轮播小图*/
	var bannerLittle;
	var bannerIndex2	= 0;
	function showBannerLittle(){
		$(".banner_lunbo_little>ul").eq(bannerIndex2).fadeIn(1000).siblings("ul").fadeOut(1000);
	}
	function autoPlay2(){
		bannerLittle	= setInterval(function(){
			if(bannerIndex2==$(".banner_lunbo_little>ul").length-1){
				bannerIndex2	= -1;
			}
			bannerIndex2++;
			showBannerLittle();
		},2000);
	}
	autoPlay2();
	$(".banner_lunbo_little").hover(
		function(){
			clearInterval(bannerLittle);
			$(this).children(".banner_button").show();
		},
		function(){
			autoPlay2();
			$(this).children(".banner_button").hide();
		}
	);
	$(".banner_lunbo_little .banner_button1").click(function(){
		if(bannerIndex2==0){
			bannerIndex2	= $(".banner_lunbo_little>ul").length;
		}
		bannerIndex2--;
		showBannerLittle();
	});
	$(".banner_lunbo_little .banner_button2").click(function(){
		if(bannerIndex2==$(".banner_lunbo_little>ul").length-1){
			bannerIndex2	= -1;
		}
		bannerIndex2++;
		showBannerLittle();
	});
	$(".banner_lunbo_little>ul>li>a").hover(
		function(){
			$(this).children("span").hide();
		},
		function(){
			$(this).children("span").show();
		}
	);
	/*公告栏*/
	var notice1, notice2;
	var noIndex1	= 0, noIndex2	= 0;
	function noticeAutoPlay1(){
		notice1	= setInterval(function(){
			if(noIndex1==$(".notice_title1>li").length-1){
				noIndex1	= -1;
			}
			noIndex1++;
			showNotice1();
		}, 2000);
	}
	noticeAutoPlay1();
	function noticeAutoPlay2(){
		notice2	= setInterval(function(){
			if(noIndex2==$(".notice_title2>li").length-1){
				noIndex2	= -1;
			}
			noIndex2++;
			showNotice2();
		}, 2000);
	}
	noticeAutoPlay2();
	function showNotice1(){
		$(".notice_content1>li").eq(noIndex1).show().siblings().hide();
		$(".notice_title1>li").eq(noIndex1).children("a").addClass("notice_title_hover").parent().siblings().children("a").removeClass("notice_title_hover");
	}
	function showNotice2(){
		$(".notice_content2>li").eq(noIndex2).show().siblings().hide();
		$(".notice_title2>li").eq(noIndex2).children("a").addClass("notice_title_hover").parent().siblings().children("a").removeClass("notice_title_hover");
	}
	$(".notice_title1>li").mouseover(function(){
		noIndex1	= $(this).index();
		showNotice1();
	});
	$(".notice_title2>li").mouseover(function(){
		noIndex2	= $(this).index();
		showNotice2();
	});
	$(".notice_content1").hover(
		function(){
			clearInterval(notice1);
		},
		function(){
			noticeAutoPlay1();
		}
	);
	$(".notice_content2").hover(
		function(){
			clearInterval(notice2);
		},
		function(){
			noticeAutoPlay2();
		}
	);
	/*图书·电子书*/
	$(".wrap_book .book_tab_header .tabs li").mouseover(function(){
		$(this).parent().children("li").children("a").removeClass("tabs_hover");
		$(this).children("a").addClass("tabs_hover");
	});
	/*图书榜单*/
	$(".book_name").mouseover(function(){
		$(this).parent().siblings().children(".book_detail").hide().siblings(".book_name").show().addClass("book_name_css");
		$(this).hide().siblings(".book_detail").show();
	});
});

