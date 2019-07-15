$(()=>{
    var lid=location.search.split("=")[1];
    $.getJSON(
        "data/getProductById.php",
        {lid},
        function(output){//success:
            console.log(output);
            var {product, specs, pics}=output;
            var {title,subtitle,price,promise}=product;
            document.querySelector("#show-details>h1")
                .innerHTML=title;
            document.querySelector("#show-details>h3>a")
                .innerHTML=subtitle;
            document.querySelector(
                "#show-details>div.price>div.stu-price>span"
            ).innerHTML="¥"+parseFloat(price).toFixed(2);
            document.querySelector(
                "#show-details>div.price>div.promise>b"
            ).innerHTML="服务承诺："+promise;

            var html="";
            for(var spec of specs){
                var {lid,spec}=spec;
                html+=`<a href="xqy.html?lid=${lid}" class="${lid==product.lid?'active':''}">${spec}</a>`;
            }
            document.querySelector(
                "#show-details>div.spec>div"
            ).innerHTML=html;

            var {lname,os,memory,resolution,video_card,cpu,video_memory,category,disk,details}=product;
            document.querySelector("#param>ul")
                .innerHTML=`<li>
				<a href="javascript:;">商品名称：${lname}</a>
				</li>
				<li>
					<a href="javascript:;">类型：${os}</a>
				</li>
				<li>
					<a href="javascript:;">功率：${memory}</a>
				</li>
				<li>
					<a href="javascript:;">规格：${resolution}</a>
				</li>
				<li>
					<a href="javascript:;">样式：${video_card}</a>
				</li>
				<li>
					<a href="javascript:;">色温：${cpu}</a>
				</li>
				<li>
					<a href="javascript:;">适用面积：${video_memory}</a>
				</li>
				<li>
					<a href="javascript:;">产品风格：${category}</a>
				</li>
				<li>
					<a href="javascript:;">应用范围：${disk}</a>
				</li>`;

            document.getElementById("product-intro")
                .innerHTML=details;

            /*放大镜*/
            var html="";
            for(var pic of pics){
                var {sm,md,lg}=pic
                html+=`<li class="i1"><img src="${sm}" data-md="${md}" data-lg="${lg}"></li>`;
            }
            var ulImgs=document.getElementById("icon_list");
            ulImgs.innerHTML=html;
            var mImg=document.getElementById("mImg");
            mImg.src=pics[0].md;
            var lgDiv=document.getElementById("largeDiv");
            lgDiv.style.backgroundImage="url("+pics[0].lg+")";

            var afor=document.querySelector(".forward");
            var aback=document.querySelector(".backward");
            var LIWIDTH=62, moved=0, offset=20;
            ulImgs.style.width=LIWIDTH*pics.length+"px";
            if(pics.length<=5)
                afor.className+=" disabled";
            afor.onclick=function(){
                if(!this.className.endsWith("disabled")){
                    moved++;
                    ulImgs.style.left=-LIWIDTH*moved+offset+"px";
                    aback.className="backward";
                    if(moved===pics.length-5)
                        this.className+=" disabled";
                }
            }
            aback.onclick=function(){
                if(!this.className.endsWith("disabled")){
                    moved--;
                    ulImgs.style.left=-LIWIDTH*moved+offset+"px";
                    afor.className="forward";
                    if(moved===0)
                        this.className+=" disabled"
                }
            }

            ulImgs.onmouseover=function(e){
                var img=e.target;
                if(img.nodeName==="IMG"){
                    mImg.src=img.getAttribute("data-md");
                    lgDiv.style.backgroundImage=
                        "url("+img.getAttribute("data-lg")+")"
                }
            }
            var mask=document.getElementById("mask")
            smask=document.getElementById("superMask");
            smask.onmouseover=function(){
                mask.style.display="block";
                lgDiv.style.display="block";
            }
            smask.onmouseout=function(){
                mask.style.display="none";
                lgDiv.style.display="none";
            }
            var MSIZE=175, SMSIZE=350, MAX=SMSIZE-MSIZE;
            smask.onmousemove=function(e){
                var left=e.offsetX-MSIZE/2;
                var top=e.offsetY-MSIZE/2;
                if(left<0) left=0; else if(left>MAX) left=MAX;
                if(top<0) top=0; else if(top>MAX) top=MAX;
                lgDiv.style.backgroundPosition=
                    -16/7*left+"px "+ -16/7*top+"px";
                mask.style.left=left+"px";
                mask.style.top=top+"px";
            }
        },
        //"json"
    );
});