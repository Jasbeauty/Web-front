$(function(){
  $(".motto").hover(function(){
    $(this).find(".cover").animate({opacity:"0.8",height:"474px",top:0},400,function(){
      $(this).find("p").fadeIn(200);
    });
  });
});
