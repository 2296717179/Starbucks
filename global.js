$(function(){
	$('div#nav>nav.navbar>div.menu').hide();
	$('div#nav>.navbar>div.container>div.top>ul.row a.icon').on('click',function(){
		$('div#nav>.navbar>div.container').hide();
		$('div#nav>nav.navbar>div.menu').show();
	})
	$('div#nav>.navbar>div.menu>div.top>ul.row a.icon').on('click',function(){
		$('div#nav>.navbar>div.menu').hide();
		$('div#nav>nav.navbar>div.container').show();
	})
	var bwidth=document.body.clientWidth||document.element.clientWidth;
	if(bwidth>=995){
		$('div#nav>.navbar').addClass('tactive').css({'position':'fixed'});
		$('div#nav>.navbar>div.container>div.top').css('padding-bottom','250px');
	}else{
		$('div#nav>.navbar').css({'position':'static'}).removeClass('tactive');
		$('div#nav>.navbar>div.container>div.top').css('padding-bottom','0px');
		$('div#main').css('margin-top',$('div#nav').height());
		$('div#main>div.carousel>.carousel-control').css('top',$('div#nav').height());
		$('div#main>div.wrapper div.col-lg-6').css({'padding-left':'0','padding-bottom':'0','text-align':'center'}) ;
		$('div#main>div.wrapper').css('height','auto') ;
	}
})