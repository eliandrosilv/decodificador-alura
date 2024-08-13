const texto = document.querySelector(".area__texto");
const mensagem = document.querySelector(".area__mensagem");

function botaoEmcriptar(){
    const textoCriptografado = criptografar(texto.value);  
    mensagem.innerHTML = `<p>${textoCriptografado}</p>`;
    texto.value = "";
}

function criptografar(stringEncriptada) {
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(chaves[i][0], chaves[i][1]);
        }
    }
   return stringEncriptada;
}


function botaoDesencriptar(){
    const textoCriptografado = descriptografar(texto.value);  
    mensagem.innerHTML = `<p>${textoCriptografado}</p>`; 
    texto.value = "";
}

function descriptografar(stringDesencriptada) {
    let chaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < chaves.length; i++){
        if(stringDesencriptada.includes(chaves[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(chaves[i][1], chaves[i][0]);
        }
    }
   return stringDesencriptada;
}
/* 
function copy() {
    let copyText = document.querySelector(".area__mensagem");
    copyText.select();
    document.execCommand("copy");
    alert("foi copiado");
  } */
  
 