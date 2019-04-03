$(function(){
    var wHig=$(window).height();
    $("#login").height(wHig);

    // setTimeout(function(){
    //     $("#login").hide();
    //     $("#center").show();
    // },1500)
    $("#center").show();

     /*点击开始的时候进入游戏页面*/
    $(".red-start").click(function(){
        $(".red-box").show();
        $(".redOne").hide();

    // 水滴
		var win = (parseInt($(".couten").css("width"))) - 60;
		$(".mo").css("height", $(document).height());
		$(".couten").css("height", $(document).height());
		// $(".couten").css("height", "70%");
		$(".backward").css("height", $(document).height());
		$("li").css({});

		
		var add = function() {
			var hb = parseInt(Math.random() * (10 - 1) + 1);
			var Wh = parseInt(Math.random() * (90 - 30) + 10);
			var Left = parseInt(Math.random() * (win - 0) + 20);
			var rot = (parseInt(Math.random() * (55 - (-55)) - 55)) + "deg";

			num++;

			$(".couten").append("<li class='li" + num + "' >+"+hb+"</a></li>");
			$(".li" + num).css({
				"left": Left,
			});
			$(".li" + num + " a img").css({
				"width": Wh,
				"transform": "rotate(" + rot + ")",
				"-webkit-transform": "rotate(" + rot + ")",
				"-ms-transform": "rotate(" + rot + ")", /* Internet Explorer */
				"-moz-transform": "rotate(" + rot + ")", /* Firefox */
				"-webkit-transform": "rotate(" + rot + ")",/* Safari 和 Chrome */
				"-o-transform": "rotate(" + rot + ")" /* Opera */
			});	
			$(".li" + num).animate({'top':$(".couten").height()+20},5000,function(){
				//删掉已经显示的红包
				  this.remove()
			});
			//点击红包的时候弹出模态层
			$(".li" + num).click(function(){
								// $(".mo").css("display", "block")
								$(".sNum").append("+"+ hb +"");
							
            
			});
			setTimeout(add,200)
		}	
		
		//增加红包
		var num = 0;
		setTimeout(add,3000);
		
		//倒数计时
		var backward = function(){
			numz--;
			if(numz>0){
				$(".backward span").html(numz);
			}else{
				$(".backward").remove();
			}
			setTimeout(backward,1000)
					
		}
		
		var numz = 4;
		backward();
	
    })

})