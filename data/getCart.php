<?php
//data/cart/getCart.php
require_once("init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
	$sql="SELECT *,(select sm from mg_laptop_pic where laptop_id=lid limit 1) as sm FROM mg_shoppingcart_item inner join mg_laptop on product_id=lid where user_id=$uid order by iid desc";
	$result=mysqli_query($conn,$sql);
	echo json_encode(mysqli_fetch_all($result,1));
}