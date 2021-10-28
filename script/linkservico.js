setInterval(function(){ 
    anuncios_r()
    anuncios_l()
    ; }, 5000);

let valor = 0
let list = document.getElementById('list_area')

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

function anuncios_r() {
    let anuncio = ""
    for (let i = 1; i < 5; i++) {
        let anunciante = Math.floor(Math.random() * 6) + 1;
        let anu = '<div class="items_right">'+
        '<img src="image/anunciantes/'+anunciante+'.png" alt="Anunciantes" style="width: inherit;">'+
        '</div>'
        anuncio = anuncio + anu
    }
    document.getElementById('right_interna').innerHTML = anuncio 
}
anuncios_r()

function anuncios_l() {
    let anuncio = ""
    for (let i = 1; i < 5; i++) {
        let anunciante = Math.floor(Math.random() * 6) + 1;
        let anu = '<div class="items_left">'+
        '<img src="image/anunciantes/'+anunciante+'.png" alt="Anunciantes" style="width: inherit;">'+
        '</div>'
        anuncio = anuncio + anu
    }
    document.getElementById('left_interna').innerHTML = anuncio 
}
anuncios_l()

function cadastrar() {
    window.location = 'newPerfil.php'
}