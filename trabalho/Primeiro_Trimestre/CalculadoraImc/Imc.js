document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    try {
        const resultado = calcularIMC(peso, altura);
        document.getElementById("resultado").textContent = resultado;
    } catch (error) {
        document.getElementById("resultado").textContent = error.message;
    }
});

function calcularIMC(peso, altura) {
    /*
    Calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos.
    Retorna o IMC e uma mensagem indicando o status de peso da pessoa.
    */

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        throw new Error("Por favor, insira um valor válido e positivo para peso e altura.");
    }

    const imc = peso / (altura ** 2);

    let status, perdaPeso;
    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc < 25) {
        status = "Peso normal";
    } else if (imc < 30) {
        status = "Sobrepeso";
    } else if (imc < 35) {
        status = "Obesidade grau I";
        perdaPeso = peso * 0.20;
    } else if (imc < 40) {
        status = "Obesidade grau II";
        perdaPeso = peso * 0.30;
    } else {
        status = "Obesidade grau III";
        perdaPeso = peso * 0.40;
    }

    let mensagem;
    if (imc >= 35) {
        mensagem = `Você está com ${status}. Para voltar ao peso ideal, você precisa perder ${perdaPeso.toFixed(2)} quilos.`;
    } else {
        mensagem = `Seu IMC é ${imc.toFixed(2)}. Você está ${status}.`;
    }

    return mensagem;
}

