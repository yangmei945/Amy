<?php
    if($_FILES['pet_photo']['error']>0){
        echo "Error:".$_FILES['pet_photo']['error']."<br />";
    }
    else{
        if(($_FILES['pet_photo']['type']=="image/gif")||($_FILES['pet_photo']['type']=="image/jpeg")||($_FILES['pet_photo']['type']=="image/png")){
            if($_FILES['pet_photo']['size']/1024/1024<=2){
                //图片重命名
                $suffix = substr($_FILES['pet_photo']['name'],strpos($_FILES['pet_photo']['name'],'.'));
                $_FILES['pet_photo']['name']    = time().rand().$suffix;
                //上传图片
                move_uploaded_file($_FILES["pet_photo"]["tmp_name"], "../upload/" . $_FILES["pet_photo"]["name"]);
            }
            else{
                echo "<script>alert('上传图片不能大于2M');</script>";
                die;
            }
        }
        else{
            echo "<script>alert('请上传jpg或png或gif格式的图片');</script>";
            die;
        }
    }
?>