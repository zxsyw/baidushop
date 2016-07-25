$(function(){
  var ch=$(window).height();
  $(window).resize(function(){
    var cw=$(window).width();
    if(cw>=768){
      $(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"});
      $(".min-nav ul").css({height:"100%"});
      $(".nav-span").removeAttr("id");
    }
  })
  $(".min-nav ul").css({display:'none'});
  $(".nav-span").click(function(){
    var ids=$(this).attr("id");
    if(ids == "active"){
      $(this).removeAttr("id");
      $(".min-nav ul").css({height:0,display:'none'});
      $(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"})
    }else{
      $(this).attr("id","active");
      $(".min-nav ul").css({height:ch-44,display:'block'});
      $(".container-fluid").eq(0).css({background:"#000"})
    }    
  })
  var PH=$(window).height();
  var ZH=$('.banner').height();
  $('.section').css({'minHeight':PH});
  $('.banner').css('top',(PH-ZH)/2);
  var off=[];
  $('.section').each(function (i,v) {
     off.push($(v).offset().top);
  })
  $('.bb').on('click',function () {
    var top=off[$(this).index()];
    $('body').animate({'scrollTop':top},400);
    $('.bb').removeClass('active');
    $(this).addClass('active');
  })

  $(window).on('scroll',function () {
    var top=$(this).scrollTop();
    for(var i=0;i<off.length;i++){
      if(top>=off[i]){
        $('.bb').removeClass('active');
        $('.bb:nth-child('+(i+1)+')').addClass('active');
        $('.section').removeClass('active');
        $('.section:nth-child('+(i+1)+')').addClass('active');
      }
    }

  })
})


  
