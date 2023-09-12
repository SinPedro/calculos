
// guardando o valor do peso e da altura


let peso1 = parseFloat(prompt("Digite o seu peso:"));
let altA = parseFloat(prompt("Digite o valor da sua altura:"));



// calculo imc 


let calculoImc = (peso1 / (altA * altA));


// impressão dos resultados e categorias

//18.50 – 24.99: Peso Normal.
//25.00 – 29.99: Pré-Obesidade.
//30.00 – 34.99: Obesidade Grau I.
//35.00 – 39.99: Obesidade Grau II.
//≥40.00: Obesidade Grau III.


if (calculoImc >= 40.00){
    console.log("VOCÊ É OBESO");
}
else if (calculoImc === 35.00 && calculoImc >= 39.99){
    console.log("Obesidade Grau III");
}
else if (calculoImc === 30.00 && calculoImc >= 34.99){
    console.log("Obesidade Grau II");
}
else if (calculoImc === 25.00 && calculoImc >= 29.99){
    console.log("Obesidade Grau I");
}
else if (calculoImc === 18.50 && calculoImc >= 24.99) {
    console.log("Você tem um peso Normal!");
}
else {
    console.log("IMC INDISPONIVEL");
}













