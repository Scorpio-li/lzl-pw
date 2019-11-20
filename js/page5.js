/*
 * @authors Ren Xiaofei
 * @date    2014-7-25
 * @version personal website
 */

function message() {
	
	var msg = document.querySelector("#msg");
	var formList = document.querySelector("#form_list");
	var input = formList.querySelectorAll("input");
	
	//对应每个input的布尔值
	var submitAble1 = false;
	var submitAble2 = false;
	var submitAble3 = false;
	
	var regEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	
	function eachCheck(j) {
		for (var i = 0; i < input.length - 1; i++) {
			//存储每一个input
			var curInput = input[j];
			//获取type更改为获取name
			var type = curInput.getAttribute("name");
			//获取value
			var val = curInput.value;
			//通过name判断是哪个input，然后再判断是否为空、是否匹配正则规则
			switch (type) {
				case "name":
					if (val === "") {
						curInput.style.borderColor = "#f16d2a";
						submitAble1 = false;
					} else {
						curInput.style.borderColor = "#2FA0EC";
						submitAble1 = true;
					}
					break;
				case "mail":
					if (val === "" || !regEmail.test(val)) {
						curInput.style.borderColor = "#f16d2a";
						submitAble2 = false;
					} else {
						curInput.style.borderColor = "#2FA0EC";
						submitAble2 = true;
					}
					break;				
			}
		}
		
	}
	
	var msg = document.querySelector("#msg");
	var msgVal = msg.value;
	//留言内容判断
	function msgFn(){	
		var msgVal = msg.value;
		if (msgVal == "") {
			msg.style.borderColor = "#f16d2a";
			submitAble3 = false;		
		} else {
			msg.style.borderColor = "#2FA0EC";
			submitAble3 = true;			
		}
	}

	//提交留言
	function submitFn() {
		//键盘抬起时
		for (var i = 0; i < input.length; i++) {
			input[i].j = i;
			input[i].onkeyup = function() {
				eachCheck(this.j);
			}
			input[i].onblur = function() {
				eachCheck(this.j);
			}
		}
		
		//留言内容判断
		msg.onkeyup = function() {
			msgFn();
		}
		msg.onblur = function() {
			msgFn();
		}		
	}
	
	formList.onsubmit =  function(){
		console.log(submitAble1);
		console.log(submitAble2);
		console.log(submitAble3);
		if (submitAble1 && submitAble2 && submitAble3) {
			return true;
		}else{
			alert("填写有错误哦");
			return false;
		}
	}
	
	//初始化
	function init() {
		submitFn();
	}
	init();
}
message();