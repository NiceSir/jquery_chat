var username;
var password;
$(function () {
       if(getData2()=='undefined'){
           window.location.href="index.html"
       }

    $("#btn5").click(function () {
            var chat1=$("#teInput").val();
            var char2=$("#chatbox").val();
            if(char2.length>0){ char2=char2+"\n"+getData2()+":"+chat1;}
           else {
               char2+=chat1
            }
            $("#chatbox").val(char2)
        $("#teInput").val("")

        }
    )
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            $("#btn5").trigger("click",function () {
                var chat1=$("#teInput").val();
                var char2=$("#chatbox").val();
                if(char2.length>0){ char2=char2+"\n"+getData2()+":"+chat1;}
                else {
                    char2+=chat1
                }
                $("#chatbox").val(char2)
                $("#teInput").val("")
            });
        }
    });

})

//得到用户数据
function getData2(){
    username=getCookie("username");
    if (username!="")
    {
        return username;
    }else{
        return "undefined";
    }

}
//循环得到相应的值
function getCookie(cname)
{
    var ss = document.cookie;
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
            return c.substring(name.length,c.length);
    }
    return "";
}