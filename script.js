/*
//atv 1
let numero = 1
function calculo (){
if (numero % 2 === 0) {
    console.log ("É um numero par");
} else {
    console.log("É um numero impar");
}
}
calculo(numero)


//atv 2
let numeroum = 1
let numerodois = 2
function calcular (numeroum, numerodois){
    console.log (numeroum+numerodois);
    console.log(numeroum-numerodois);
    console.log(numeroum*numerodois);
    console.log(numeroum/numerodois);
}
calcular(numeroum, numerodois)

//atv 3
let count = 10;
while (count>=1){
    console.log(count)
    count--;
}
//atv 4
let texto = prompt("Digite uma palavra");
function inverterTexto(texto){
    console.log(texto.split("").reverse().join(""));
}
inverterTexto(texto)

//atv 5
let palavra = prompt("Digite uma palavra");
function contarCaracteres(palavra){
    console.log(palavra.split(''));
    for (i=0;i<palavra.length; i++);
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
apresentar:function(){
    console.log(this.mensagem + " " + this.nome );
}
};
apresentacao.apresentar();
//atv 8
let n1 = prompt ("Digite um numero")*1;
let n2 = prompt("Digite outro numero")*1;
let n3 = prompt("Digite outro numero")*1;
function media(n1, n2, n3){
    console.log ((n1 + n2 + n3)/3)
};
media(n1, n2, n3);

//atv 9 
let count = 20;
while (count>=1){
    if (multiplodetres)
    console.log ()
}

//atv 10
verificarPalindromo = prompt("Digite uma palavra")
{
return x == String(x).split("").reverse().join("")
};

//atv 11
let numero = prompt ("Digite um numero");
function verificarSinal(numero){
    if (numero === 0){
    console.log("Numero é zero");
    } 
    if  (numero < 1){
    console.log("Numero negativo");
    }
    else  {
    console.log("Numero positivo");
    }
}
verificarSinal(numero)

//atv 12
let temperatura = prompt("Digite uma temperatura em Celcius");
function converterTemperatura(temperatura){
console.log((temperatura * 9/5) + 32)
}
converterTemperatura(temperatura)

//atv 13
let count = 100;
let soma = (soma + count);
function soma(count){
while (count>=1){
    console.log(soma)
}
}
soma(count)

//atv 14
let palavra = prompt("Digite uma cor");
function Substituirpalavra (palavra){
    if (palavra==="Vermelho"){
        console.log ("Azul");
    }
    else {
        console.log ("Vermelho");
    }
}
Substituirpalavra (palavra)
*/
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

//atv 16

//atv 17 
let apresentacao = {
    nome: prompt("Digite um nome"),
    mensagem: "Bem vindo a",
    apresentar: function () {
        console.log(this.mensagem + " " + this.nome);
    }
};
apresentacao.apresentar();

//atv  18 
let nota = prompt("Digite a nota")
function verificarnota(nota) {
    if (nota > 6) {
        console.log("Aprovado")
    }
    if (nota < 6) {
        console.log("Reprovado")
    }
}
verificarnota(nota)

/*
//atv  19
let count = 30;
while (count>=1){
    if (numero % 2 === 0) {
        console.log (numero);}
    else {
        console.log()}
    }
count(numero)
*/

//atv 20 
let palavra = prompt ("Digite uma palavra:");

function contarvogais (Palavra){

    const Vogais = "aeiouAEIOU"
    let contador = 0

        for (let letra of palavra){
            if (Vogais.includes(letra)){
                contador++;
            }
        }
        console.log(contador);
    }
    contarvogais(palavra)

//atv 21
//atv 22
let numeroo = prompt("Digite um numero")
function dobrarNumero (numeroo){
    console.log(parseInt(numeroo)+parseInt(numeroo))
}
dobrarNumero (numeroo)
//atv 23
//atv 24
let p = prompt ("Digite uma palavra")
function pMaiuscula (p){
    console.log()
}
//atv 25 
let ano = prompt("Digite um ano");
function verificarano(ano){
console.log(ano + 32)
}
verificarano(ano)
