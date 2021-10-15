var formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
});


function adicionar_grupo_opcionaiss(nome_grupo_opcionais, varias_vezes) {

    var opcional_obrigatorio = "";
    if (document.getElementById("input_cadastro_grupo_opcional_radio_opcional").checked == true) {
        opcional_obrigatorio = "opcional";
    } else {
        opcional_obrigatorio = "obrigatorio";
    }

    if (varias_vezes == true) {
        varias_vezes = "sim";
    } else {
        varias_vezes = "nao";
    }

    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_grupo_opcionais.php',
        cache: false,
        dataType: "json",
        data: {
            'nome_grupo': nome_grupo_opcionais,
            'opcional_obrigatorio': opcional_obrigatorio,
            'varias_vezes': varias_vezes
        },
        success: function() {

            alert("GRUPO OPCIONAL ADICIONADO");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("GRUPO OPCIONAL NAO ADICIONADO")

        }

    })
}

function remover_grupo_opcionais(id_grupo_opcionais) {
    // alert(nome_categoria);

    if (id_grupo_opcionais == "Selecione") {
        alert("Selecione um grupo de opcionais");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/remover_grupo_opcionais.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_grupo_opcionais
        },
        success: function() {

            alert("GRUPO OPCIONAL REMOVIDO");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao remover categoria");

        }

    })
}

function alterar_grupo_opcionais(id_grupo_opcional) {

    // alert(id_grupo_opcional);
    if (id_grupo_opcional == "Selecione") {
        alert("Selecione um grupo opcional");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/alterar_grupo_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_grupo_opcional
        },
        success: function(data) {

            document.getElementById("nome_grupo_opcional").value = (data.result.nome);
            $("#select_grupo_categoria_opcionais").val(data.result.categoria);


            document.getElementById("salvar_grupo_opcional").disabled = false;
            document.getElementById("adicionar_grupo_opcional").disabled = true;
        },
        error: function() {
            alert("Algo errado nao esta certo ao alterar a categoria");

        }

    })
}

function atualizar_grupo_opcional(id_grupo_opcional, nome_grupo_opcional) {

    var categoria_nome = "categoria_ALTERAR";
    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_grupo_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_grupo_opcional,
            'nome': nome_grupo_opcional,
            'categoria': categoria_nome
        },
        success: function() {

            alert("GRUPO OPCIONAL ATUALIZADO");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao atualizar grupo opcional");

        }

    })
}


// ------------------------------------------------------------------------------------------------

function remover_categoria(id_categoria) {
    // alert(nome_categoria);

    if (id_categoria == "Selecione") {
        alert("Selecione uma categoria");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/remover_categoria.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_categoria
        },
        success: function() {

            alert("Categoria removida");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao remover categoria");

        }

    })
}

function adicionarr_categoria(nome_categoria, descricao) {

    var nome_correto = nome_categoria;
    // alert(nome_categoria);

    if (nome_categoria == "") {
        alert("Escreva o nome da categoria");
        return;
    } else {
        nome_categoria = nome_correto.replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_").replace(" ", "_");
    }



    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_categoria.php',
        cache: false,
        dataType: "json",
        data: {
            'categoria': nome_categoria,
            'descricao': descricao
        },
        success: function() {

            alert("Categoria adicionada");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Categoria Não adicionada")

        }

    })
}


function alterar_categoria_preencher(id_categoria) {

    // alert(id_categoria);
    if (id_categoria == "Selecione") {
        alert("Selecione uma categoria");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/alterar_categoria.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_categoria
        },
        success: function(data) {

            document.getElementById("nome_categoria").value = (data.result.nome);
            document.getElementById("salvar_categoria").disabled = false;
            document.getElementById("adicionar_categoria").disabled = true;
        },
        error: function() {
            alert("Algo errado nao esta certo ao alterar a categoria");

        }

    })
}

function atualizar_categoria(id_categoria, nome_categoria) {

    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_categoria.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_categoria,
            'nome': nome_categoria
        },
        success: function() {

            alert("Categoria Atualizada");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao atualizar categoria");

        }

    })
}

