//selecionar elementos 
let input = document.getElementById("input");
let output = document.getElementById("output");

let botao = document.getElementById("botaoDecimal");

//função para tornarem decimal

function obterDecimal() {
 let numeroBinario = document.getElementById("input").value

 let numeroDecimal = parseInt(numeroBinario, 2);


let output = document.getElementById("output");

output.value = numeroDecimal;



 console.log(`o o numero ai o ${numeroDecimal}`)


}

//function para resetar


function apagar() {

    let entrada = input;
    let saida = output;

    entrada.value = "";
    saida.value = "";

}


//function para bloquear numero
document.addEventListener("keydown", function(event) {
    const allowedKeys = ["1", "0", "Backspace", "Alt", "Control", "v", "c"];
    if (!allowedKeys.includes(event.key)) {
    window.alert(`Numero ${event.key} Não Permitido trabalhamos apenas com 0s e 1s `)
    
    


    }
  });

  





 

