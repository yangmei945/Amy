<?php
    header("Content-type:text/html;charset=utf-8");
    include "../db.php";
    if(isset($_POST['search'])){
        $keywords   = $_POST['search'];
        $sql="select * from  `dogs` where `name` like '%$keywords%'";
    }
    else{
        $sql    = "select * from dogs";
    }
    $result = mysqli_query($conn, $sql);
    $dogs   = array();
    while($row=mysqli_fetch_assoc($result)){
        $dogs[] = $row;
    }

    //分页
    //总记录数
    $total_num  = count($dogs);
    //每页显示的条数
    $perpage    = 3;
    //获取当前页
    $page= isset($_GET['page'])?(int)$_GET['page']:1;
    //获取总页数
    $total_page=ceil($total_num/$perpage);

    //对获取的当前页进行合理性判断
    //1、判断当前页是否小于1
    $page=max($page, 1);
    //判断当前页码是否大于总页数
    $page=min($page, $total_page);

    //获取遍历宠物数组时，每页开始的数组坐标值
    $start_index=$perpage*($page-1);
    //获取遍历宠物数组时，每页最大的数组坐标值
    $end_index=$perpage*$page-1;
    //防止计算结果超过最大记录数
    $end_index=min($end_index, $total_num-1);

    function showPage($page, $total_page){
        //拼接“首页”链接
        $html='<a href="?page=1">【首页】</a>';
        //拼接“上一页”链接
        $pre_page=$page-1<=0?$page:($page-1);
        $html.='<a href="?page='.$pre_page.'">【上一页】</a>';
        //拼接“下一页”链接
        $next_page=$page+1>$total_page?$page:($page+1);
        $html.='<a href="?page='.$next_page.'">【下一页】</a>';
        //拼接“尾页”链接
        $html.='<a href="?page='.$total_page.'">【尾页】</a>';

        //返回拼接后的分页链接
        return $html;
    }

?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>宠物品种</title>
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="../css/pet.css" />
        <!--[if lt IE 9]>
        <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
	</head>
	<body>
        <h3 class="text-center">宠物品种</h3>
        <a href="addPet.php" target="main" class="pull-left glyphicon glyphicon-plus-sign add-pet">添加宠物</a>
        <form class="pull-right quick-query" method="post">
            <label>快速查询：<input type="text" name="search" /></label>
            <input type="submit" class="btn btn-default" value="提交" />
        </form>
        <div class="pull-right"></div>
        <table class="table table-striped table-hover text-center">
            <colgroup>
                <col width="10%"/>
                <col width="20%"/>
                <col width="40%"/>
                <col width="5%"/>
                <col width="10%"/>
                <col width="15%"/>
            </colgroup>
            <thead>
                <tr>
                    <th class="text-center">名称</th>
                    <th class="text-center">照片</th>
                    <th class="text-center">详细介绍</th>
                    <th class="text-center">体型</th>
                    <th class="text-center">点击量</th>
                    <th class="text-center">操作</th>
                </tr>
            </thead>
            <tbody>
                <?php for($i=$start_index;$i<=$end_index;$i++) { ?>
                <tr>
                    <td><?php echo $dogs[$i]['name']?></td>
                    <td><img class="pet-photo" src="../upload/<?php echo $dogs[$i]['photo']?>"></td>
                    <td><?php echo $dogs[$i]['description']?></td>
                    <td>
                        <?php
                            if($dogs[$i]['somatotype']=="small"){
                                echo "小型";
                            }
                            else if($dogs[$i]['somatotype']=="middle"){
                                echo "中型";
                            }
                            else{
                                echo "大型";
                            }
                        ?>
                    </td>
                    <td><?php echo $dogs[$i]['hits']?></td>
                    <td>
                        <a href="editPet.php?id=<?php echo $dogs[$i]['id']?>" class="glyphicon glyphicon-pencil">编辑</a>
                        <a href="deletePet.php?id=<?php echo $dogs[$i]['id']?>" onclick="return confirm('您确定要删除这只宠物吗？')" class="glyphicon glyphicon-remove">删除</a>
                    </td>
                </tr>
                <?php } ?>
            </tbody>
        </table>
        <div class="pull-right page"><?php echo showPage($page, $total_page);?></div>
        <script type="text/javascript" src="../bootstrap/js/jquery-3.2.1.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.js"></script>
	</body>
</html>
