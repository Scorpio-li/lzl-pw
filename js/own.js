/*
 * @authors Ren Xiaofei
 * @date    2014-7-25
 * @version personal website
 */

(function($) {
	//所有图片预加载
	var imgdefereds = [];
	$('img').each(function() {
		var dfd = $.Deferred();
		$(this).bind('load', function() {
			dfd.resolve();
		}).bind('error', function() {
			//图片加载错误，加入错误处理  
			alert("图片加载错误");
		})
		if(this.complete) setTimeout(function() {
			dfd.resolve();
		}, 1000);
		imgdefereds.push(dfd);
	});
	$.when.apply(null, imgdefereds).done(function() {
		$(".loading").hide();
		//$("header").show();
		$(".btn_list").show();
		$(".content_mod").show();
		num = 0;
		allFn();
	});

	function init() {

	}

	function allFn() {
		//例子元素设置
		$(document).ready(function() {
			$('#particles').particleground({
				dotColor: '#5cbdaa',
				lineColor: '#5cbdaa'
			});
		});

		var num = 0;
		var index = 0;
		
		$.navFn = function(num){
			$("header nav a").eq(num).addClass("nav_a").siblings().removeClass("nav_a");
			$('header nav .nav_line').stop().animate({
				left: (num * 23) + "%"
			},888);
		}
		
		$("header nav a").each(function(index){
			$(this).on("click",function() {
				num = index;
				$.navFn(num);
			});
		});
		
		//a的锚点
		$('header nav a').each(function(index){
			$(this).on("click",function() {
				num = index;
				$.slideFun(num);
			});
		});
		
		
		//首页下面字出现
		$(".content_mod .scroll .one span").delay(7500).fadeToggle(0);

		$(".content_mod .scroll .one .mouse").click(function() {
			num += 1;
			$.slideFun(num);
			//头部出现
			$("header").show().animate({
				left: 0,
				width: 100 + "%"
			}, 1000);
			$.page2_showFn();
		});

		$(".content_mod .scroll .down").click(function() {
			num++;
			if(num >= 4) {
				num = 4;
			}
			$.slideFun(num);
		});

		//返回顶部
		$(".content_mod .scroll .five #down").on("click", function() {
			var timer = setInterval(function() {
				num--;
				$.slideFun(num);
				if(num == 0) {
					clearInterval(timer);
				}
			}, 500);
			//			$("body").stop().animate({
			//				scrollTop: "0px"
			//			}, 2000);
		});

		$.slideFun = function(num) {
			$("body").animate({
				scrollTop: num * $(".page:eq(0)").height()
			}, 1000);
			setTimeout(function() {
				$(".btn_list li").eq(num).addClass("active").siblings().removeClass("active");
			}, 1000);
		}

		$(window).on('mousewheel', function(ev) {
			ev.preventDefault();
		});

		//鼠标滑动处理
		$("body").on('mousewheel', function(ev) {
			index++;
			var scrolls = ev.originalEvent.wheelDelta;
			if(scrolls > 0 && index > 5) {
				index = 0;
				console.log("向上");
				num--;
				if(num <= 0) {
					num = 0;
					$("header").hide().animate({
						left: 50 + "%",
						width: 0
					}, 1000);
				}
				$.slideFun(num);
				$.navFn(num);
			} else if(scrolls < 0 && index > 5) {
				index = 0;
				console.log("向下");
				num++;
				if(num >= 4) {
					num = 4;
				}
				$.slideFun(num);
				$.navFn(num);

				//头部出现
				$("header").show().animate({
					left: 0,
					width: 100 + "%"
				}, 1000);
				//page2出现
				$.page2_showFn();
				//medio处理
//				$.medioTwoFn();	
			}
		});

		$.page2_showFn = function() {
			$("#page_two1").addClass("ul_one");
			$("#page_two2").addClass("ul_two");
			$("#page_two3").addClass("ul_three");
			$("#page_two4").addClass("ul_four");
			$("#page_two5").addClass("ul_five");
		}

		$(".content_mod .scroll .two ul li").eq(0).hover(function() {
			$(this).find("img").attr("src", "img/姓名0.png");
		}, function() {
			$(this).find("img").attr("src", "img/姓名.png");
		});
		$(".content_mod .scroll .two ul li").eq(1).hover(function() {
			$(this).find("img").attr("src", "img/周龄0.png");
		}, function() {
			$(this).find("img").attr("src", "img/周龄-01.png");
		});
		$(".content_mod .scroll .two ul li").eq(2).hover(function() {
			$(this).find("img").attr("src", "img/地点0.png");
		}, function() {
			$(this).find("img").attr("src", "img/地点.png");
		});
		$(".content_mod .scroll .two ul li").eq(3).hover(function() {
			$(this).find("img").attr("src", "img/职业0.png");
		}, function() {
			$(this).find("img").attr("src", "img/职业.png");
		});
		$(".content_mod .scroll .two ul li").eq(4).hover(function() {
			$(this).find("img").attr("src", "img/学历0.png");
		}, function() {
			$(this).find("img").attr("src", "img/学历.png");
		});

		//page4效果
		$.worksFn = function() {
			$(".content_mod .scroll .four .own_works .pos_box").hover(function() {
				$(this).find("span").stop().animate({
					height: 100 + "%"
				}, 888);
				$(this).find(".p_box").stop().animate({
					bottom: 70 + "%"
				}, 888);
			}, function() {
				$(this).find("span").stop().animate({
					height: 40 + "px"
				}, 888);
				$(this).find(".p_box").stop().animate({
					bottom: 0
				}, 888);
			});
		}
		$.worksFn();

		//medio查询处理
		$.medioFn = function() {
			window.onresize = function() {
				var width = $(window).width();

				//page2
				if(width < 550) {
					$("#page_two1").removeAttr("class");
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
					$("#page_two4").removeAttr("class");
					$("#page_two5").removeAttr("class");
				}else if(width < 730){
					$("#page_two1").removeAttr("class");
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
					$("#page_two4").removeAttr("class");
					$("#page_two5").removeAttr("class");
				}else if(width <= 1100) {
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
				}else{
					$("#page_two1").attr("class","ul2_one");
					$("#page_two2").attr("class","ul2_two");
					$("#page_two3").attr("class","ul2_three");
					$("#page_two4").attr("class","ul2_four");
					$("#page_two5").attr("class","ul2_five");
				}
				
				//psge4
				if (width <= 600) {
					$('.content_mod .scroll .four .own_works .pos_box span').css({"height":"30px"});
					$('.content_mod .scroll .four .own_works .pos_box .p_box p').css("display","none");
					$('.content_mod .scroll .four .own_works .pos_box .p_box a').css("top","50px");
				}else{
					$('.content_mod .scroll .four .own_works .pos_box span').css({"height":"40px"});
					$('.content_mod .scroll .four .own_works .pos_box .p_box p').css("display","block");
					$('.content_mod .scroll .four .own_works .pos_box .p_box a').css("top","150px");
				}
				
				
			}
		}
		$.medioFn();
		
		//medio查询 滑轮处理
		$.medioTwoFn = function(){
			var width = $(window).width();
				//page2
				if(width <= 550) {
					$("#page_two1").removeAttr("class");
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
					$("#page_two4").removeAttr("class");
					$("#page_two5").removeAttr("class");
				}else if(width <= 730){
					$("#page_two1").removeAttr("class");
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
					$("#page_two4").removeAttr("class");
					$("#page_two5").removeAttr("class");
				}else if(width <= 1100) {
					$("#page_two1").removeAttr("class");
					$("#page_two2").removeAttr("class");
					$("#page_two3").removeAttr("class");
					$("#page_two4").removeAttr("class");
					$("#page_two5").removeAttr("class");
				}else{
					$("#page_two1").attr("class","ul2_one");
					$("#page_two2").attr("class","ul2_two");
					$("#page_two3").attr("class","ul2_three");
					$("#page_two4").attr("class","ul2_four");
					$("#page_two5").attr("class","ul2_five");
				}
				
		}
		
		
		//点击btn处理
		$(".btn_list li").on("click", function() {
			num = $(this).index();
			$.slideFun(num);
			$.navFn(num);
			//头部出现
			$("header").show().animate({
				left: 0,
				width: 100 + "%"
			}, 1000);
		});

	}

})(jQuery)