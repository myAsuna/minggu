$(()=>{
    function loadCart(){
        $.ajax({
            type:"get",
            url:"data/islogin.php",
            dataType:"json",
            success:function(data){
                if(data.ok==0)
                    location.href="denglu.html?back="+location.href;
                else{
                    $.ajax({
                        type:"get",
                        url:"data/getCart.php",
                        dataType:"json",
                        success:function(items){
                            var html="";
                            var $chkAll=$(".check-top>img");
                            $chkAll.attr(
                                "src","imgs/dengju/product_true.png");
                            var sum=0,total=0;
                            for(var item of items){
                                var {is_checked,sm,title,spec,price,count,lid,iid}=item;
                                if(is_checked==0)
                                    $chkAll.attr(
                                        "src","imgs/dengju/product_normal.png");
                                if(is_checked==1){
                                    sum+=parseInt(count);
                                    total+=price*count;
                                }

                                html+=`<div class="imfor">
									<div class="check" data-iid="${iid}">
										<img src="imgs/dengju/product_${is_checked==0?'normal':'true'}.png" alt="">
									</div>
									<div class="product">
										<a href="xqy.html?lid=${lid}">
											<img src="${sm}" alt="${title}" title="${title}">
										</a>
										<span class="desc">
											<a href="xqy.html?lid=${lid}">${title}</a>
										</span>
										<p class="col"><span>规格：</span>
											<span class="color-desc">${spec}</span>
										</p>
									</div>
									<div class="price"><p class="price-desc">明谷专享价</p>
										<p><b>¥</b>${parseFloat(price).toFixed(2)}</p>
									</div>
									<div class="num" data-iid="${iid}">
										<span class="reduce">&nbsp;-&nbsp;</span>
										<input type="text" value="${count}">
										<span class="add">&nbsp;+&nbsp;</span>
									</div>
									<div class="total-price">
										<span>¥</span>
										<span>${(price*count).toFixed(2)}</span>
									</div>
									<div class="del">
										<a href="#" data-iid="${iid}">删除</a>
									</div>
								</div>`
                            }
                            $("#content-box-body").html(html);
                            $(".total,.totalOne").html(sum);
                            $(".foot-price,.totalPrices")
                                .html("¥"+total.toFixed(2))
                        }
                    })
                }
            }
        })
    }
    loadCart();
    $("#content-box-body")
        .on("click",".check>img,.add,.reduce,.del>a",function(e){
            e.preventDefault();
            var $tar=$(this);
            if($tar.is(".add,.reduce")){
                var iid=$tar.parent().attr("data-iid");
                var count=parseInt($tar.siblings("input").val());
                if($tar.is(".add"))
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
            }else if($tar.is(".del>a")){
                var title=$tar.parent()
                    .siblings(".product")
                    .find(".desc>a").html();
                if(confirm("是否继续删除 '"+title+"' 吗?")){
                    var iid=$tar.attr("data-iid");
                    $.ajax({
                        type:"get",
                        url:"data/deleteCart.php",
                        data:{iid},
                        success:function(){
                            loadCart();
                        }
                    })
                }
            }else{
                var iid=$tar.parent().attr("data-iid");
                var checked=
                    $tar.attr("src").endsWith("normal.png")?1:0;
                $.ajax({
                    type:"get",
                    url:"data/checkOne.php",
                    data:{iid,checked},
                    success:function(){
                        loadCart();
                    }
                })
            }
        });
    $(".check-top>img").click(function(){
        var $img=$(this)
        var checked=
            $img.attr("src").endsWith("normal.png")?1:0;
        $.ajax({
            type:"get",
            url:"data/checkAll.php",
            data:{checked},
            success:function(){
                loadCart();
            }
        })
    })
})