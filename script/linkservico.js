$(document).ready(function() {
    $("#buscar").val("")
})

setInterval(function(){ 
    anuncios_r()
    anuncios_l()
    anuncios_f()
    ; }, 5000);

let valor = 0
let list = document.getElementById('list_area')
let anunciantes

busca_anunciantes()

function moveArea_left(){
    let x = valor + Math.round(window.innerWidth / 3)
    if(x > 0){
        x = 0
    }
    list.style.marginLeft = x+"px"
    valor = x
}

function moveArea_right(lista){
    let x = valor - Math.round(window.innerWidth / 3)
    let listw = lista * 150
    let div_central = window.innerWidth * 0.6
    if((div_central - listw) > x){
        x = (div_central - listw)
    } 
    list.style.marginLeft = x+"px"
    valor = x
}

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

function cadastrar() {
    window.location = 'cadastroPrest.php'
}

function buscar_palavra() {
    if($('#buscar').val() != "") {
        let term = $('#buscar').val()
        window.location = "list_prestadores.php?term="+term
    }
}

function buscar_categoria(cat) {
    window.location = "list_prestadores.php?cat="+cat
}