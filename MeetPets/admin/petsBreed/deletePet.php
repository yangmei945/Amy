<?php
    header("Content-type:text/html;charset=utf-8");
    $id = $_GET['id'];
    //连接数据库
    include "../db.php";
    //删除插入新数据
    $sql    = "delete from dogs where id='$id'";
    $result = mysqli_query($conn, $sql);
    if($result){
        echo "<script>alert('删除成功');</script>";
    }
    echo "<script>location.href='petsBreed.php',target='main'</script>";
?>