<?php
    header("Content-type:text/html;charset=utf-8");
    if(empty($_POST)){
        die;
    }
    $id = $_GET['id'];
    $name   = $_POST['pet_name'];
    $description    = $_POST['pet_description'];
    $somatotype = $_POST['pet_somatotype'];
    $oldPhoto   = $_POST['old_pet_photo'];
    $newPhoto   = $_FILES['pet_photo']['name'];
    echo "old:".$oldPhoto." new:".$newPhoto;
    if(!empty($newPhoto)){
        require "upload.php";
        $photo  =  $_FILES['pet_photo']['name'];
    }
    else{
        $photo= $oldPhoto;
    }
    //连接数据库
    include "../db.php";
    //防止SQL注入
    $name   = mysqli_real_escape_string($conn, $name);
    $photo  = mysqli_real_escape_string($conn, $photo);
    //插入新数据
    $sql    = "update dogs set name='$name',photo='$photo',description='$description',somatotype='$somatotype' where id='$id'";
    $result = mysqli_query($conn, $sql);
    if($result){
        echo "<script>alert('修改成功');</script>";
    }
    echo "<script>location.href='petsBreed.php',target='main'</script>";
?>