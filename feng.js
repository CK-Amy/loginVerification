		
		
		var btn = document.getElementById("reg");
		//监听点击事件
		btn.addEventListener("tap", function() {
			if($("#password").val().length > 1 && $("#validCode").val().length > 1 && $("#phone").val().length > 1) {
				feng.name();
				feng.Idcard();
				feng.password();
				feng.phone();
				feng.code();
			} else {
				alert('输入有误请重新输入');
			}
		})
var feng = {
	
	all() {
		
	},
	//昵称验证
	name() {
		//昵称不小于2位，不大于10位
		if($("#name").val().length > 2 && $("#name").val().length < 10) {
			console.log("昵称对了");
		} else {
			alert('昵称不能少于两位大于10位');
		}
	},
	//身份证验证
	Idcard() {
		var cardId = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。 
		if(!cardId.test(card.value)) {
			//							card = card.toUpperCase(); 
			alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');

			return false;
		} else {
			console.log("right")
		}
	},
	//密码验证
	password() {
		//密码是否大于等于6小于等于12
		if(($("#password").val().length > 6 || $("#password").val().length == "6") || ($("#password").val().length < 12 || $("#password").val().length == "12")) {
			console.log("密码对了");
		} else {
			alert('密码不能小于6不能大于12');
		}
	},
	eq(){
		if(($("#password").val().length > 6 || $("#password").val().length == "6") && ($("#password").val().length < 12 || $("#password").val().length == "12")) {
						var a = $("#password").val();
						var b = $("#password_confirm").val();
						if(a == b) {
							//ajax判断旧密码是否正确
							alert("修改成功");
						} else {
							alert("新密码输入有误请重新输入");
						}
					} else {
						alert('密码不能小于6不能大于12');
					}
				} else {
					alert("输入内容有误，请重新输入");
				}

	},
	//手机号码验证
	phone() {
		//手机号正则后是否等于11
		var myRegshouji = /^[0-9]{11}$/;
		if(!myRegshouji.test(phone.value)) {
			return mui.toast("手机号码不正确");
		} else {
			if($("#phone").val().length == "11") {
				console.log("手机号对了");
			} else {
				alert('手机号码格式错误');
			}

		}
	},
	//验证码验证
	code() {
		//再判断验证码是否等于6位
		if($("#phone").val().length == "6") {
			console.log("验证码对了");
		} else {
			alert('验证码格式错误');
		}
	}
}