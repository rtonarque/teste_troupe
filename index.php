<?php

include('././db/banco.php');

date_default_timezone_set('America/Sao_Paulo');


$query = "SELECT * from clientes order by nome ASC";

$trazer_cliente = mysqli_query($db, $query);


?>

<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <!-- CSS -->

    <link rel="stylesheet" href="css/bootstrap.min.css" id="bootstrap-css">



   

    <link rel="stylesheet" href="css/frente_caixa.css">

    <link rel="stylesheet" href="css/frente_caixa_mesas.css">

    <link rel="stylesheet" href="css/cadastro.css">

    <link rel="stylesheet" href="css/config_rest.css">

    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="css/datepiker.css">

    <!-- JS -->

    <script src="js/jquery-3.4.1.js"></script>

    <script type="text/javascript" src="js/jquery-ui.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

    
    <script type="text/javascript" src="js/frente_caixa_gerencia.js"></script>

    <script type="text/javascript" src="js/datepiker.js"></script>

    <meta name="msapplication-TileColor" content="#e27e0c">

    <meta name="msapplication-TileImage" content="ico/mstile-144x144.png">

    <meta name="msapplication-config" content="ico/browserconfig.xml">

    <meta name="theme-color" content="#e27e0c">


    <link rel="shortcut icon" href="./favicon.ico.png" type="image/x-icon">

    <title>Ponto de Vendas (:</title>

</head>


<body>
    <form>
        <h1>Teste Troupe</h1>
        <div class="form-row" >
            <div class="col-6">

                <button type="button" data-toggle="modal" onclick="ativar_desativar_botoes_cadastro_cliente()" data-target="#modal_cadastro_cliente" class="btn btn-secondary" style="margin :10px 0 10px 0">

                    Novo Cadastro

                </button>
          
                <input type="text" placeholder="Pesquisar por CPF" id="busca_cpf">
                <input type="button" value="Pesquisar" class="btn-success" onclick="busca_cadastro_cliente(busca_cpf.value)">
            </div>
        </div>
    </form>

    <div id="tabela_principal" class="row col-md-12" style="padding-left: 0px !important; padding-right: 0px !important; margin-left: 0px !important;">
        <table class="table table-striped" id="tabela">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Cpf</th>
                    <th scope="col">Rg</th>
                    <th scope="col">Email</th>
                    <th scope="col">Rua</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Bairro</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Editar</th>

                </tr>

            </thead>
            <?php
            foreach ($trazer_cliente as $cliente) {

                echo '
                
                <tr>
                
                    <th scope="row" id="id_cliente" name="id_cliente" >' . $cliente['id'] . '</td>                    
                    <td>' . $cliente['nome'] . '</td>                    
                    <td>' . $cliente['telefone'] . '</td>
                    <td>' . $cliente['cpf'] . '</td>
                    <td>' . $cliente['rg'] . '</td>
                    <td>' . $cliente['email'] . '</td>
                    <td>' . $cliente['rua'] . '</td>
                    <td>' . $cliente['numero'] . '</td>
                    <td>' . $cliente['bairro'] . '</td>
                    <td>' . $cliente['estado'] . '</td>
                    <td> <input type="button" value="Editar" onclick="busca_cadastro_cliente(' . $cliente["cpf"] . ')"  </td>
                                    
                </tr>
                ';
            }
            ?>
        </table>
    </div>


    <div id="modal_cadastro_cliente" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal">


        <div class="modal-content_2">

            <div class="modal-body">

                <div class="container">

                    <div class="modal-header">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>

                        <h1 class="pagina_pedidos_pendentes" style="margin-left:130px; padding-bottom: 20px;">Cadastro Cliente</h1>


                    </div>



                </div>

            </div>



            <form>


                <div class="form-row">

                    <div class="form-group col-sm-6">

                        <label for="modal_input_cpf">CPF</label>

                        <input type="text" class="form-control" id="modal_input_cpf" required disabled>

                    </div>

                    <div class="form-group col-sm-6">

                        <label for="modal_input_rg">RG</label>

                        <input type="text" class="form-control" id="modal_input_rg" required disabled>

                    </div>


                </div>


                <div class="form-row">

                    <div class="form-group col-sm-4">

                        <label for="modal_input_nome">Nome</label>

                        <input type="text" class="form-control" id="modal_input_nome" required>

                    </div>

                    <div class="form-group col-sm-4">

                        <label for="modal_input_telefone">Telefone</label>

                        <input type="number" class="form-control" id="modal_input_telefone" required>

                    </div>

                    <div class="form-group col-sm-4">

                        <label for="modal_input_email">Email</label>

                        <input class="form-control" id="modal_input_email" required>

                    </div>


                </div>

                <div class="form-row">

                    <div class="form-group col-sm-4">

                        <label for="modal_input_zip">Cep <label style="font-size: 10px; color:red">**Digite para preencher endereco</label> </label>

                        <input type="text" class="form-control" id="modal_input_zip" onblur="preenche_cep()" required>

                    </div>


                    <div class="form-group col-sm-4">

                        <label for="modal_input_numero">Numero</label>

                        <input type="number" class="form-control" id="modal_input_numero" required>

                    </div>

                    <div class="form-group col-sm-4">

                        <label for="modal_input_rua">Rua</label>

                        <input type="text" class="form-control" id="modal_input_rua">

                    </div>



                </div>

                <div class="form-row">

                    <div class="form-group col-sm-3">

                        <label for="modal_input_complemento">Complemento</label>

                        <input type="text" class="form-control" id="modal_input_complemento">

                    </div>

                    <div class="form-group col-sm-3">

                        <label for="modal_input_bairro">Bairro</label>

                        <input type="text" class="form-control" id="modal_input_bairro">

                    </div>

                    <div class="form-group col-sm-4">

                        <label for="modal_input_cidade">Cidade</label>

                        <input type="text" class="form-control" id="modal_input_cidade">

                    </div>



                    <div class="form-group col-sm-2">

                        <label for="modal_select_estado">Estado</label>

                        <select class="form-control" id="modal_select_estado">

                            <option value="Sao Paulo" selected>São Paulo</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Para">Pará</option>
                            <option value="Parana">Parana</option>
                            <option value="Mano Grosso">Mano Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Goias">Goias</option>
                            <option value="Maranhao">Maranhão</option>
                            <option value="Tocantins">Tocantins</option>
                            <option value="Piaui">Piaui</option>
                            <option value="Rondonia">Rondonia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Goias">Goias</option>
                            <option value="Acre">Acre</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Santa catarina">Santa catarina</option>
                            <option value="Paraiba">Paraiba</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Espirito santo">Espirito santo</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Distrito Federal">Distrito Federal</option>

                        </select>

                    </div>

                </div>

                <div class="form-group">

                    <div class="form-check" style="text-align: center;">

                        <input class="form-check-input" type="checkbox" id="modal_ativo" checked>

                        <label class="form-check-label" for="modal_ativo">

                            Ativo ?

                        </label>

                    </div>

                </div>

                <div style="text-align: center;">

                    <!-- <input type="button" id="botao_modal_novo" class="btn btn-warning" onclick="novo_clinte_frente_caixa()" value="Novo"> -->

                    <input type="button" value="Cadastrar" id="botao_cadastrar_cliente" class="btn btn-success" onclick="adicionar_cliente(modal_input_telefone.value,modal_input_nome.value, modal_input_rua.value, modal_input_numero.value,modal_input_complemento.value, modal_input_bairro.value, modal_input_cidade.value, modal_select_estado.value, modal_input_zip.value, modal_ativo.value, modal_input_cpf.value, modal_input_rg.value, modal_input_email.value)">

                    <input type="button" class="btn btn-primary" id="botao_alterar_cliente" onclick="alterar_cliente(modal_input_telefone.value,modal_input_nome.value, modal_input_rua.value, modal_input_numero.value,modal_input_complemento.value, modal_input_bairro.value, modal_input_cidade.value, modal_select_estado.value, modal_input_zip.value, modal_ativo.value, modal_input_cpf.value, modal_input_rg.value, modal_input_email.value)" value="Alterar" disabled hidden>

                    <input type="button" class="btn btn-danger" id="botao_excluir_cliente" onclick="excluir_cliente(modal_input_cpf.value)" value="Excluir" disabled hidden>

                </div>

            </form>

        </div>



    </div>



</body>