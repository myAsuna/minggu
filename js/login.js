$(()=>{
	$(":button").click(function(){
//		var uname = $("#uname").val();
//		var upwd = $("#upwd").val();
		$.ajax({
			type:"post",
			url:"data/02-b.php",
//			data:{uname,upwd},
			data:$("form").serialize(),
			success:function(result){
				if(result=="false" || result=="")
					alert("用户名或密码不正确!");
				else{
					alert("登录成功!");
					if(location.search!==""){
						var back=location.search.slice(6)
						location.href=back;
					}else
						location.href="index.html";
				}
			}
		})
	})
})