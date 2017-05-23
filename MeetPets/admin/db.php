<?php
	header("Content-type:text/html;charset=utf-8");
    //连接数据
    $dbhost = "bdm26703743.my3w.com:3306";
    $dbuser = "bdm26703743";
    $dbpass = "yangmei123456";
    //连接数据库
   	$conn   = mysqli_connect($dbhost,$dbuser,$dbpass);
   	if(!$conn){
   		die("连接错误：".mysqli_error($conn));
   	}
   	//选择指定的数据库
    mysqli_select_db($conn, "bdm26703743_db");
   	//设置编码，防止中文乱码
    mysqli_query($conn, "set names utf8");
?>