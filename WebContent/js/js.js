/*主页动画*/
var contentWayPoint = function() {
	var i = 0;
	$('.animate-box').waypoint(function(direction) {
		if (direction === 'down' && !$(this.element).hasClass('animated')) {
			i++;
			$(this.element).addClass('item-animate');
			setTimeout(function() {
				$('body .animate-box.item-animate').each(function(k) {
					var el = $(this);
					setTimeout(function() {
						el.addClass('fadeInUp animated');
						el.removeClass('item-animate');
					}, k * 200, 'easeInOutExpo');
				});
			}, 100);
		}
	}, {
		offset: '85%'
	});
} 
/*主页视频文字*/
var topgd = function(){
	$('.animate-l').waypoint(function(){  
		$('.animate-l').addClass('animated slideInLeft');
	},{ offset: '90%' });
	$('.animate-r').waypoint(function(){  
		$('.animate-r').addClass('animated slideInRight');
	},{ offset: '90%' });
}
/* 页脚微信和top按钮*/
var gotop = function() {
	var offset = 300,offset_opacity = 1200,scroll_top_duration = 1000;
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $('.cd-top').addClass('dis') : $('.cd-top').removeClass('dis');
	});
	$('.cd-top').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		}, scroll_top_duration
		);
	});
	$('#top-Start').on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 800 ,
		}, scroll_top_duration
		);
	});

}
var weixinpic = function() {
	$("#weixin-img").mouseout(function(){
		$("#weixin-pic")[0].style.display = 'none';
	})
	$("#weixin-img").mouseover(function(){
		$("#weixin-pic")[0].style.display = 'block';
	})
}
var qrshar = function(){
	$(".Share").hover( function(event){
		$(".share-int").fadeToggle("slow");  
	}, function(event){
		$(".share-int").fadeToggle("slow");
	} );
	$('.qrcode').each(function(index, el) {
		var url = $(this).data('url');
		if ($.fn.qrcode) {
			$(this).qrcode({
				text: url,
				width: 150,
				height: 150,
			});
		}
	});
}
/*页面加载完初始化*/
$(function(){
	weixinpic();
	gotop();
	topgd();
	qrshar();
});
/*打赏弹窗*/
$(document).ready(function() {
	$('.dsbtn').click(function() {
		$('.mask').css({'display': 'block'});
		center($('.mess'));
		check($(this).parent(), $('.btnsuccess'));
	});
	// 居中
	function center(obj) {
		var screenWidth = $(window).width();
		screenHeight = $(window).height(); //当前浏览器窗口的 宽高
		var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度
		var objLeft = (screenWidth - obj.width())/2 ;
		var objTop = (screenHeight - obj.height())/2 + scrolltop;
		obj.css({left: objLeft + 'px', top: objTop + 'px','display': 'block'});
		//浏览器窗口大小改变时
		$(window).resize(function() {
			screenWidth = $(window).width();
			screenHeight = $(window).height();
			scrolltop = $(document).scrollTop();
			objLeft = (screenWidth - obj.width())/2 ;
			objTop = (screenHeight - obj.height())/2 + scrolltop;
			obj.css({left: objLeft + 'px', top: objTop + 'px'});
		});
		//浏览器有滚动条时的操作、
		$(window).scroll(function() {
			screenWidth = $(window).width();
			screenHeight = $(widow).height();
			scrolltop = $(document).scrollTop();
			objLeft = (screenWidth - obj.width())/2 ;
			objTop = (screenHeight - obj.height())/2 + scrolltop;
			obj.css({left: objLeft + 'px', top: objTop + 'px'});
		});
	}
	//确定取消的操作
	function check(obj, obj1) {
		obj1.click(function() {
			closed($('.mask'), $('.mess'));
		});
	}
	// 隐藏 的操作
	function closed(obj1, obj2) {
		obj1.hide();
		obj2.hide();
	}
});