<?php
require_once("init.php");
@$iid=$_REQUEST["iid"];
if($iid!=null){
	$sql="delete from mg_shoppingcart_item where iid=$iid";
	mysqli_query($conn,$sql);
}