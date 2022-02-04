var nome = $('#name')
var usuario = $('#user')
var email = $('#email')
var cpf = $('#cpf')
var tel = $('#telefone')
var senha = $('#password')
var confSenha = $('#confirm_password')
var cidade = $('#cidades')
var bairro = $('#bairros')

$(document).ready(function(){
    if($('#usu').val() != null) {
        preencher_cadastro($('#usu').val())
    }else{

    }
})

function preencher_cadastro(usuario_cpf) {
    $.ajax({
        url:'api.php',
        type: 'POST',
        dataType: 'json',
        data:{
            action: 'buscar_prestador',
            usuario: usuario_cpf
        },
        success:function(json){
            nome.val(json.data[0]['pr_nome'])
            usuario.val(json.data[0]['pr_usuario'])
            email.val(json.data[0]['pr_email'])

            if(json.data[0]['pr_cpf'].length <= 14){ 
                cpf.val(json.data[0]['pr_cpf']).mask('000.000.000-009999'); // cpf
            } else if(json.data[0]['pr_cpf'].length > 14) {
                cpf.val(json.data[0]['pr_cpf']).mask('00.000.000/0000-00');  // cnpj
            }
            
            if(json.data[0]['pr_telefone'].length <= 13){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
                tel.val(json.data[0]['pr_telefone']).mask('(00) 0000-00009');
            } else if(json.data[0]['pr_telefone'].length > 13){
                tel.val(json.data[0]['pr_telefone']).mask('(00) 00000-0000');
            }

            cidade.val(json.data[0]['pr_cidade'])
            carrega_bairros()
            // setTimeout(() => {
                bairro.val(json.data[0]['pr_bairro'])
            // }, 1000);
            confSenha.attr('disabled', true)
            cpf.attr('disabled', true)
        }
    })
}

cidade.on('change', function(){
    carrega_bairros()

})

function carrega_bairros(){
    $('#bairros').html('<option value="0">Selecione um bairro...</option>')
    
    if(cidade.val() != 0){
       $.ajax({
            url:'api.php',
            type: 'POST',
            dataType: 'json',
            data: {
                cidade: cidade.val(),
                action: 'buscar_bairros'
            },
            success:function(json){
                if(json.status){
                    for (let i = 0; i < json.data.length; i++) {
                        $('#bairros').append('<option value="'+json.data[i].id_bairro+'">'+json.data[i].ba_descricao+'</option>')
                    }
                }
            }
        })
    }
}

function voltar() {
    alert('teste')
    window.location = 'logout.php'
}

$('#name').on('keyup', function(){
    border_alert(true, this)
    nome.val(nome.val().toUpperCase()) 
})

$('#user').on('keyup', function(){
    border_alert(true, this)
    usuario.val(usuario.val().toUpperCase())
})

$('#email').on('keydown', function(){
    border_alert(true, this)
})

$('#telefone').on('keydown', function() {
    border_alert(true, this)
    if($(this).val().length <= 13){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
        $('#telefone').mask('(00) 0000-00009');
    } else if($(this).val().length > 13){
        $('#telefone').mask('(00) 00000-0000');
    }
})

$('#cpf').blur(function() {
    if($(this).val().length <= 14){
        if(!validarCPF($(this).val())){
            alerta(false, "CPF inválido!")
            border_alert(false, this)
            $(this).focus()
        }
    }else {
        if(!validarCNPJ($(this).val())){
            alerta(false, "CNPJ inválido!")
            border_alert(false, this)
            $(this).focus()
        }
    }
})

$('#cpf').on('keydown', function() {
    border_alert(true, this)
    if($(this).val().length <= 14){ 
        $('#cpf').mask('000.000.000-009999'); // cpf
    } else if($(this).val().length > 14) {
        $('#cpf').mask('00.000.000/0000-00');  // cnpj
    }
})

$('#password').on('keydown', function(){
    border_alert(true, this)
    $('#confirm_password').val("")
})

$('#password').blur(function(){
    if(senha.val() != ""){
        confSenha.attr('disabled', false)
    }
})

$('#confirm_password').on('keydown', function(){
    border_alert(true, this)
})

$('#confirm_password').blur(function(){
   if(!conf_password()){
       border_alert(false, this)
       alerta(false, "Confirmação de senha incorreta!")
   }
})

$('#cidades').on('change', function(){
    border_alert(true, this)
})

$('#bairros').on('change', function(){
    border_alert(true, this)
})

function Salvar(){
   
    if(verifica()) {
        var form_data = new FormData()

        form_data.append('action', 'cad_tomador')
        form_data.append('nome', nome.val())
        form_data.append('usuario', usuario.val())
        form_data.append('email', email.val())
        form_data.append('tomador',cpf.val())
        form_data.append('telefone', tel.val())
        if(senha.val().length != 0){
            form_data.append('senha', MD5(senha.val())) 
        }
        form_data.append('cidade', cidade.val())
        form_data.append('bairro', bairro.val())
        
        $.ajax({
            url:'api.php',
            type:'POST',
            dataType:'json',
            enctype: 'multipart/form-data',
            processData: false,
            contentType: false,
            cache: false,
            data: form_data,
            success:function(data){
            if(data.status == true){
                alerta(data.status, data.msg)
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }else{
                alerta(data.status, data.msg)
            }
                },
        error:function(e){
            console.log(e)
        }
        });
        border_alert(false, this)
    }else {
        alerta(false, "Dado(s) obrigatório(s)!")
    }
}

function limpaCampos(){
    $('.name').val("")
    $('.user').val("")
    $('.email').val("")
    $('.cpf').val("")
    $('.telefone').val("")
    $('.password').val("")
    $('.confirm_password').val("")
}

function verifica(){
    
    let erro = 0

    if($('#name').val() == ""){
        this.name = 'name'
        border_alert(false, this)
        erro++
    }

    if($('#user').val() == ""){
        this.name = 'user'
        border_alert(false, this)
        erro++
    }

    if($('#email').val() == ""){
        this.name = 'email'
        border_alert(false, this)
        erro++
    }
    
    if($('#cpf').val() == ""){
        this.name = 'cpf'
        border_alert(false, this)
        erro++
    }
    
    if($('#telefone').val() == ""){
        this.name = 'telefone'
        border_alert(false, this)
        erro++
    }
    
    if($('#password').val().trim().length < 6 && $('#password').val().trim().length != 0){
        this.name = 'password'
        border_alert(false, this)
        erro++
    }

    if($('#cidades').val() == 0) {
        this.name = 'cidades'
        border_alert(false, this)
        erro++
    }
    
    if($('#bairros').val() == 0) {
        this.name = 'bairros'
        border_alert(false, this)
        erro++
    }

    if(erro > 0) {
        return false
    }

    return true
}

function conf_password() {
    if(confSenha.val()  != senha.val()){
        return false
    }else {
        return true
    }

}