<?php
$uname=$_REQUEST["uname"];
$upwd=$_REQUEST["upwd"];
require_once("init.php");
if($uname!=null&&$upwd!=null){
$sql="select * from mg_user where uname='$uname' and upwd='$upwd'";
$result=mysqli_query($conn,$sql);
 $row=mysqli_fetch_row($result);
 if($row!=null){
	 session_start();
	 $_SESSION["uid"]=$row[0];
   echo "true";
 }else{
   echo "false";
 }
}
?>