var user = $('#user')
let pass = $('#pass')

limpa_campos()
user.focus()

function logar() {
    var form_data = new FormData()

    form_data.append('user',user.val())
    form_data.append('pass', MD5(pass.val()))
    form_data.append('action', 'logar')

    $.ajax({
        url: 'api.php',
        type: 'post',
        dataType: 'json',
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        cache: false,
        data: form_data,
        success:function(json){
            if(json.status){
                limpa_campos()
                alerta(true, json.msg)
                if(json.data[0].tipo_usuario == 1){
                    var tipo = 'cadastroPrest.php'
                }else {
                    var tipo = 'cadastroTomador.php'
                }
                setInterval(() => {
                    window.location = tipo
                }, 1500);
            }else {
                alerta(false, json.msg)
            }
        }
    })
}

function voltar() {
    limpa_campos()
    window.location = "index.php"
}

function limpa_campos() {
    user.val("")
    pass.val("")
}

$(document).on('keydown', function(event) {
    
    if(event.keyCode === 13) {
        
        if (user.val() != "" && pass.val() != "") {
            logar()
        }else if(user.val() != ""){
            pass.focus()
        }
    }

})