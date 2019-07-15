<?php
  #查询用户名是否已存在
  $uname=$_REQUEST["uname"];
  require("init.php");
  $sql="select * from mg_user where uname='$uname'";
  $result=mysqli_query($conn,$sql);
  $row=mysqli_fetch_row($result);
  if($row==null){
    echo "手机号可用";
  }else{
    echo "手机号已存在";
  }
?>