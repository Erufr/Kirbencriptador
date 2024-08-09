const textArea = document.querySelector(".areaDeTexto"); 
const mensaje = document.querySelector(".resultadoEncriptado");
const resultadoTitulo = document.querySelector(".resultadoTitulo");
const resultadoTexto = document.querySelector(".resultadoTexto");
const copiarBoton = document.querySelector(".copiar");
const resultadoImg = document.querySelector(".resultadoImg");

function encriptarBoton() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.placeholder = ""; 

    resultadoImg.classList.add("imagenOriginal");
    resultadoImg.classList.remove("imagenNueva");

    if (textoEncriptado) {
        resultadoTitulo.style.display = "none";
        resultadoTexto.style.display = "none";
        copiarBoton.style.display = "block";
        mensaje.style.backgroundImage = "none";

        document.querySelector(".imagenOriginal").style.display = "none";
        document.querySelector(".imagenNueva").style.display = "block";
    } else {
        resultadoTitulo.style.display = "block";
        resultadoTexto.style.display = "block";
        copiarBoton.style.display = "none";
        document.querySelector(".imagenOriginal").style.display = "block";
        document.querySelector(".imagenNueva").style.display = "none";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }   
    }
    return stringEncriptada;    
}

function copiar() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado, prueba desencriptarlo");
}

function desencriptarBoton() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.placeholder = ""; 
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }   
    }
    return stringDesencriptada;
}