$(()=>{
		var kw=location.search.split("=")[1];
		function loadPage(pno=0){
		$.ajax({
			type:"get",
			url:"data/getProductsByKw.php",
			data:{kw, pno},
			dataType:"json",
			success:function(output){
				var {products, pageCount}=output;
				var html="";
				for(var p of products){
					var {lid,md,title,price,memory,resolution,cpu}=p;
					html+=`<li>
					<div class="dj_c_2_u1_d1">
					 <a class="dj_c_2_u1_a1" href="xqy.html?lid=${lid}" title="${title}">
					  <div class="dj_c_2_u1_d2">
						  <img class="dj_c_2_u1_i1" src="${md}" alt="${title}">
					  </div>
					  <p class="dj_c_2_u1_p1">${title}</p>
					  <p class="dj_c_2_u1_p2">功率（W）：${memory}<br>规格尺寸(Mm)：${resolution}<br>应用空间：${cpu}</p>
					 </a>
					 <div class="dj_tqhm_d1" >
						<p style="color:#666;">¥<span class="dj_price">${parseFloat(price).toFixed(2)}</span></p>
						<span class="dj_reduce dj_tqjs_hm">-</span>
						<input class="dj_i_i_1" type="text" value="1">
						<span class="dj_add dj_tqjs_hm">+</span>
						<a href="javascript:;" data-lid="${lid}" class="dj_addCart">加入购物车</a>
					 </div>
					</div>
				   </li>`;
				}
//				var list = document.getElementById("dj_c_2_u1");
//				list.innerHTML = html

				$("#dj_c_2_u1").html(html);
			
//				html="";

				var html=`<a href="javascript:;" class="dj_previous">上一页</a>`;
				for(var i=0;i<pageCount;i++){
					if(i!=pno)
						html+=`<a href="javascript:;">${i+1}</a>`;
					else
						html+=`<a href="javascript:;" class="dj_current">${i+1}</a>`;
				}

				html+=`<a href="javascript:;" class="dj_next">下一页</a>`
				
			pages.innerHTML=html;

				if(pno==0)
					pages.firstElementChild.className+=" dj_disabled";
				if(pno==pageCount-1)
					pages.lastElementChild.className+=" dj_disabled";


			}

		});
	}

	loadPage();
	
	window.onload = function(){
	//获取-号按钮
		setTimeout(function(){
	var spanAdd = $(".dj_reduce");
	spanAdd.click(function(){
		var input = $(this).next();
		var count = parseInt(input.val());
		if(count>1){
		count--;
		input.val(count);
		}else{
		input.val(1);
		}
		//JQ获取后一个元素
	})
	
	var spanReduce = $(".dj_add");
	spanReduce.click(function(){
		//JQ获取前一个元素
		var input = $(this).prev();
		var count = parseInt(input.val());
		//var count = xxx.val();
		count++;
		input.val(count);
	})
	//获取+号按钮
	    },0);
	}
	

//	list.onclick=function(e){
//		var span=e.target;
//		if(span.className=="dj_add"||span.className=="dj_reduce"){
//			//找到旁边的input
//			var input=span.parentNode.children[1]
//			//获取input的值n
//			var n=parseInt(input.value);
//			//如果span是add
//			if(span.className=="dj_add")
//				n++//n++
//			else if(n>1)//否则如果n>1
//				n--//n--
//			input.value=n;//将n放回input的内容中
//		}
//	}


	$("#dj_c_2_u1").on("click",".dj_addCart",function(){
		var $a=$(this);
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok=="1"){
					var lid=$a.data("lid");
					var count=$a.prev().prev().val();
                    $.ajax({
						type:"get",
						url:"data/addCart.php",
						data:{lid,count},
						success:function(){
							$a.prev().prev().val(1);
							loadCart();
						}
					});
				}else{
					alert("请先登录!");
					location.href=
						"denglu.html?back="+location.href;
				}
			}
		})
	})
			
	function loadCart(){
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				if(data.ok==1){
					$.ajax({
						type:"get",
						url:"data/getCart.php",
						dataType:"json",
						success:function(items){
							var html="";
							var total=0;
							for(var item of items){
								var {title,count,price,iid}=item;
								html+=`<div class="item">
									<span title="${title}">${title}</span>
									<div data-iid="${iid}">
										<span class="dj_reduce">-</span>
										<input type="text" value="${count}">
										<span class="dj_add">+</span>
									</div>
									<p>
										<span>¥${(price*count).toFixed(2)}</span>	
									</p>
								</div>`;
								total+=price*count
							}
							$(".dj_cart_content").html(html);
							$("#dj_total").html(total.toFixed(2));
						}
					})
				}
			}
		})
	}
	loadCart();

	$(".dj_cart_content").on("click",".dj_add,.dj_reduce",function(){
		var $span=$(this);
		var iid=$span.parent().attr("data-iid");
		var count=parseInt($span.siblings("input").val());
		if($span.is(".dj_add"))
			count++;
		else
			count--;
		$.ajax({
			type:"get",
			url:"data/updateCart.php",
			data:{iid,count},
			success:function(){
				loadCart();
			}
		})
	})

	var pages=document.getElementById("dj_pages");
	pages.onclick=function(e){
		var a=e.target;
		if(a.nodeName==="A"){
			if(a.className.indexOf("dj_disabled")==-1
					&&a.className.indexOf("dj_current")==-1){
				switch(a.className){
					case "dj_previous":
						var curr=pages.querySelector("a.dj_current");
						var pno=curr.innerHTML-1-1;
						loadPage(pno);
						break;
					case "dj_next":
						var curr=pages.querySelector("a.dj_current");
						var pno=curr.innerHTML;
						loadPage(pno);
						break;
					default:
						loadPage(a.innerHTML-1);
				}
			}
		}
	}

	
})