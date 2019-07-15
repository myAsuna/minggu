<?php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
@$lid=$_REQUEST["lid"];
@$count=$_REQUEST["count"];
if($uid!=null&&$lid!=null&&$count!=null){
	$sql="select * from mg_shoppingcart_item where user_id=$uid and product_id=$lid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_row($result);
	if($row==null){
		$sql="insert into mg_shoppingcart_item values (null,$uid,$lid,$count,0)";
	}else{
		$sql="update mg_shoppingcart_item set count=count+$count where iid=".$row[0];
	}
	mysqli_query($conn,$sql);
}