var cidade = $('#cidades')
var tel = $('#telefone')
var arquivos = document.getElementById('up_fotos');
var output = document.getElementById('exibe');

cidade.on('change', function(){
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
})

function voltar() {
    window.location = 'linkservico.php'
}

$('#telefone').on('keydown', function() {
   if($(this).val().length <= 13){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
      $('#telefone').mask('(00) 0000-00009');
   } else if($(this).val().length > 13){
      $('#telefone').mask('(00) 00000-0000');
   }
})

$('#cpf').blur(function() {
    if(!VerificaCPF($(this).val())){
        alerta(false, "CPF inválido!")
        border_alert(false, this)
        $(this).focus()
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

$('#confirm_password').blur(function(){
    if($(this).val()  != $('#password').val()){
        alerta(false, 'Confirmação de senha não confere!')
        border_alert(false, this)
    }
})

$('#confirm_password').on('keydown', function(){
    border_alert(true, this)
})

$('#descricao_servico').focusin(function(){
    $(this).val("")
})

var saveArray = []

updateList = function() {
    if(saveArray.length < 3){
        for (var i = 0; i < arquivos.files.length; i++) {
            saveArray.push(arquivos.files.item(i))
        }
        list_file()
    }else {
        alerta(false, "Só é premitido 3 arquivos!")
    }
        console.log(saveArray.length)
}

function remover(n,cont){
    $(n).remove()
    saveArray.splice(cont, 1)
    list_file()
    console.log(saveArray.length)

}

function list_file(){
    let children = ""
    for (var x = 0; x < saveArray.length; x++){
        children += '<li id="file_'+x+'">' + saveArray[x].name + '<i  onclick="remover(file_'+x+','+x+')" style="margin-left:17px; color:red" class="fa fa-trash"></i></li>';
    }
    
    output.innerHTML = '<ul style="list-style: none;">'+children+' </ul>'
}

function Salvar(){
    verifica()

    var form_data = new FormData();

    form_data.append('action', 'cad_prestador');
    
    for ( var key in saveArray ) {

        form_data.append(key, saveArray[key]);
    }
  
	$.ajax({
        url:'api.php',
        type:'post',
        dataType:'json',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data:form_data,
        success:function(data){
    
        if(data.status == true){
           alerta(data.status, data.msg)
           $('#exibe>ul').remove()
           $('.dados_pessoais>input').val("")
           $('#descricao_servico').val('')
           $('select').val('0').trigger('change')
           saveArray = []
        }else{
          alerta(data.status, data.msg)
        }
			},
      error:function(e){
        console.log(e)
      }
    });
}

function verifica(){
    let erro = 0
    if($('#name').val() == ""){
        border_alert(false, this)
        erro++
    }

    if($('#user').val() == ""){
        border_alert(false, this)
        erro++
    }

    if($('#email').val() == ""){
        border_alert(false, this)
        erro++
    }
    
    if($('#telefone').val() == ""){
        border_alert(false, this)
        erro++
    }
    
    if($('#senha').val().trim() == "" || $('#senha').length < 6){
        border_alert(false, this)
        erro++
    }
    
    if($('#descricao_servico').val().trim() == "" || $('#descricao_servico').length < 20){
        border_alert(false, this)
        erro++
    }

}