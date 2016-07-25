$(function(){
	var ch=$(window).height();
	$(window).resize(function(){
		var cw=$(window).width();
		if(cw>=768){
			$(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"});
			$(".min-nav ul").css({height:0});
			$(".nav-span").removeAttr("id");
		}
	})
	$(".nav-span").click(function(){
		var ids=$(this).attr("id");
		if(ids == "active"){
			$(this).removeAttr("id");
			$(".min-nav ul").css({height:0})
			$(".container-fluid").eq(0).css({background:"rgba(0,0,0,0.7)"})
		}else{
			$(this).attr("id","active");
			$(".min-nav ul").css({height:ch-44});
			$(".container-fluid").eq(0).css({background:"#000"})
		}
		
	})
})