var Json;

$(function () {
    $("#btn3").click(function () {
        var username1=$(".number1").val();
        var password1=$(".password1").val();
        var keyword1=$(".keyword1").val();
        if(username1<=0||password1<=0||keyword1<=0){
            alert("用户名、密码或关键词不能为空")
            reset1()
        }
        $.getJSON("json/package.json", function (data) {
            Json = data;
        });})
    $("#btn2").click(reset1);
});

//重置按钮
function reset1() {
    $(".number1").val("");
    $(".password1").val("");
    $(".keyword1").val("");
}
