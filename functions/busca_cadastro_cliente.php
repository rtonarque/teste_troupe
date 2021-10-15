<?php

include(".././db/banco.php");


@$cpf = $_POST['cpf'];

$query = "SELECT * from clientes where cpf=".$cpf;

$preencher = mysqli_query($db, $query);


if($preencher){
    $userData = $preencher->fetch_assoc();
    $data['status'] = 'correto';
    $data['result'] = $userData;
}else{
    $data['status'] = 'err';
    $data['result'] = '';
}

//header("Content-Type","application/json");
echo json_encode($data);
?>