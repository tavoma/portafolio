
function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
    

    let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        mono.src = "./img/encriptado.jpg";
    } else {
        mono.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto a desencriptar";
        alert("Se debe ingresar un texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
    
   
    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        mono.src = "./img/desencriptado.jpg";
    }else{
        mono.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto a desencriptar";
        alert("Se debe ingresar un texto");
    }
}