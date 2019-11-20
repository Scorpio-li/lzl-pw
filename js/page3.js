/*
 * @authors Ren Xiaofei
 * @date    2014-7-25
 * @version personal website
 */

var btns = $(".content_mod .scroll .three .btn_box li");
var scroll = $(".content_mod .scroll .three .img_mod .scroll_two");
var pages = $(".content_mod .scroll .three .img_mod .scroll_two .introduce");
var left = $(".content_mod .scroll .three .left_box");
var right = $(".content_mod .scroll .three .right_box");
var number = 0;

$.btnsCorlorFn = function(number){
	if (number == 0) {
		btns.eq(0).addClass("btns0");
	} else{
		btns.eq(0).removeClass("btns0");
	}
	if(number == 1){
		btns.eq(1).addClass("btns1");
	}else{
		btns.eq(1).removeClass("btns1");
	}
	if(number == 2){
		btns.eq(2).addClass("btns2");
	}else{
		btns.eq(2).removeClass("btns2");
	}
	if(number == 3){
		btns.eq(3).addClass("btns3");
	}else{
		btns.eq(3).removeClass("btns3");
	}
	if(number == 4){
		btns.eq(4).addClass("btns4");
	}else{
		btns.eq(4).removeClass("btns4");
	}
}

$.slideFn = function(number) {
	$.btnsCorlorFn(number);
	scroll.animate({
		left: -number * $(".content_mod .scroll .three .img_mod .scroll_two .introduce:eq(0)").width()
	});
}


$.startFn = function() {
	if(number <= 4) {
		$.slideFn(number);
		number++;
	} else {
		number = 0;
	}
}

$.timerFun = function() {
	timer = setInterval(function() {
		$.startFn();
	}, 3000);
}
$.timerFun();

btns.on("click", function() {
	number = $(this).index();
	$.slideFn(number);
});

$(".content_mod .scroll .three #left").on("click", function() {
	number--;
	number = number < 0 ? 4 : number;
	$.slideFn(number);
});

$(".content_mod .scroll .three #right").on("click", function() {
	number++;
	number = number > btns.length - 1 ? 0 : number;
	$.slideFn(number);
});

pages.hover(function(){
	clearInterval(timer);
},function(){
	$.timerFun();
});
