var Json;
var username;
var password;
$(function (){
    $.getJSON("json/package.json", function (data) {
        Json = data;
    });
    $("#btn1").click(function () {
        username=$(".number").val();
         password=$(".password").val();
        if(username.length<=0||password.length<=0){
            alert("用户名、密码或关键词不能为空")
            reset1()
        }
        for (var i = 0; i < Json.length; i++) {
            if (username == Json[i].username &&  password== Json[i].password){
               userName();
            }}
    })
    $("#btn2").click(reset1);
});

//重置按钮
function reset1() {
    $(".number").val("");
    $(".password").val("");
}

//提取用户名函数
function userName() {
    document.cookie = "username="+username;//页面间传值
    window.location.href ="chat.html";
}