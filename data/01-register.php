<?php
  #1.获取前端提交过来的数据
   $uname=$_REQUEST["uname"];
   $upwd=$_REQUEST["upwd"];
  #2.连接数据库
   require("init.php");
  #3.拼sql语句，插入到数据库
   $sql="insert into mg_user(uname,upwd)values('$uname','$upwd')";
  #4.执行sql并根据结果给出响应
   $result=mysqli_query($conn,$sql);
   if($result==true){
     echo "<script>alert('注册成功！去登陆');window.location.href='../denglu.html'</script>";;
   }else{
     echo "注册失败";
   }


?>