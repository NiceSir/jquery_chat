var Json;

$(function () {
    $("#btn3").click(function () {
        var username1=$(".number1").val();
        var password1=$(".password1").val();
        var keyword1=$(".keyword1").val();
        if(username1.length<=0||password1.length<=0||keyword1.length<=0){
            alert("用户名、密码或关键词不能为空")
            reset1();
        }else{
			$.getJSON("json/package.json", function (data) {
            Json = data;
        });
		for (var i = 0; i < Json.length; i++) {
            if (username === Json[i].username &&  password=== Json[i].password){
				alert("正在为您跳转");
               userName();
            }else if(username === Json[i].username&&password!= Json[i].password){
				alert("该用户名已被使用，请重新修改")
			}else{
				 $.ajax({
                    url: "json/package.json",
                    type: "POST",
                    datatype:"JSON",
                    data: {"username":username1,"password":password1,"keyword":keyword1},
                    success: function (data) {
                        console.log("111");
                    },
                    error: function () {
                        alert("提交失败！");
                    }
                });
			}
			}
		})
		})
		}   
    $("#btn2").click(reset1);
});

//重置按钮
function reset1() {
    $(".number1").val("");
    $(".password1").val("");
    $(".keyword1").val("");
}
