$(()=>{
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/tou.css";
	document.head.appendChild(link);
	$("#tou1").load("tou.html",function(html){
		var btnSearch=
			document.querySelector("[data-trigger=search]");
		var txtSearch=document.getElementById("txtSearch");
		btnSearch.onclick=function(){
			var kw=txtSearch.value;
			if(kw.trim()!==""){
				var url="dengju.html?kw="+kw;
				//open(url,"_self");
			location.href=url;
				//location.assign(url);
			}
		};
		txtSearch.onkeyup=function(e){
			if(e.keyCode==13)
				btnSearch.onclick();
		}
		if(location.search.indexOf("kw")!=-1)
			txtSearch.value=
				decodeURI(location.search.split("=")[1]);

		var $loginList=$("#loginList");
		var $welcomeList=$("#welcomeList");
		$.ajax({
			type:"get",
			url:"data/islogin.php",
			dataType:"json",
			success:function(data){
				console.log(data);
				var {ok,user}=data;
				if(ok==0){
					$loginList.show().next().hide();
				}else{
					$loginList.hide()
						.next().show()
						.find("#uname").html(user.uname);
				}
			}
		});
		$loginList.find("a:eq(1)").click(function(e){
			e.preventDefault();
			location.href="denglu.html?back="+location.href;
		});
		$welcomeList.find("a:last").click(function(e){
			e.preventDefault();
			$.ajax({
				type:"get",
				url:"data/signout.php",
				success:function(){
					location.reload(true);
				}
			})
		})
	});
});