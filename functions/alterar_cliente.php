<?php

error_reporting(0);

include(('.././db/banco.php'));


@$telefone = $_POST['telefone'];
@$nome = $_POST['nome'];
@$rua = $_POST['rua'];
@$numero = $_POST['numero'];
@$complemento = $_POST['complemento'];
@$bairro = $_POST['bairro'];
@$cidade = $_POST['cidade'];
@$estado = $_POST['estado'];
@$zip = $_POST['zip'];
@$ativo = $_POST['ativo'];
@$rg = $_POST['rg'];
@$cpf = $_POST['cpf'];
@$email = $_POST['email'];


if($ativo == "on") {
    $ativo = "sim";
} else {
    $ativo = "nao";
}

// die(var_dump($id_cliente));

$alter_data = "UPDATE clientes SET nome='$nome', telefone='$telefone', rua='$rua', numero='$numero', complemento='$complemento', bairro='$bairro', cidade='$cidade', estado='$estado', zip='$zip', ativo='$ativo' , cpf='$cpf', rg='$rg', email='$email'  where cpf=".$cpf;

$alterar = mysqli_query($db, $alter_data) or die(mysqli_error($db));

if ($alterar) {        
    $data['status'] = "certo";

} else {
    //var_dump("ok");
    $data['status'] = 'erro';
    var_dump("Connection failed: " . mysqli_error($db));
}

echo json_encode($data);
