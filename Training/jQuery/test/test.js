$(document).ready(function(){ //为了防止文档在完全加载（就绪）之前运行jQuery代码
  $("#btn1").mouseover(function(){
    $("#p1").css("background-color","pink");
  })
  $("#btn1").mouseout(function(){
    $("#p1").css("background-color","white")
  })
  $("#btn1").dblclick(function(){
    $("#p1").toggle(1000);
    $("#p1").fadeTo("1000",0.6)
  })
  $("#btn2").click(function(){
    $("#div1").animate({width:'200px',height:'100px',opacity:'0.5',marginLeft:'100px'},1000);
    $("#div1").animate({fontSize:'35px'},1000);
  })
  $("#flip").click(function(){
    $("#panel").slideToggle(2000);  //使其可以收缩
  })
  $("#stop").click(function(){
    $("#panel").stop();
  })
  $("#channing").click(function(){
    $("#p2").css("color","pink")
      .css("fontSize","30px")
      .slideUp(2000)
      .slideDown(2000);
  })
  $("#val").click(function(){
    alert("value值: "+$("#name").val());
    $("#name").val("jas");
  })
  $("#href").click(function(){
    $("#w3s").attr({"href":"http://www.w3school.com.cn/jquery/","title":"w3school jQuery"})
  })
})
