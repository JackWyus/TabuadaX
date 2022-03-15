/* Faça Um Programa que leia um número Inteiro e Mostre na Tela a Sua Tabuada de Multiplicação*/

alert('Tabuada de Multiplicação')
var numero = parseInt(prompt('Digite um Número Inteiro:'))

for(var i = 0; i < 13; i++){
    var tabuada = numero*i;

    console.log(numero+'x'+i+'='+tabuada);
}




