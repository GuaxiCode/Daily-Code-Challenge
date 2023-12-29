function convertBinaryToDecimal() {
    const inputText = document.querySelector("#input-text");
    const resultText = document.querySelector("#result-text");

    let inputTextValue = inputText.value;

    const inputTextLength = inputTextValue.length;
    console.log(inputTextLength);

    if (inputTextLength >= 1 && inputTextLength <= 8) {
        const regexRule = /^[01]+$/;

        if (regexRule.test(inputTextValue)) {
            const decimalResult = parseInt(inputTextValue, 2);

            resultText.textContent = `Resultado: ${decimalResult}`;
        } else {
            window.alert(`Entrada inválida. Por favor, digite apenas 0's e 1's.`);
            inputText.value = "";
            resultText.textContent = "Aguardando o início da conversão.";
        }
    } else {
        console.log("chegou aqui 4");
        window.alert(`Comprimento de entrada inválido. Por favor, insira até 8 dígitos binários.`);
        inputText.value = "";
        resultText.textContent = "Aguardando o início da conversão.";
    }
}
