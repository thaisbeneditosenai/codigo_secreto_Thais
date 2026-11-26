let codigoSecreto = "4286";
let tentativasRestantes = 5;
let codigoOculto = [];

for (let i = 0; i < codigoSecreto.length; i++){
    codigoOculto.push("*");
}

let codigo = document.querySelector("#codigo");
codigo.innerHTML = codigoOculto.join(" ")

let telaTentativas = document.querySelector("#tentativas");
let telaDescartadas = document.querySelector("#descartados");
let campoDigito = document.querySelector("#campo-digito");
let btnTestar = document.querySelector("#btn-testar");
let statusMensagem = document.querySelector("#status");

btnTestar.addEventListener("click", testarCodigo);

function testarCodigo() {
    let digito = campoDigito.value;
    campoDigito.value = "";
    campoDigito.focus();

    if (digito == ""){
        return;
    }

    let encontrou = false;

    for (let i = 0; i < codigoSecreto.length; i++){
        if(codigoSecreto[i] == digito){
            codigoOculto[i] = digito
                encontrou = true;
            }
        }
    
        
    if (encontrou){
            codigo.innerHTML = codigoOculto.join(" ")
        } else{
            tentativasRestantes--;
            telaTentativas.innerHTML = tentativasRestantes;
            telaDescartadas.innerHTML += `${digito}`;
        }
    
    if(tentativasRestantes == 0){
        statusMensagem.innerHTML = `<p style="color: red;"><strong>SISTEMA BLOQUEADO!</strong></p>`;
        btnTestar.disabled = true;
        campoDigito.disabled = true;
    } else if (!codigoOculto.includes("*")){
        statusMensagem.innerHTML = `<p style="color: green;"><strong>SISTEMA DESBLOQUEADO!</strong></p>`
        btnTestar.disabled = true;
        campoDigito.disabled = true;

    }

}