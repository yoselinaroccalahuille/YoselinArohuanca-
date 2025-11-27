console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function triste(){
    document.getElementById('carita').src='';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVMGMgNpr3NQCVYE9A7hHe3nVs59FAgTOdw&s';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#3ddd9bff';

}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo2.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#42b6daff';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}
function fondoAside(){
    document.getElementById('aside').style.background='#c91aacff';