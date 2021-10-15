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
@$cpf = $_POST['cpf'];
@$rg = $_POST['rg'];
@$email = $_POST['email'];



if ($ativo == "on") {
    $ativo = "sim";
} else {
    $ativo = "nao";
}

$verifica_cpf = "SELECT cpf,rg from clientes";
$execut_verifica_cpf = mysqli_query($db, $verifica_cpf);
$teste = "unico";

while ($result = mysqli_fetch_assoc($execut_verifica_cpf)) {

    if ($cpf == $result['cpf']) {
        $teste = "duplicado";
        // die(var_dump($teste));
    }
    if ($rg == $result['rg']) {
        $teste = "duplicado";
        // die(var_dump($teste));
    }
}
if ($teste == "unico") {

    $insert_data = "insert into clientes(nome,telefone,rua,numero,complemento,bairro,cidade,estado,zip,ativo, cpf, rg, email) value('$nome','$telefone','$rua', '$numero', '$complemento', '$bairro', '$cidade', '$estado', '$zip', '$ativo', '$cpf', '$rg', '$email')";
    $inserir = mysqli_query($db, $insert_data);

    if ($inserir) {
        $data['status'] = "certo";
        $data['cpf'] = $cpf;
    } else {
        $data['status'] = 'erro';
        var_dump("Connection failed: " . mysqli_error($db));
    }
} else {
    $data['status'] = 'erro';
    $data['mensagem'] = 'duplicado';
}

echo json_encode($data);
