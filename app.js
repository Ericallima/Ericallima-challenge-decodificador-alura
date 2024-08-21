const text = document.querySelector(".texto");
const textArea = document.querySelector(".textArea");

//As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

function btnEncriptar() {
    console.log("Botão Encriptar clicado!"); 
    const textoEncriptografado = criptografar (text.value);
    textArea.value = textoEncriptografado;
    text.value = "";
} 

function criptografar(stringCriptografar) {

    let matrizCodigo = [ ["e" , "enter" ] , ["i" , "imes"] , ["a" , "ai"] , [ "o" , "ober"] , [ "u" , "ufat"] ];
    stringCriptografar = stringCriptografar.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringCriptografar.includes(matrizCodigo[i][0])){
            stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1] );
        }
    }
    return stringCriptografar;
}



function btnDescriptar() {
    console.log("Botão Descriptografar clicado!");
    const textoDescriptografado = descriptografar (text.value);
    textArea.value = textoDescriptografado;
    text.value = "";
} 

function descriptografar(stringDescriptografar) {

    let matrizCodigo = [ ["e" , "enter" ] , ["i" , "imes"] , ["a" , "ai"] , [ "o" , "ober"] , [ "u" , "ufat"] ];
    console.table(matrizCodigo);
    stringDescriptografar = stringDescriptografar.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringDescriptografar.includes(matrizCodigo[i][1])){
            stringDescriptografar = stringDescriptografar.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0] );
        }
    }
    return stringDescriptografar;
}


const botaoCodificar = document.querySelector(".criptografar");
const caixaTexto = document.querySelector(".textArea");

botaoCodificar.addEventListener("click", () => {
    caixaTexto.style.backgroundImage = "none"; // Remove a imagem de fundo
});

const botaoDescriptografar = document.querySelector(".descriptografar");

botaoDescriptografar.addEventListener("click", () => {
    caixaTexto.style.backgroundImage = "url(img/animacao.png)"; // Adiciona a imagem de fundo novamente
});

function btnCopiar() {
    console.log("Botão Copiar clicado!");
    textArea.select(); // Seleciona todo o conteúdo da caixa de texto
    document.execCommand("copy"); // Copia o conteúdo selecionado
}