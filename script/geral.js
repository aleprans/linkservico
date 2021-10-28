function alerta(status, msg){
    let color = status ? 'green' : 'red'
    $('#alert').attr('style', 'opacity:1; transition:all ease 2s; background-color:'+color)
        $('#alert').text(msg)
        setInterval(() => {
            $('#alert').attr('style', 'opacity:0; transition:all ease 2s')
    }, 5000);
}

function border_alert(status, campo) {
    let color = status ? '' : 'red'
    !status  && campo.focus() 
    document.getElementById(campo.id).style.borderColor = color
}

function VerificaCPF(strCpf) {

    strCpf = strCpf.replace(/[^0-9]/g,'')
    let soma;
    let resto;
    soma = 0;
    const cpf_falso = [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ]

    let verificado = cpf_falso.indexOf(strCpf)

    if (verificado > 0) {
        return false;
    }
    
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(9, 10))) {
        return false;
    }
    
    soma = 0;
    
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    
    if (resto == 10 || resto == 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }
    
    if (resto != parseInt(strCpf.substring(10, 11))) {
        return false;
    }
    
    return true;
    }

function queryString(parameter) {
    var loc = location.search.substring(1, location.search.length)
    var param_value = false
    var params = loc.split("&")
    for (i=0; i<params.length; i++) {
        param_name = params[i].substring(0,params[i].indexOf('='))
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=')+1)
        }
    }
    if (param_value) {
        return param_value
    } else {
        return undefined
    }
}