// --------------------------------------------------------------------------------

function alterar_opcional_preencher(id_opcional) {

    // alert(id_categoria);

    if (id_opcional == "Selecione") {
        alert("Selecione um Opcional");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/alterar_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_opcional
        },
        success: function(data) {

            document.getElementById("nome_opcional").value = (data.result.nome);
            document.getElementById("preco_opcional").value = (data.result.preco_opcional);
            // alert(data.result.grupo);
            $("#select_grupo_opcionais_opcional").val(data.result.grupo);
            $("#select_grupo_categoria_opcionais_opcional").val(data.result.categoria);


            document.getElementById("salvar_opcional").disabled = false;
            document.getElementById("adicionar_opcional").disabled = true;
        },
        error: function() {
            alert("Algo errado nao esta certo ao alterar opcional");

        }

    })
}

function adicionarr_opcional(nome_opcional, preco_adicional, grupo_opcional) {

    // alert(nome_opcional + " " + preco_adicional + " " + grupo_opcional + " " + ativo);

    if (nome_opcional == "" || preco_adicional == "") {
        alert("Escreva o nome/preco do opcional");
        return;
    }

    if (document.getElementById("input_cadastro_opcional_preco_ativo").checked == true) {
        ativo = "sim";
    } else {
        ativo = "nao";
    }



    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'nome': nome_opcional,
            'preco': preco_adicional,
            'grupo_opcional': grupo_opcional,
            'ativo': ativo
        },
        success: function() {

            alert("Adicional adicionado");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado ao cadastrar opcional");

        }

    })
}

function atualizar_opcional(id_opcional, nome_opcional, preco_opcional, grupo) {
    var categoria = "categoria_ALTERAR";
    if (grupo == "Selecione" || categoria == "Selecione") {
        alert("Grupo ou Categoria do OPCIONAL não selecionado");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_opcional,
            'nome': nome_opcional,
            'preco': preco_opcional,
            'grupo': grupo,
            'categoria': categoria
        },
        success: function() {

            alert("Opcional Atualizado");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao Atualizar opcional");

        }

    })
}

function remover_opcionais(id_opcionais) {
    // alert(nome_categoria);
    if (id_opcionais == "Selecione") {
        alert("Selecione um Opcional");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/remover_opcional.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id_opcionais
        },
        success: function() {

            alert("Opcional Removido");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao remover_opcionais()");

        }

    })
}

// ----------------------------------------------------------------------------------------------

function adicionar_grupo_ao_produto(id_grupo_opcionais) {
    var atual = document.getElementById("grupos_opcionais_cad_prod").value;
    document.getElementById("grupos_opcionais_cad_prod").value = atual + id_grupo_opcionais + " + ";
}

function alterar_produto_liberar_campos() {


    document.getElementById("id_produto").disabled = false;

    document.querySelector('#select_categoria_produto').disabled = false;

    document.getElementById("nome").disabled = false;
    document.getElementById("descricao").disabled = false;
    document.getElementById("quantidade").disabled = false;
    document.getElementById("preco_custo").disabled = false;
    document.getElementById("preco_venda").disabled = false;


    $("#produto_cardapio").prop("disabled", false);

    document.getElementById("alterar_produto").disabled = true;

    document.getElementById("salvar_produto").disabled = false;
    document.getElementById("excluir_produto").disabled = false;
}



function adicionarr_produto(categoria, nome, descricao, quantidade, preco_custo, preco_venda, cardapio, grupo_opcionais, codigo_interno, unidade) {

    // alert(categoria + " " + nome + " " + descricao + " " + preco_venda);

    // alert(grupo_opcionais);
    if (nome == "" || descricao == "" || preco_venda == "") {
        alert("Preencha todos os campos para cadastrar o produto");
        return;
    }

    var selecionados = "";

    $.ajax({

        type: 'POST',
        url: 'functions/adicionar_produto.php',
        cache: false,
        dataType: "json",
        data: {

            'categoria': categoria,
            'nome': nome,
            'descricao': descricao,
            'opcionais': selecionados,
            'quantidade': quantidade,
            'preco_custo': preco_custo,
            'preco_venda': preco_venda,
            'cardapio': cardapio,
            'grupo_opcionais': grupo_opcionais,
            'codigo_interno': codigo_interno,
            'unidade': unidade
        },
        success: function() {
            alert("Produto Adicionado");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("erro");
        }
    });
}

