var nome = $('#name')
var usuario = $('#user')
var email = $('#email')
var cpf = $('#cpf')
var tel = $('#telefone')
var senha = $('#password')
var confSenha = $('#confirm_password')
var cidade = $('#cidades')
var bairro = $('#bairros')
var categorias = $('#categorias')
var tipo = $('#tipo')
var descricao = $('#descricao_servico')
var arquivos = document.getElementById('up_fotos');
var output = document.getElementById('exibe');
const ext_permitidas = ['jpg', 'jpeg', 'png']
var saveArray = []
var deleteArray = []

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
            json.files[0].shift()
            json.files[0].shift()
            let files = json.files[0]
            for(let i = 0; i < files.length; i++){
                saveArray[i] ={'name':files[i]} 
            }
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
            setTimeout(() => {
                bairro.val(json.data[0]['pr_bairro'])
            }, 1000);
            categorias.val(json.data[0]['pr_categoria'])
            descricao.val(json.data[0]['pr_descricao'])
            confSenha.attr('disabled', true)
            cpf.attr('disabled', true)
            list_file()
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

$('#descricao_servico').on('keydown', function(){
    border_alert(true, this)
})

$('#cidades').on('change', function(){
    border_alert(true, this)
})

$('#bairros').on('change', function(){
    border_alert(true, this)
})

$('#categorias').on('change', function() {
    border_alert(true, this)
})

updateList = function() {
    
    let ext_arquivo = arquivos.files[0].name.split('.').pop()
    let file_size = arquivos.files[0].size /1024 / 1024
    if(typeof ext_permitidas.find(function(ext){ return ext_arquivo == ext; }) == 'undefined') {
        alerta(false, "Extensão inválida!")
    }else {
        if(file_size > 5 ){
            alerta(false, "Arquivo acima do tamanho permitido!")
        }else{
            for (var i = 0; i < arquivos.files.length; i++) {
                saveArray.push(arquivos.files.item(i))
            }
            list_file()
        }  
    } 
}

function remover(n,cont){
    deleteArray.push(saveArray[cont].name)
    $(n).remove()
    saveArray.splice(cont, 1)
    list_file()
}

function list_file(){
    if(saveArray.length > 2 ){
        $('#up_fotos').attr('disabled', true)
    }else {
        $('#up_fotos').attr('disabled', false)
    }
    let children = ""
    for (var x = 0; x < saveArray.length; x++){
        children += '<li id="file_'+x+'">' + saveArray[x].name + '<i  onclick="remover(file_'+x+','+x+')" style="margin-left:17px; color:red" class="fa fa-trash"></i></li>';
    }
  
    output.innerHTML = '<ul style="list-style: none;">'+children+' </ul>'
}

function Salvar(){
   
    if(verifica()) {
        var form_data = new FormData()

        form_data.append('action', 'cad_prestador')
        form_data.append('nome', nome.val())
        form_data.append('usuario', usuario.val())
        form_data.append('email', email.val())
        form_data.append('prestador',cpf.val())
        form_data.append('telefone', tel.val())
        if(senha.val().length != 0){
            form_data.append('senha', MD5(senha.val())) 
        }
        form_data.append('tipo', 1)
        form_data.append('cidade', cidade.val())
        form_data.append('bairro', bairro.val())
        form_data.append('categoria', categorias.val())
        form_data.append('descricao', descricao.val())
        form_data.append('deleteFile', JSON.stringify(deleteArray))
        for ( var key in saveArray ) {
            form_data.append(key, saveArray[key]);
        }
        
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
                deleteArray = []
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
    $('#exibe>ul').remove()
    $('.name').val("")
    $('.user').val("")
    $('.email').val("")
    $('.cpf').val("")
    $('.telefone').val("")
    $('.password').val("")
    $('.confirm_password').val("")
    $('#descricao_servico').val('')
    $('select').val('0').trigger('change')
    saveArray = []
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

    
    if($('#descricao_servico').val().length < 20){
        this.name = 'descricao_servico'
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

    if($('#categorias').val() == 0) {
        this.name = 'categorias'
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