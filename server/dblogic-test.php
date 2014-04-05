<?php
	require_once("connect.php");

	
	
/*	//写入数据示例//
*
*	$name	 		  = $_POST['name'];
*	$password 		  = $_POST['password']; 
*	//$psw			  = md5($password);
*	$sex 			  = $_POST['sex'];
*	
*	$name   = urldecode($name);
*	$sex    = urldecode($sex);
*	
*	$sql = "INSERT INTO tb_user (user_name,user_password,user_sex) 
*				VALUES ('{$name}','{$password}','{$sex}')"; 
*	mysql_query('set names UTF8');
*	mysql_query($sql);
*	mysql_close();
*	
*	echo "true";
*
*/	//写入数据示例结束//


////////////////////////////我是程序分割线//////////////////////////////


/*  //查询数据示例//
*
*	$name = $_POST['name'];
*	mysql_query('set names UTF8');
*	
*	$data = mysql_query("SELECT user_name,user_sex FROM tb_user WHERE user_name = '$name'");
*	while ( $row = mysql_fetch_array($data, MYSQL_BOTH) ) {
*		$dataArray = array(
*			"name"=>urlencode($row["user_name"]),
*			"sex"=>urlencode($row["user_sex"]),
*			"userJudge"=>true
*		);
*	}
*	
*	$daraJSON   = json_encode($dataArray);
*	$daraDecode = urldecode($daraJSON);
*	echo $daraDecode;
*
*/	//查询数据示例结束//












?>