<?php
    header("Content-type:text/html;charset=utf-8");
   $id = $_GET['id'];
    //连接数据库
   include "../db.php";
   $sql="select * from dogs where id='$id'";
   $res=mysqli_query($conn,$sql);
   $row=mysqli_fetch_assoc($res);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>编辑宠物信息</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="../css/login.css" />
        <!--[if lt IE 9]>
        <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body style="overflow-x: hidden;">
        <h1 class="text-center">编辑宠物信息</h1>
        <form class="form-horizontal" method="post" action="savePets.php?id=<?php echo $row['id']?>">
            <div class="form-group">
                <label for="pet_name" class="col-sm-2 control-label">宠物名称</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="pet_name" name="pet_name" placeholder="宠物名称" value="<?php echo $row['name']; ?>">
                </div>
            </div>
            <div class="form-group">
                <label for="pet_photo" class="col-sm-2 control-label">宠物图片</label>
                <div class="col-sm-8">
                    <input type="file" class="form-control" id="pet_photo" name="pet_photo"  value="<?php echo $row['photo']; ?>">
                </div>
            </div>
            <div class="form-group">
                <label for="pet_description" class="col-sm-2 control-label">详细描述</label>
                <div class="col-sm-8">
                    <textarea class="form-control" id="pet_description" name="pet_description"><?php echo $row['description']?>"</textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="pet_somatotype" class="col-sm-2 control-label">宠物体型</label>
                <div class="col-sm-8">
                    <select id="pet_somatotype" name="pet_somatotype">
                        <option value="small" <?php echo $row['somatotype']=="small"? "selected" : "" ?>>小型</option>
                        <option value="middle" <?php echo $row['somatotype']=="middle"? "selected" : "" ?>>中型</option>
                        <option value="big" <?php echo $row['somatotype']=="big"? "selected" : "" ?>>大型</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button type="button" class="btn btn-default">取消</button>
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
                $("button[type='button']").click(function(){
                    location.href="petsBreed.php",target="main";
                });
            });
        </script>
    </body>
</html>
