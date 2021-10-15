var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
});

function formatar(numero) {
    var numero_formatado = formatter.format(numero);
    return numero_formatado;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("id_target", ev.target.name);
    // ev.preventDefault();

}

function drop(ev) {
    ev.preventDefault();
    var nome_grupo_opcional = ev.dataTransfer.getData("id_target");
    // ev.target.appendChild(document.getElementById(data));
    // var atual = ev.target.html();
    var atual = ev.target.value;
    ev.target.value = (atual + nome_grupo_opcional + " + ");
    // alert(nome_grupo_opcional);
    // alert("aqui");
    // console.log(ev);
}





function reload_pagina() {

    window.location.reload(true);

}

function reload_paginaa() {

    window.location.reload(true);

}





function excluir_cliente(cpf) {
    $.ajax({
        type: "POST",
        url: "functions/excluir_cliente.php",
        cache: false,
        data: {
            'cpf': cpf
        },
        success: function() {

            alert("Cliente removido");
            reload_pagina();
        },
        error: function() {

            alert("Erro ao excluir cliente");
        }
    })
}


function preenche_cep_retirada() {

    var cep = document.querySelector("#modal_input_zip_retirada");

    var trabalhar_data = (result) => {
        for (var campo in result) {
            if (campo == "logradouro") {
                document.querySelector("#modal_input_rua_retirada").value = result[campo];
            } else if (campo == "bairro") {
                document.querySelector("#modal_input_bairro_retirada").value = result[campo];
            } else if (campo == "localidade") {
                document.querySelector("#modal_input_cidade_retirada").value = result[campo];
            }
            // alert(result[campo]);
        }
    }

    let busca = cep.value.replace("-", "")
    var options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
        .then(response => {
            response.json()
                .then(data => trabalhar_data(data))
        })
        .catch(console.log("erro "))

}

