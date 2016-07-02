$(function(){
  var num = 0;
  function change(){
   num++;
   if(num>=$('.banner_left > a').length){
    num = 0;
  }
  $('.banner_left > a').fadeOut(300).eq(num).fadeIn(600);
  $('.dian > li').css('background','rgba(0,0,0,.3)').eq(num).css('background','#fff');
}
var t = setInterval(change,2000);

$('.banner_left').mouseover(function(){
  clearInterval(t);
})
$('.banner_left').mouseout(function(){
  t = setInterval(change,2000);
})
$('.dian > li').each(function(index,obj){
  $(obj).mouseover(function(){ 
    $('.banner_left > a').stop(true,true);
    $('.banner_left > a').fadeOut(600).eq(index).fadeIn(600);
    $('.dian > li').css('background','rgba(0,0,0,.3)').eq(index).css('background','#fff');
    num=index;
  })
})
$('.youyou').click(function(){
  change();
})
$('.zuozuo').click(function(){
 num--;
 if(num<0){
  num = $('.banner_left > a').length-1;
}
$('.banner_left > a').fadeOut(300).eq(num).fadeIn(600);
$('.dian > li').css('background','rgba(0,0,0,.3)').eq(num).css('background','#fff');
})
})
