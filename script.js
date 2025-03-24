//atv 1
let numero = 1
function calculo() {
    if (numero % 2 === 0) {
        console.log("É um numero par");
    } else {
        console.log("É um numero impar");
    }
}
calculo(numero)


//atv 2
let numeroum = 1
let numerodois = 2
function calcular(numeroum, numerodois) {
    console.log(numeroum + numerodois);
    console.log(numeroum - numerodois);
    console.log(numeroum * numerodois);
    console.log(numeroum / numerodois);
}
calcular(numeroum, numerodois)


//atv 3
let count = 10;
while (count >= 1) {
    console.log(count)
    count--;
}


//atv 4
let texto = prompt("Digite uma palavra");
function inverterTexto(texto) {
    console.log(texto.split("").reverse().join(""));
}
inverterTexto(texto)


//atv 5
let palavra = prompt("Digite uma palavra");
function contarCaracteres(palavra) {
    console.log(palavra.split(''));
    for (io = 0; io < palavra.length; io++);
}
contarCaracteres(palavra)


//atv 6
let carro = {
    nome : prompt("Digite o nome do carro"),
    modelo : prompt ("Digite o modelo do carro"),
    ano : prompt("Digite o ano do carro"),
automovel:function (){
    console.log(this.modelo);
}
};
carro.automovel();

//atv 7
let apresentacao = {
    nome: prompt("Digite um nome"),
    mensagem: "Ola",
    apresentar: function () {
        console.log(this.mensagem + " " + this.nome);
    }
};
apresentacao.apresentar();


//atv 8
let n1 = prompt("Digite um numero") * 1;
let n2 = prompt("Digite outro numero") * 1;
let n3 = prompt("Digite outro numero") * 1;
function media(n1, n2, n3) {
    console.log((n1 + n2 + n3) / 3)
};
media(n1, n2, n3);


//atv 9
for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i, "Multiplo de 3");
    }
    else {
        console.log(i, "Não múltiplo de 3");
    }
}


//atv 10
let word = prompt("Digite uma palavra");
function verificarPalindromo(word) {
    y = word.split('').reverse().join('');
    if (y === word) {
        console.log("É um palíndromo");
    }
    else {
        console.log("Não é um palíndrmo")
    }
}
verificarPalindromo(word)


//atv 11
let nnumero = prompt("Digite um número:")
function verificarSinal(nnumero){
    if (nnumero === 0){
        console.log("Zero");
    }if (nnumero > 0){
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }
}
verificarSinal(nnumero)


//atv 12
let temperatura = prompt("Digite uma temperatura em Celcius");
function converterTemperatura(temperatura) {
    console.log((temperatura * 9 / 5) + 32)
}
converterTemperatura(temperatura)


//atv 13
let i = 1;
let somaa = 0;
while (i <= 100) {
    somaa += i;
    i++;
}
console.log(somaa);


//atv 14
let palav = prompt("Digite uma cor");
function Substituirpalavra(palav) {
    if (palav === "Vermelho") {
        console.log("Azul");
    }
    else {
        console.log("Vermelho");
    }
}
Substituirpalavra(palav)


//atv 15
let tamanho = prompt("Digite uma palavra")
function verificarTamanho(tamanho) {
    for (i = 0; i < tamanho.length; i++);
    if (tamanho.length > 10) {
        console.log("Tem mais de 10 caracteres");
    } else {
        console.log("Tem menos de 10 caracteres");
    }
}
verificarTamanho(tamanho)


//atv  16
let frutas = ["Maça", "Banana", "Abacaxi", "Uva", "Limao"]
console.log(frutas[3]);


//atv  17
let apresentacaoo = {
    nome: prompt("Digite um nome"),
    saudacao: "Bem vindo o(a)",
    apresentar: function () {
        console.log(this.saudacao + " " + this.nome);
    }
};
apresentacaoo.apresentar();


//atv  18
let nota = prompt("Digite sua nota:")
function verificarAprovacao(nota){
    if (nota >= 6){
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}
verificarAprovacao(nota)


//atv 19
for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//atv 20
let palavraa = prompt("Digite uma palavra:");
function contarvogais(palavraa) {
    const Vogais = "aeiouAEIOU"
    let contador = 0
    for (let letra of palavraa) {
        if (Vogais.includes(letra)) {
            contador++;
        }
    }
    console.log(contador);
}
contarvogais(palavraa)


//atv 21
let array = [10, 20, 30, 40, 50];
console.log(array[0] + array[1] + array[2] + array[3] + array[4])


//atv 22
let num = prompt("Digite um numero")
function dobrarNumero(num) {
    console.log(parseInt(num) + parseInt(num))
}
dobrarNumero(num)


//atv 23
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//atv 24
let maiuscula = prompt("Digite a palavra:")
function capitalizar(maiuscula) {
    console.log(maiuscula.charAt(0).toUpperCase() + maiuscula.slice(1));
}
capitalizar(maiuscula)


//atv 25
let ano = prompt("Digite um ano");
function verificarano(ano) {
    if (ano % 4 === 0)
        console.log("O ano é bissexto")
    else {
        console.log("O ano não é bissexto")
    }
}
verificarano(ano)