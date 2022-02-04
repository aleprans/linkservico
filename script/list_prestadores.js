var term = queryString("term")
var categoria = queryString("cat")

setInterval(function(){ 
    anuncios_r()
    anuncios_l()
    anuncios_f()
    ; }, 5000);



$(document).ready(function(){
    busca_anunciantes()
    busca_prestador()
    
    
})

function busca_anunciantes(){
    $.ajax({
        url: 'api.php',
        type: 'post',
        dataType: 'json',
        cache: false,
        data: {action: 'anunciantes'},
        success:function(json){
            if(json.status) {
                anunciantes = json.anunciantes
                anuncios_r()
                anuncios_l()
                anuncios_f()
            }
        }
    })
}

function busca_prestador(){
    $.ajax({
        url: 'api.php',
        type: 'post',
        dataType: 'json',
        data: {
            term: term,
            cat: categoria,
            action: 'buscar_prestadores_palavra'
        },
        success:function(json){
            if(json.status){
                let prestadores = ""
                for (var i = 0; i < json.data.length; i++){
                    let prest = '<div class="prestadores">'+
                    '<div class="dados">'+
                        '<p class="nome">'+json.data[i].nome+'</p>'+
                        '<p class="categoria">'+json.data[i].categoria+'</p>'+
                        '<p class="descricao">'+json.data[i].descricao+'</p>'+
                        '<p class="email">'+json.data[i].email+'</p>'+
                        '<p class="tel">'+json.data[i].telefone+'</p>'+
                    '</div>'+
                    '<div class="imgPrest">'
                    let imgPrest = Object.keys(json.imagens[i])
                    console.log(imgPrest)
                    for(let x = 0; x < imgPrest.length; x++) {
                            let y = x + 2
                            prest = prest + '<img class="img" src="image/prestadores/'+json.data[i].cpf+'/'+json.imagens[i][y]+'">'
                    }
                      
                    prest = prest + '</div> </div>'
                    prestadores = prestadores + prest
                         
                }
                document.getElementById('list_prestadores').innerHTML = prestadores
                var tels = document.querySelectorAll('.tel')
                tels.forEach((tel) =>
                    $(tel).mask('(00) 0000-0000')
                )
            }else {
                document.getElementById('list_prestadores').innerHTML = '<h2 class="msgFalse">'+json.msg+'</h2>'+
                '<input type="button" class="btnVoltar" onclick="voltar()" value="Voltar"></input>'
            }
        }
    })
}

function voltar() {
    window.location = 'index.php'
}