function preenche_cep() {

    var cep = document.querySelector("#modal_input_zip");

    var trabalhar_data = (result) => {
        for (var campo in result) {
            if (campo == "logradouro") {
                document.querySelector("#modal_input_rua").value = result[campo];
            } else if (campo == "bairro") {
                document.querySelector("#modal_input_bairro").value = result[campo];
            } else if (campo == "localidade") {
                document.querySelector("#modal_input_cidade").value = result[campo];
            }
            // alert(result[campo]);
        }
    }

    let busca = cep.value.replace("-", "")
    var options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${busca}/json/`, options)
        .then(response => {
            response.json()
                .then(data => trabalhar_data(data))
        })
        .catch(console.log("erro "))

}

function adicionar_cliente(telefone, nome, rua, numero, complemento, bairro, cidade, estado, zip, ativo, cpf, rg, email) {

    nome = nome.replace("'", "");
    cidade = cidade.replace("'", "");
    estado = estado.replace("'", "");
    rua = rua.replace("'", "");
    bairro = bairro.replace("'", "");
    cpf = cpf.replace("'", "");
    rg = rg.replace("'", "");
    email = email.replace("'", "");




    if (telefone == "" || nome == "" || rua == "" || bairro == "" || cidade == "" || cpf == "" || rg == "" || email == "") {
        alert("algo não foi preenchido");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_cliente.php',
        cache: false,
        dataType: "json",
        data: {
            'telefone': telefone,
            'nome': nome,
            'rua': rua,
            'numero': numero,
            'complemento': complemento,
            'bairro': bairro,
            'cidade': cidade,
            'estado': estado,
            'zip': zip,
            'ativo': ativo,
            'cpf': cpf,
            'rg': rg,
            'email': email

        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        success: function(data) {

            if (data.status == 'certo') {

                alert("Cliente salvo com sucesso ");

                reload_pagina();
                $("#modal_cadastro_cliente").modal('hide');


                busca_cadastro_cliente(data.cpf);

            } else if (data.mensagem == 'duplicado') {
                alert("Cpf/Rg já cadastrado")
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar o cliente");

        }

    })
}

function ativar_desativar_botoes_cadastro_cliente() {

    limpar_modal()

    document.getElementById("botao_cadastrar_cliente").hidden = false;
    document.getElementById("botao_cadastrar_cliente").disabled = false;

    document.getElementById("botao_alterar_cliente").disabled = true;
    document.getElementById("botao_alterar_cliente").hidden = true;
    document.getElementById("botao_excluir_cliente").disabled = true;
    document.getElementById("botao_excluir_cliente").hidden = true;


    document.getElementById("modal_input_cpf").disabled = false;
    document.getElementById("modal_input_rg").disabled = false;


}

function busca_cadastro_cliente(cpf) {

    if (cpf == "" || cpf == null) {
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/busca_cadastro_cliente.php',
        cache: false,
        dataType: "json",
        data: {
            'cpf': cpf
        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        success: function(data) {

            if (data.status == 'correto' && data.result != null) {
                $("#modal_cadastro_cliente").modal('show');


                document.getElementById("botao_cadastrar_cliente").hidden = true;
                document.getElementById("botao_cadastrar_cliente").disabled = true;

                document.getElementById("botao_alterar_cliente").disabled = false;
                document.getElementById("botao_alterar_cliente").hidden = false;
                document.getElementById("botao_excluir_cliente").disabled = false;
                document.getElementById("botao_excluir_cliente").hidden = false;

                document.getElementById("modal_input_cpf").disabled = true;
                document.getElementById("modal_input_rg").disabled = true;


                document.getElementById("modal_input_telefone").value = data.result.telefone;
                ''
                document.getElementById("modal_input_nome").value = data.result.nome;
                document.getElementById("modal_input_rua").value = data.result.rua;
                document.getElementById("modal_input_numero").value = data.result.numero;
                document.getElementById("modal_input_complemento").value = data.result.complemento;
                document.getElementById("modal_input_bairro").value = data.result.bairro;
                document.getElementById("modal_input_cidade").value = data.result.cidade;
                document.getElementById("modal_input_zip").value = data.result.zip;
                document.getElementById("modal_input_cpf").value = data.result.cpf;
                document.getElementById("modal_input_rg").value = data.result.rg;
                document.getElementById("modal_input_email").value = data.result.email;


            } else {
                alert("Cpf não cadastrado")
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar o preco");

        }

    });
}


function alterar_cliente(telefone, nome, rua, numero, complemento, bairro, cidade, estado, zip, ativo, cpf, rg, email) {

    nome = nome.replace("'", "");
    cidade = cidade.replace("'", "");
    estado = estado.replace("'", "");
    rua = rua.replace("'", "");
    rg = rg.replace("'", "");
    cpf = cpf.replace("'", "");
    email = email.replace("'", "");


    if (telefone == "" || nome == "" || rua == "" || bairro == "" || cidade == "" || cpf == "" || rg == "" || email == "") {
        alert("algo não foi preenchido");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/alterar_cliente.php',
        cache: false,
        dataType: "json",
        data: {
            'telefone': telefone,
            'nome': nome,
            'rua': rua,
            'numero': numero,
            'complemento': complemento,
            'bairro': bairro,
            'cidade': cidade,
            'estado': estado,
            'zip': zip,
            'ativo': ativo,
            'rg': rg,
            'cpf': cpf,
            'email': email



        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        success: function(data) {

            if (data.status == 'certo') {

                alert("Cliente Alterado");
                reload_pagina();

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar o cliente");

        }

    })
}



function busca_cadastro_cliente_retirada(telefone) {

    if (telefone == "" || telefone == null) {
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/busca_cadastro_cliente.php',
        cache: false,
        dataType: "json",
        data: {
            'telefone': telefone
        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        success: function(data) {

            if (data.status == 'correto' && data.result != null) {

                document.getElementById("telefone_cliente_retirada").value = data.result.telefone;
                document.getElementById("nome_cliente_retirada").value = data.result.nome;
                document.getElementById("rua_cliente_retirada").value = data.result.rua;
                document.getElementById("numero_cliente_retirada").value = data.result.numero;
                document.getElementById("cidade_cliente_retirada").value = data.result.cidade;
                document.getElementById("estado_cliente_retirada").value = data.result.estado;
                document.getElementById("bairro_cliente_retirada").value = data.result.bairro;
                document.getElementById("complemento_cliente_retirada").value = data.result.complemento;
                document.getElementById("frente_caixa_aniversario_retirada").value = data.result.aniversario;

            } else {
                alert("Cliente ainda não cadastrado, cadastre agora !");
                limpar_modal();

                $('#modal_cadastro_cliente_retirada').modal('show');
                document.getElementById("modal_input_telefone_retirada").value = telefone;
                document.getElementById("modal_input_telefone_retirada").focus = true;
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar o preco");

        }

    })
}

function limpar_modal() {

    document.getElementById("modal_input_telefone").value = "";
    document.getElementById("modal_input_nome").value = "";
    document.getElementById("modal_input_rua").value = "";
    document.getElementById("modal_input_numero").value = "";
    document.getElementById("modal_input_complemento").value = "";
    document.getElementById("modal_input_bairro").value = "";
    document.getElementById("modal_input_cidade").value = "";
    document.getElementById("modal_input_zip").value = "";
    document.getElementById("modal_input_cpf").value = "";
    document.getElementById("modal_input_rg").value = "";
    document.getElementById("modal_input_email").value = "";


}

function tocar() {
    var audio1 = new Audio();
    audio1.src = 'functions/Hello.ogg';
    // audio1.src = "audio/samples/F.mp3";
    audio1.play();
    // $('#audio').html('<audio autoplay><source src="audio/ding.mp3"></audio>');
}

document.addEventListener('DOMContentLoaded', function() {





});