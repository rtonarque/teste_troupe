var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
});

function formatar_e_preencher(valor) {
    valor = formatter.format(valor);
    document.getElementById("taxa_entrega").value = valor;
}

function salvar_rest_config(rest_nome, rest_rua, rest_numero, rest_bairro, rest_complemento, rest_cidade, rest_select_estado, taxa_mesa_personalizada, taxa_garcom) {

    // alert("aqui");
    var rest_pais = "Brasil";

    if (rest_nome == "" || rest_rua == "" || rest_numero == "" || rest_bairro == "" || rest_cidade == "" || rest_select_estado == "") {
        alert("Algo não foi preenchido");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/salvar_config.php',
        cache: false,
        dataType: "json",
        data: {
            'rest_nome': rest_nome,
            'rest_rua': rest_rua,
            'rest_numero': rest_numero,
            'rest_bairro': rest_bairro,
            'rest_complemento': rest_complemento,
            'rest_cidade': rest_cidade,
            'rest_estado': rest_select_estado,
            'rest_pais': rest_pais,
            'taxa_mesa_personalizada': taxa_mesa_personalizada,
            'taxa_garcom': taxa_garcom
        },
        success: function() {

            alert("Informações salvas com sucesso !");
            reload_pagina();
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar as config do restaurante");

        }

    })
}


function salvar_funcionamento(abertura, fechamento) {


    if (abertura == "" || fechamento == "") {
        alert("Algo não foi preenchido");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/salvar_funcionamento.php',
        cache: false,
        dataType: "json",
        data: {
            'abertura': abertura,
            'fechamento': fechamento,

        },
        success: function() {

            alert("Horarios salvos com sucesso !");
            reload_pagina();
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar os horarios");

        }

    })
}

function verifica_rest_config() {

    // alert("aqui");

    $.ajax({
        type: 'POST',
        url: 'functions/trazer_dados_rest_config.php',
        cache: false,
        dataType: "json",
        success: function(data) {

            if (data.status == 'ok') {
                if (data.result.nome != "") {

                    document.getElementById('rest_nome').value = data.result.nome;
                    document.getElementById('rest_nome').disabled = true;

                    document.getElementById('rest_rua').value = data.result.rua;
                    document.getElementById('rest_rua').disabled = true;

                    document.getElementById('rest_numero').value = data.result.numero;
                    document.getElementById('rest_numero').disabled = true;

                    document.getElementById('rest_bairro').value = data.result.bairro;
                    document.getElementById('rest_bairro').disabled = true;

                    document.getElementById('rest_complemento').value = data.result.complemento;
                    document.getElementById('rest_complemento').disabled = true;

                    document.getElementById('rest_cidade').value = data.result.cidade;
                    document.getElementById('rest_cidade').disabled = true;

                    $("#rest_select_estado").val(data.result.estado);
                    // document.getElementById('rest_select_estado').value = ;
                    document.getElementById('rest_select_estado').disabled = true;

                    document.getElementById("rest_taxa_mesa_personalizada").value = data.result.taxa_mesa_personalizada;

                    document.getElementById("rest_taxa_garcom").value = data.result.taxa_garcom;
                    // document.getElementById("rest_taxa_mesa_personalizada").disabled = true;                    

                    document.getElementById('salvar_config').disabled = true;
                }
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar as config do restaurante");

        }

    });

    verifica_funcionamento();


}

function verifica_funcionamento() {

    $.ajax({
        type: 'POST',
        url: 'functions/verificar_funcionamento.php',
        cache: false,
        dataType: "json",
        success: function(data) {

            if (data.status == 'ok') {

                document.getElementById('select_abertura').value = data.result.abertura;
                document.getElementById('select_abertura').disabled = true;

                document.getElementById('select_fechamento').value = data.result.fechamento;
                document.getElementById('select_fechamento').disabled = true;

                document.getElementById('salvar_funcionamento').disabled = true;
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao retornar as config de funcionamento");

        }

    })
}

function liberar_campos_config_funcionamento() {

    document.getElementById("select_abertura").disabled = false;
    document.getElementById("select_fechamento").disabled = false;
    document.getElementById("salvar_funcionamento").disabled = false;

    alert("Campos liberados");
}


function liberar_campos_config() {

    document.getElementById("rest_nome").disabled = false;
    document.getElementById("rest_rua").disabled = false;
    document.getElementById("rest_numero").disabled = false;
    document.getElementById("rest_bairro").disabled = false;
    document.getElementById("rest_complemento").disabled = false;
    document.getElementById("rest_cidade").disabled = false;
    document.getElementById("rest_select_estado").disabled = false;
    document.getElementById("rest_taxa_mesa_personalizada").disabled = false;
    document.getElementById("rest_taxa_garcom").disabled = false;
    document.getElementById("salvar_config").disabled = false;
    alert("Campos liberados");

}

function trazer_preco(km) {

    $.ajax({
        type: 'POST',
        url: 'functions/trazer_preco.php',
        cache: false,
        dataType: "json",
        data: {
            'km': km
        },
        success: function(data) {

            if (data.status == 'ok') {

                document.getElementById('taxa_entrega').value = formatter.format(data.result.preco);

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao retornar as config de funcionamento");

        }

    })
}

function salvar_taxa_entrega(km, preco) {

    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_taxa_entrega.php',
        cache: false,
        dataType: "json",
        data: {
            'km': km,
            'preco': preco
        },
        success: function(data) {

            if (data.status == 'ok') {

                alert("Preco salvo");
                reload_pagina();

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao salvar o preco");

        }

    })
}

function sincronizar_produtos() {

    $.ajax({
        type: 'POST',
        url: 'functions/index_integracao_produtos.php',
        cache: false,
        dataType: "json",
        // data: {

        // },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        timeout: 15000,
        success: function(data) {

            if (data.result == 'ok') {

                alert("Produtos atualizados (:");
                reload_pagina();

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao atualizar produtos");

        }

    });
}

function adicionar_bairro(bairro, preco) {

    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_bairro.php',
        cache: false,
        dataType: "json",
        data: {
            'bairro': bairro,
            'preco': preco
        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        // timeout: 15000,
        success: function(data) {

            if (data.status == 'ok') {

                alert("bairro adicionado");
                reload_pagina();

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao atualizar produtos");

        }

    })
}

function remover_bairro(id_bairro) {

    $.ajax({
        type: 'POST',
        url: 'functions/remover_bairro.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_bairro

        },
        beforeSend: function() {
            $("#divCarregando").show();

        },
        complete: function() {
            $('#divCarregando').fadeOut('slow');
        },
        // timeout: 15000,
        success: function(data) {

            if (data.status == 'ok') {

                alert("bairro removido");
                reload_pagina();

            }
        },
        error: function() {
            alert("Algo errado não esta certo ao atualizar produtos");

        }

    })

}

document.addEventListener('DOMContentLoaded', function() {

    verifica_rest_config();

    //Verifica e solicita se o usuario tem permissão para utilizar as notificações do chrome
    // debugger;
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.');
        return;
    }

    //Se não tem permissão, solicita a autorização do usuário
    if (Notification.permission !== "granted")
        Notification.requestPermission();

});

function reload_pagina() {

    window.location.reload(true);

}