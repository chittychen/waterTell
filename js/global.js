$(function(){
	pageSize()
});

function pageSize(){
	var w = window.innerWidth;
	var h = window.innerHeight;
    $(".page").height(h +"px").width(w + "px");
}

var startTime = 20161201;
var endTime = 20161215;
$(function(){
    var Request = new Object();
    Request = GetRequest();
    var memberID = Request['mid'];  //获取memberID参数
    var token = Request['token'];  //获取token参数

    // memberID = 42;
    // token = "b2ffedee0255c143ac4d3ae2211c79a4fee72541";
    if(memberID && memberID!=undefined)localStorage.J_memberid = memberID;
    if(token && token!=undefined)localStorage.J_token = token;
    if (localStorage.J_memberid == undefined || localStorage.J_token == undefined) {
        alert2('您还未登录，请登录！')
    }

    $(".back").on("touchstart",function(){
       history.go(-1)
    });

    $("body").on("touchstart",".closeAlert",function(){
        $("body").find("#fullbg").fadeOut();
        setTimeout(function(){
            $("body").find("#fullbg").remove();
        },500)
    });

});
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
function numFormat(num) {
    var nlength = 4 - num.length;
    if(num.length === 4){ return num}
    else{
        for(var i=0; i<nlength;i++){
            num = "0"+num;
        }
        return num
    }
}

function alert1(val){
    $(".alert1").empty().append(val).fadeIn();
    setTimeout(function(){$(".alert1").fadeOut()},2000);
    setTimeout(function(){$(".alert1").empty();},2500)
}

function alert2(msg){
    var html = "";
    html += '<div id="fullbg"><div class="alert"> <div class="msg">';
    html += msg;
    html += '</div><button class="closeAlert">关闭</button> </div> </div>';
    $("body").append(html);
    setTimeout(function(){
        $("body").find("#fullbg").fadeIn();
    },200)
}

