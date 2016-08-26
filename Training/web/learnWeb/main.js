function showobj(id){
  var obj = document.getElementById(id);
  obj.style.display = 'block';
}
function hiddenobj(id){
  var obj = document.getElementById(id);
  obj.style.display = 'none';
}

//实例化一个数组，来保存banner图片的路径
var arr = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg");
var count = 0;
//切换图片的功能
function autoPlayer(){
  if(arr.length==count){
    count = 0;   //如果count值等于数组长度了，则给它赋值为0，使其重新开始播放
  }
  document.getElementById("banner1").src = arr[count];
  count++;
}
//进行时间定时
var timer = setInterval(autoPlayer,2000);
//清除时间定时
function clearTimer(){
  clearInterval(timer);
}
//鼠标悬停的函数
function showbannerbyId(num){
  clearTimer();
  var index = parseInt(num);  //把num参数转换成int类型，赋值给index
  document.getElementById("banner1").src = arr[index-1];
  count = index;  //使其鼠标离开后，可以直接播放下一张图片
}
//鼠标离开后恢复自动播放效果
function btnMouseOut(){
  timer = setInterval(autoPlayer,2000);
}

//无缝广告滚动的实现
var speed = 10;   //控制速度
var scroll_begin = document.getElementById("scroll_begin");
var scroll_end = document.getElementById("scroll_end");
var scroll_div = document.getElementById("scroll_div");
//👆取出三个容器
scroll_end.innerHTML = scroll_begin.innerHTML;

function Marquee(){
    if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
        scroll_div.scrollLeft -= scroll_begin.offsetWidth;
    else {
        scroll_div.scrollLeft++;
    }
}
var MyMar = setInterval(Marquee, speed);
function function1(){
    Mymar = clearInterval(MyMar);
}
function function2(){
    MyMar = setInterval(Marquee, speed);
}

//实现在线咨询广告的浮动特效
window.onload = window.onresize = window.onscroll = function(){
  var qqbox = document.getElementById("consultbox");
  var qq = document.getElementById("consult");
  var sc_top = document.documentElement.scrollTop || document.body.scrollTop;
  setTimeout(function(){
    clearInterval(qqbox.timer);
    var itop = parseInt((document.documentElement.clientHeight - qqbox.offsetHeight)/2) + sc_top;
    qqbox.timer = setInterval(function(){
      var ispeed = (sc_top - qqbox.offsetTop) / 8;
      ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
      qqbox.offsetTop == sc_top ? clearInterval(qqbox.timer) : (qqbox.style.top = qqbox.offsetTop + ispeed + "px");
    },30)
  },100)
}
