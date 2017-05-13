<?php
    session_start();
    $username   = $_POST['username'];
    $password   = $_POST['password'];
    include "db.php";
    $sql = "select * from admin where username=" . $username;
    $result = mysqli_query($conn, $sql);
    if ($result) {
        $saveValue = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if ($password == $saveValue['password']) {
            session_start();
            $_SESSION['userinfo']=array(
                'id'=>$saveValue['id'],			//将用户ID保存到session
                'username'=>$saveValue['username']	//将用户名保存到session
            );
            echo "<script>window.location.href='home.php'</script>";
        } else {
            echo "<script>alert('密码错误！')</script>";
        }
    }

    mysqli_close($conn);
    require("./view/login.html");
?>

