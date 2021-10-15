<?php

error_reporting(0);

include(".././db/banco.php");

@$cpf = $_POST['cpf'];

$delete_data = "DELETE from clientes where cpf=".$cpf;
$excluir = mysqli_query($db, $delete_data);

if ($excluir) {        
    $data['status'] = 'ok';

} else {
    //var_dump("ok");
    $data['status'] = 'erro';
    var_dump("Connection failed: " . mysqli_error($db));
}

echo json_encode($data);