function salvar_produto(categoria, nome, descricao, quantidade, preco_custo, preco_venda, cardapio, grupo_opcionais, codigo_interno, unidade, id) {

    // alert(categoria + " " + nome + " " + descricao + " " + preco_venda);

    // alert(grupo_opcionais);
    if (nome == "" || descricao == "" || preco_venda == "") {
        alert("Preencha todos os campos para cadastrar o produto");
        return;
    }

    var selecionados = "";

    $.ajax({

        type: 'POST',
        url: 'functions/atualizar_produto.php',
        cache: false,
        dataType: "json",
        data: {

            'categoria': categoria,
            'nome': nome,
            'descricao': descricao,
            'opcionais': selecionados,
            'quantidade': quantidade,
            'preco_custo': preco_custo,
            'preco_venda': preco_venda,
            'cardapio': cardapio,
            'grupo_opcionais': grupo_opcionais,
            'codigo_interno': codigo_interno,
            'unidade': unidade,
            'id': id
        },
        success: function() {
            alert("Produto Atualizado");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("erro");
        }
    });
}

function liberar_alterar_produto_adiconado() {
    $("#row_produto_liberar").find('input[name="produto_liberar"]').each(function() {
        this.disabled = false;
    });


}

function remover_produto(id_produto) {

    $.ajax({

        type: 'POST',
        url: 'functions/excluir_produto.php',
        cache: false,
        dataType: "json",
        data: {

            'id': id_produto
        },
        success: function() {
            alert("Produto Removido");
            $("#div_cadastro_produto").html();
            $("#div_cadastro_produto").load("functions/adicionar_html_produto.php");
        },
        error: function() {
            alert("Algo errado nao esta certo ao remover_produto()");
        }
    })
}

function produto_novo() {

    $.ajax({
        type: 'POST',
        url: 'functions/produto_novo.php',
        cache: false,
        dataType: "json",
        data: {

        },
        success: function(data) {
            var numero = parseInt(data.result.id);
            numero++;
            document.getElementById("id_produto").value = numero;
            document.getElementById("select_produto").value = "";

            document.getElementById("adicionar_produto").disabled = false;

        },
        error: function() {
            alert("Algo errado nao esta certo ao gerar pedido_novo()");

        }

    })


}

function reload_pagina() {

    window.location.reload(true);

}

function pesquisar_produto(selecionado) {

    if (selecionado == "" || selecionado == null || selecionado == "Selecione") {
        alert("Selecione um produto");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/preencher_campos_pesquisar_produto.php',
        cache: false,
        dataType: "json",
        data: {
            'valor': selecionado
        },
        success: function(data) {


            document.getElementById("id_produto").value = (data.result.id);

            document.querySelector('#select_categoria_produto').value = (data.result.categoria);

            document.getElementById("nome").value = (data.result.nome);
            document.getElementById("descricao").value = (data.result.descricao);
            document.getElementById("quantidade").value = (data.result.quantidade);
            document.getElementById("preco_custo").value = (data.result.preco_custo);
            document.getElementById("preco_venda").value = (data.result.preco_venda);

            var fotoProduto = new Image(200, 200);
            fotoProduto.src = '../upload/' + (data.result.imagem);
            document.getElementById("msg").append(fotoProduto);

            if (data.result.cardapio == "true") {
                $("#produto_cardapio").prop("checked", true);
            } else {
                $("#produto_cardapio").prop("checked", false);
            }

            var opcionais_selecionados = (data.result.opcionais);
            // alert(selecionados);""
            //var opcionais_selecionados = opcionais_selecionados.replace("_", "ㅤ");

            var selecionados = opcionais_selecionados.split(" ");


            for (var i in selecionados) {
                $("#opcional_produto_" + selecionados[i]).prop("checked", true);
            }


            document.getElementById("id_produto").disabled = true;

            document.querySelector('#select_categoria_produto').disabled = true;

            document.getElementById("nome").disabled = true;
            document.getElementById("descricao").disabled = true;
            document.getElementById("quantidade").disabled = true;
            document.getElementById("preco_custo").disabled = true;
            document.getElementById("preco_venda").disabled = true;

            document.getElementById("novo_produto").disabled = true;
            document.getElementById("adicionar_produto").disabled = true;

            document.getElementById("pesquisa_produto").disabled = true;

            document.getElementById("alterar_produto").disabled = false;

            $("#produto_cardapio").prop("disabled", true);

        },
    });
    //console.log("teste do preencher");

}

