let inputNumero = document.getElementById('inputNumber');
let inputTela = document.getElementById('inputRange');
let inputGeracao = document.getElementById('inputText');

inputTela.addEventListener('input', function() {
    inputNumero.value = inputTela.value;
});

inputNumero.addEventListener('input', function() {
    inputTela.value = inputNumero.value;
});

function gerarSenha() {
    let senhaPartes = '';
    var checkbox = document.getElementById('box1');
    
    if (checkbox.checked) {
        let numero = gerarNumeroInteiro(0, 9);
        senhaPartes += numero;
    }
    var checkbox2 = document.getElementById('box2');
    if (checkbox2.checked) {
        let caracter = caracterAleatorio();
        senhaPartes += caracter;
    }
    var checkbox3 = document.getElementById('box3');
    if (checkbox3.checked) {
        let letrasMinusculas = minuscula();
        senhaPartes += letrasMinusculas;
    }
    var checkbox4 = document.getElementById('box4');
    if (checkbox4.checked) {
        let letrasMaiusculas = maiuscula();
        senhaPartes += letrasMaiusculas;
    }

    let tamanho = parseInt(inputNumero.value);
    let senha = [];
    for (let i= 0; i < tamanho; i++) {
	    senha.push(senhaPartes.charAt(gerarNumeroInteiro(0, senhaPartes.length -1)));
    }
    inputGeracao.value = senha.join('');

}

function gerarNumeroInteiro(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function caracterAleatorio() {
    let caracteres = '!@#$%¨&*()_-=+§{[]}~/?|';
    let escolherAleatorio = Math.floor(Math.random() * caracteres.length);
    return caracteres.charAt(escolherAleatorio);
}

function minuscula() {
    let randomMinuscula = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(randomMinuscula);
}

function maiuscula() {
    let randomMaiuscula = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randomMaiuscula);
}