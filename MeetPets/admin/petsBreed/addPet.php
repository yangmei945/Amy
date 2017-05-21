<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>添加宠物品种</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="../css/login.css" />
        <!--[if lt IE 9]>
        <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body style="overflow-x: hidden;">
        <h3 class="text-center">添加宠物信息</h3>
        <form class="form-horizontal" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="pet_name" class="col-sm-2 control-label">宠物名称</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="pet_name" name="pet_name" placeholder="宠物名称">
                </div>
            </div>
            <div class="form-group">
                <label for="pet_photo" class="col-sm-2 control-label">宠物图片</label>
                <div class="col-sm-8">
                    <input type="file" id="pet_photo" name="pet_photo">
                </div>
            </div>
            <div class="form-group">
                <label for="pet_description" class="col-sm-2 control-label">详细描述</label>
                <div class="col-sm-8">
                    <textarea class="form-control" id="pet_description" name="pet_description"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="pet_somatotype" class="col-sm-2 control-label">宠物体型</label>
                <div class="col-sm-8">
                    <select id="pet_somatotype" name="pet_somatotype">
                        <option value="small">小型</option>
                        <option value="middle">中型</option>
                        <option value="big">大型</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="reset" class="btn btn-default">重置</button>
                    <button type="submit" class="btn btn-success">保存</button>
                </div>
            </div>
        </form>
        <script type="text/javascript" src="../bootstrap/js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
        <script type="text/javascript">
            $(function(){
                $("button[type='submit']").click(function(){
                    if($("#pet_name").val()==""){
                        alert("还没有输入宠物名称哦");
                    }
                    else{
                        if($("#pet_photo").val()==""){
                            alert("还没有上传宠物图片哦");
                        }
                    }
                });
            });
        </script>
    </body>
</html>
<?php
    header("Content-type:text/html;charset=utf-8");
    if(empty($_POST)){
        die;
    }
    require "upload.php";
    //接收表单数据
    $name   = $_POST['pet_name'];
    $photo   = $_FILES['pet_photo']['name'];
    $description   = $_POST['pet_description'];
    $somatotype   = $_POST['pet_somatotype'];
    //连接数据库
    include "../db.php";
    //防止SQL注入
    $name   = mysqli_real_escape_string($conn, $name);
    $photo  = mysqli_real_escape_string($conn, $photo);
    //判断宠物名称是否存在
    $sql    = "select * from dogs where name='$name'";
    $result = mysqli_query($conn, $sql);
    $dogs   = array();
    if(mysqli_fetch_row($result)){
        echo "<script>alert('这种宠物已经在数据库中咯');</script>";
    }else{
        //插入新数据
        $sql    = "insert into dogs (`name`,`photo`,`description`,`somatotype`) values('$name','$photo','$description','$somatotype')";
        $result = mysqli_query($conn, $sql);
        if($result){
            echo "<script>alert('添加成功');</script>";
        }
        echo "<script>location.href='petsBreed.php',target='main'</script>";
    }
?>