function limpar_campos() {

    document.getElementById("id_produto").value = "";

    document.querySelector('#select_categoria_produto').value = "";

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco_custo").value = "";
    document.getElementById("preco_venda").value = "";
    document.getElementById("tipo").value = "";

    $("#produto_cardapio").prop("checked", false);

    alterar_produto_liberar_campos();

}

function limpar_campos_produto() {

    document.getElementById("id_produto").value = "";

    document.querySelector('#select_categoria_produto').value = "";

    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco_custo").value = "";
    document.getElementById("preco_venda").value = "";
    document.getElementById("tipo").value = "";

    $("#produto_cardapio").prop("checked", false);


    // DESTICAR OS CHECKBOX TICADOS


    alterar_produto_liberar_campos();

    document.getElementById("novo_produto").disabled = false;
    document.getElementById("pesquisa_produto").disabled = false;

    document.getElementById("alterar_produto").disabled = true;
    document.getElementById("excluir_produto").disabled = true;
    document.getElementById("adicionar_produto").disabled = true;
    document.getElementById("salvar_produto").disabled = true;
    document.getElementById("id_produto").disabled = true;

}


function nova_pagina(novo_link) {

    window.location.replace(novo_link);

}


function limpar_pedido() {
    document.getElementById("nome_cliente").value = "";
    document.getElementById("endereco_cliente").value = "";
    document.getElementById("telefone_cliente").value = "";
    document.getElementById("itens_cliente").value = "";

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

// ----------------- CADASTRO USUARIOS INICIO -------------------

function busca_preenche_usuario(id) {

    $.ajax({
        type: 'POST',
        url: 'functions/busca_usuario_id.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id
        },
        success: function(data) {

            if (data.status == 'ok') {

                document.getElementById('cad_usuarios_nome').value = data.result.nome;
                document.getElementById('cad_usuarios_senha').value = data.result.senha;
                document.getElementById('cad_usuarios_telefone').value = data.result.telefone;
                document.getElementById('cad_usuarios_endereco').value = data.result.endereco;
                document.getElementById('cad_usuarios_funcao').value = data.result.funcao;
                document.getElementById('cad_usuarios_cpf').value = data.result.cpf;
                document.getElementById('cad_usuarios_rg').value = data.result.rg;
                if (data.result.ativo == "true") {
                    document.getElementById('cad_usuarios_ativo').checked = true;
                } else {
                    document.getElementById('cad_usuarios_ativo').checked = false;
                }

                document.getElementById("botao_limpar_cadastro_usuario").disabled = false;
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao retornar os dados de usuarios");

        }

    })
}

function adicionar_usuarios(nome, senha, endereco, telefone, cpf, rg, funcao, ativo) {

    if (nome == "" || senha == "" || endereco == "" || telefone == "" || cpf == "" || rg == "" || funcao == "") {
        alert("algo nao foi prenchido");
        return;
    }

    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_usuarios.php',
        cache: false,
        dataType: "json",
        data: {
            'nome': nome,
            'senha': senha,
            'funcao': funcao,
            'endereco': endereco,
            'rg': rg,
            'cpf': cpf,
            'telefone': telefone,
            'ativo': ativo
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Usuario adicionado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao adicionar usuario");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}

function alterar_usuarios(nome, senha, endereco, telefone, cpf, rg, funcao, ativo, id) {


    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_cadastro_usuario.php',
        cache: false,
        dataType: "json",
        data: {
            'nome': nome,
            'senha': senha,
            'funcao': funcao,
            'endereco': endereco,
            'rg': rg,
            'cpf': cpf,
            'telefone': telefone,
            'ativo': ativo,
            'id': id
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Usuario Alterado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao alterar usuario");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}

function liberar_campos_cadastro_usuarios() {

    document.getElementById('cad_usuarios_nome').disabled = false;
    document.getElementById('cad_usuarios_senha').disabled = false;
    document.getElementById('cad_usuarios_telefone').disabled = false;
    document.getElementById('cad_usuarios_endereco').disabled = false;
    document.getElementById('cad_usuarios_funcao').disabled = false;
    document.getElementById('cad_usuarios_cpf').disabled = false;
    document.getElementById('cad_usuarios_rg').disabled = false;

    document.getElementById("selec_usuario_cadastro_usuario").disabled = false;


    document.getElementById('botao_limpar_cadastro_usuario').disabled = false;
    document.getElementById('botao_alterar_cadastro_usuario').disabled = false;
    document.getElementById('botao_novo_cadastro_usuario').disabled = false;
    document.getElementById('botao_salvar_cadastro_usuario').disabled = true;
    document.getElementById('botao_excluir_cadastro_usuario').disabled = false;

}

function novo_cadastro_usuario() {

    document.getElementById('cad_usuarios_nome').value = "";
    document.getElementById('cad_usuarios_senha').value = "";
    document.getElementById('cad_usuarios_telefone').value = "";
    document.getElementById('cad_usuarios_endereco').value = "";
    document.getElementById('cad_usuarios_funcao').value = "";
    document.getElementById('cad_usuarios_cpf').value = "";
    document.getElementById('cad_usuarios_rg').value = "";
    document.getElementById('cad_usuarios_ativo').value = "";
    document.getElementById('selec_usuario_cadastro_usuario').value = "";


    document.getElementById("selec_usuario_cadastro_usuario").disabled = true;
    document.getElementById('cad_usuarios_nome').disabled = false;
    document.getElementById('cad_usuarios_senha').disabled = false;
    document.getElementById('cad_usuarios_telefone').disabled = false;
    document.getElementById('cad_usuarios_endereco').disabled = false;
    document.getElementById('cad_usuarios_funcao').disabled = false;
    document.getElementById('cad_usuarios_cpf').disabled = false;
    document.getElementById('cad_usuarios_rg').disabled = false;
    document.getElementById('cad_usuarios_ativo').disabled = false;

    document.getElementById('botao_limpar_cadastro_usuario').disabled = true;
    document.getElementById('botao_alterar_cadastro_usuario').disabled = true;
    document.getElementById('botao_novo_cadastro_usuario').disabled = false;
    document.getElementById('botao_salvar_cadastro_usuario').disabled = false;
    document.getElementById('botao_excluir_cadastro_usuario').disabled = false;



}

function excluir_usuario_cadastrado(id) {

    if (id == null || id == "") {
        return;
    }

    $.ajax({

        type: 'POST',
        url: 'functions/excluir_usuario_cadastrado.php',
        cache: false,
        dataType: "json",
        data: {

            'id': id
        },
        success: function() {
            alert("Usuario Removido");
            reload_pagina();
        },
        error: function() {
            alert("Algo errado nao esta certo ao excluir usuario");
        }
    })

}

// ----------------- CADASTRO USUARIOS FIM -------------------



// ----------------- CADASTRO GARCOM INICIO -------------------

function adicionar_garcom(nome, apelido, turno, endereco, rg, cpf, telefone, ativo) {

    // alert(razao_social + " " + nome_fantasia + " " + email + " " + telefone + " " + contato + " " + endereco + " " + estado + " " + cep + " " + ativo);


    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_garcom.php',
        cache: false,
        dataType: "json",
        data: {
            'nome': nome,
            'apelido': apelido,
            'turno': turno,
            'endereco': endereco,
            'rg': rg,
            'cpf': cpf,
            'telefone': telefone,
            'ativo': ativo
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Garcom adicionado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao adicionar garcom");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}

function busca_preenche_garcom(id) {

    $.ajax({
        type: 'POST',
        url: 'functions/busca_garcom_id.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id
        },
        success: function(data) {

            if (data.status == 'ok') {


                document.getElementById('cad_garcom_nome').value = data.result.nome;
                document.getElementById('cad_garcom_apelido').value = data.result.apelido;
                document.getElementById('cad_garcom_turno').value = data.result.turno;
                document.getElementById('cad_garcom_cpf').value = data.result.cpf;
                document.getElementById('cad_garcom_rg').value = data.result.rg;
                document.getElementById('cad_garcom_endereco').value = data.result.endereco;
                document.getElementById('cad_garcom_telefone').value = data.result.telefone;

                if (data.result.ativo == "true") {
                    $('#cad_garcom_ativo').checked = true;
                } else {
                    $('#cad_garcom_ativo').checked = false;
                }

                document.getElementById("botao_limpar_cadastro_garcom").disabled = false;
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao retornar dados garcom");

        }

    })
}

function liberar_campos_cadastro_garcom() {


    document.getElementById('cad_garcom_nome').disabled = false;
    document.getElementById('cad_garcom_apelido').disabled = false;
    document.getElementById('cad_garcom_turno').disabled = false;
    document.getElementById('cad_garcom_cpf').disabled = false;
    document.getElementById('cad_garcom_rg').disabled = false;
    document.getElementById('cad_garcom_endereco').disabled = false;
    document.getElementById('cad_garcom_telefone').disabled = false;

    document.getElementById("selec_cadastro_garcom").disabled = false;


    document.getElementById('botao_limpar_cadastro_garcom').disabled = false;
    document.getElementById('botao_alterar_cadastro_garcom').disabled = false;
    document.getElementById('botao_novo_cadastro_garcom').disabled = false;
    document.getElementById('botao_salvar_cadastro_garcom').disabled = true;
    document.getElementById('botao_excluir_cadastro_garcom').disabled = false;

}

function alterar_garcom(nome, apelido, turno, endereco, rg, cpf, telefone, ativo, id) {


    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_cadastro_garcom.php',
        cache: false,
        dataType: "json",
        data: {
            'nome': nome,
            'apelido': apelido,
            'turno': turno,
            'endereco': endereco,
            'rg': rg,
            'cpf': cpf,
            'telefone': telefone,
            'ativo': ativo,
            'id': id
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Usuario Alterado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao alterar usuario");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}

function novo_cadastro_garcom() {

    document.getElementById('cad_garcom_nome').value = "";
    document.getElementById('cad_garcom_apelido').value = "";
    document.getElementById('cad_garcom_turno').value = "";
    document.getElementById('cad_garcom_cpf').value = "";
    document.getElementById('cad_garcom_rg').value = "";
    document.getElementById('cad_garcom_endereco').value = "";
    document.getElementById('cad_garcom_telefone').value = "";

    document.getElementById("selec_cadastro_garcom").value = "";
    document.getElementById("selec_cadastro_garcom").disabled = true;

    document.getElementById('cad_garcom_nome').disabled = false;
    document.getElementById('cad_garcom_apelido').disabled = false;
    document.getElementById('cad_garcom_turno').disabled = false;
    document.getElementById('cad_garcom_cpf').disabled = false;
    document.getElementById('cad_garcom_rg').disabled = false;
    document.getElementById('cad_garcom_endereco').disabled = false;
    document.getElementById('cad_garcom_telefone').disabled = false;

    document.getElementById('botao_limpar_cadastro_garcom').disabled = true;
    document.getElementById('botao_alterar_cadastro_garcom').disabled = true;
    document.getElementById('botao_novo_cadastro_garcom').disabled = false;
    document.getElementById('botao_salvar_cadastro_garcom').disabled = false;
    document.getElementById('botao_excluir_cadastro_garcom').disabled = false;

}

function excluir_garcom_cadastrado(id) {

    if (id == null || id == "") {
        return;
    }

    $.ajax({

        type: 'POST',
        url: 'functions/excluir_garcom_cadastrado.php',
        cache: false,
        dataType: "json",
        data: {

            'id': id
        },
        success: function() {
            alert("Garcom Removido");
            reload_pagina();
        },
        error: function() {
            alert("Algo errado nao esta certo ao excluir garcom");
        }
    })

}

// ----------------- CADASTRO GARCOM FIM -------------------


// ----------------- CADASTRO FORNECEDORES INICIO -------------------

function adicionar_fornecedor(razao_social, nome_fantasia, email, telefone, contato, endereco, estado, cep, ativo) {

    // alert(razao_social + " " + nome_fantasia + " " + email + " " + telefone + " " + contato + " " + endereco + " " + estado + " " + cep + " " + ativo);


    $.ajax({
        type: 'POST',
        url: 'functions/adicionar_fornecedor.php',
        cache: false,
        dataType: "json",
        data: {
            'razao_social': razao_social,
            'nome_fantasia': nome_fantasia,
            'email': email,
            'telefone': telefone,
            'contato': contato,
            'endereco': endereco,
            'estado': estado,
            'cep': cep,
            'ativo': ativo
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Fornecedor adicionado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao adicionar fornecedor");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}


function busca_preenche_fornecedores(id) {

    $.ajax({
        type: 'POST',
        url: 'functions/busca_fornecedores_id.php',
        cache: false,
        dataType: "json",
        data: {
            'id': id
        },
        success: function(data) {

            if (data.status == 'ok') {

                document.getElementById('fornecedor_razao_social').value = data.result.razao_social;
                document.getElementById('fornecedor_nome_fantasia').value = data.result.nome_fantasia;
                document.getElementById('fornecedor_email').value = data.result.email;
                document.getElementById('fornecedor_telefone').value = data.result.telefone;
                document.getElementById('fornecedor_contato').value = data.result.contato;
                document.getElementById('fornecedor_endereco').value = data.result.endereco;
                document.getElementById('fornecedor_estado').value = data.result.estado;
                document.getElementById('fornecedor_cep').value = data.result.cep;

                if (data.result.ativo == "true") {
                    document.getElementById('fornecedor_ativo').checked = true;
                } else {
                    document.getElementById('fornecedor_ativo').checked = false;
                }
                document.getElementById("botao_limpar_cadastro_fornecedores").disabled = false;
            }
        },
        error: function() {
            alert("Algo errado não esta certo ao retornar dados fornecedor");

        }

    })
}

function liberar_campos_cadastro_fornecedores() {

    document.getElementById('fornecedor_razao_social').disabled = false;
    document.getElementById('fornecedor_nome_fantasia').disabled = false;
    document.getElementById('fornecedor_email').disabled = false;
    document.getElementById('fornecedor_telefone').disabled = false;
    document.getElementById('fornecedor_contato').disabled = false;
    document.getElementById('fornecedor_endereco').disabled = false;
    document.getElementById('fornecedor_estado').disabled = false;
    document.getElementById('fornecedor_cep').disabled = false;

    document.getElementById("selec_cadastro_fornecedores").disabled = false;


    document.getElementById('botao_limpar_cadastro_fornecedores').disabled = false;
    document.getElementById('botao_salvar_cadastro_fornecedores').disabled = false;
    document.getElementById('botao_novo_cadastro_fornecedores').disabled = false;
    document.getElementById('botao_adicionar_cadastro_fornecedor').disabled = true;
    document.getElementById('botao_excluir_cadastro_fornecedores').disabled = false;

}

function alterar_fornecedores(razao_social, nome_fantasia, email, telefone, contato, endereco, estado, cep, ativo, id) {


    $.ajax({
        type: 'POST',
        url: 'functions/atualizar_cadastro_fornecedores.php',
        cache: false,
        dataType: "json",
        data: {
            'razao_social': razao_social,
            'nome_fantasia': nome_fantasia,
            'email': email,
            'telefone': telefone,
            'contato': contato,
            'endereco': endereco,
            'estado': estado,
            'cep': cep,
            'ativo': ativo,
            'id': id
        },
        success: function(data) {
            if (data.status == "ok") {
                alert("Fornecedore Atualizado");
                reload_pagina();
            } else {
                alert("ALgo errado nao esta certo ao alterar fornecedor");
            }

        },
        error: function() {
            alert("erro");
        }
    })

}

function novo_cadastro_fornecedores() {


    document.getElementById('fornecedor_razao_social').value = "";
    document.getElementById('fornecedor_nome_fantasia').value = "";
    document.getElementById('fornecedor_email').value = "";
    document.getElementById('fornecedor_telefone').value = "";
    document.getElementById('fornecedor_contato').value = "";
    document.getElementById('fornecedor_endereco').value = "";
    document.getElementById('fornecedor_estado').value = "";
    document.getElementById('fornecedor_cep').value = "";

    document.getElementById("selec_cadastro_fornecedores").value = "";
    document.getElementById("selec_cadastro_fornecedores").disabled = true;

    document.getElementById('fornecedor_razao_social').disabled = false;
    document.getElementById('fornecedor_nome_fantasia').disabled = false;
    document.getElementById('fornecedor_email').disabled = false;
    document.getElementById('fornecedor_telefone').disabled = false;
    document.getElementById('fornecedor_contato').disabled = false;
    document.getElementById('fornecedor_endereco').disabled = false;
    document.getElementById('fornecedor_estado').disabled = false;
    document.getElementById('fornecedor_cep').disabled = false;

    document.getElementById('botao_limpar_cadastro_fornecedores').disabled = true;
    document.getElementById('botao_salvar_cadastro_fornecedores').disabled = true;
    document.getElementById('botao_novo_cadastro_fornecedores').disabled = false;
    document.getElementById('botao_adicionar_cadastro_fornecedor').disabled = false;
    document.getElementById('botao_excluir_cadastro_fornecedores').disabled = false;

}

function excluir_fornecedores_cadastrado(id) {

    if (id == null || id == "") {
        return;
    }

    $.ajax({

        type: 'POST',
        url: 'functions/excluir_fornecedor_cadastrado.php',
        cache: false,
        dataType: "json",
        data: {

            'id': id
        },
        success: function() {
            alert("Fornecedor Removido");
            reload_pagina();
        },
        error: function() {
            alert("Algo errado nao esta certo ao excluir fornecedor");
        }
    })

}


// ----------------- CADASTRO FORNECEDORES FIM -------------------

document.addEventListener('DOMContentLoaded', function() {


    $("#imagem").on("change", function() {

        var property = document.getElementById('imagem').files[0];
        var image_name = property.name;
        var image_extension = image_name.split('.').pop().toLowerCase();

        // alert(image_name);

        if (jQuery.inArray(image_extension, ['gif', 'jpg', 'jpeg', '']) == -1) {
            alert("Invalid image file");
        }
        var form_data = new FormData();
        form_data.append("file", property);

        $.ajax({
            url: "functions/upload_preview.php",
            method: 'POST',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function() {
                $('#msg').html("");
            },
            success: function() {

                console.log("aee");
            }
        });

        var fotoProduto = new Image(150, 150);
        fotoProduto.src = "./upload/" + image_name;
        // document.getElementById("imagem").append(fotoProduto);
        $('#msg').append(fotoProduto);


    });



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