<?php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
	$sql="select * from mg_user where uid=$uid";
	$result=mysqli_query($conn,$sql);
	$user=mysqli_fetch_All($result,1)[0];
	echo json_encode(["ok"=>1,"user"=>$user]);
}else{
	echo json_encode(["ok"=>0]);
}