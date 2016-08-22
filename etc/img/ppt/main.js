//创建图片数组，放入图片地址
var picArr = new Array("img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg");
//设置索引值，代表当前播放到第几张图片，初始值为0
var index = 0
//展示下一张图片
function next(){
  index ++;
  //当播放到最后一张时，自动跳转到第一张重新播发
  if(index == picArr.length){   //注意是‘＝＝’
    index = 0;
  }
  //设置ID，src赋值为下一张图片的地址
  document.getElementById("img1").src = picArr[index];
}
//展示上一张图片
function before(){
  index --;
  if (index < 0) {
    index = picArr.length - 1;
  }
  document.getElementById("img1").src = picArr[index];
}
