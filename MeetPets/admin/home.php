<?php
    header("Content-type:text/html;charset=utf-8");
    //启动Session
    session_start();
    //用户退出
    if(isset($_GET['action'])&&$_GET['action']=='logout'){
        //清除session数据
        unset($_SESSION['userinfo']);
        //如果session中没有其他数据，则销毁session
        if(empty($_SESSION)){
            session_destroy();
        }
        //跳转到登录界面
		header('Location: login.php');
		//终止脚本
		die;
    }
    //判断SESSION中是否存在用户信息
    if(isset($_SESSION['userinfo'])){
    	//用户信息存在，说明用户已经登录
    	$login	= true;  //保存用户登录状态
    	$userinfo	= $_SESSION['userinfo']; //获取用户信息
    }
    else{
    	//用户信息不存在，说明用户没有登录
    	$login	= false;
    }
    require 'view/home.html';
?>

