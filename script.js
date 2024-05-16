let inputNumero = document.getElementById('inputNumber');
let inputTela = document.getElementById('inputRange');

inputTela.addEventListener('input', function() {
    inputNumero.value = inputTela.value;
});

inputNumero.addEventListener('input', function() {
    inputTela.value = inputNumero.value;
});

function gerarSenha() {
    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = this.documentElementById('box1');
        if (checkbox.cheked) {
            
        }
    });

}