alert('boas vindas ao jogo secreto');
let numero = 3;
console.log(numero)

let chute = prompt('Escolha um numero de 1 ate 10')

if (chute == numero){
    alert(`Prabens!!! você acertou o numero secreto ${numero}`);
} else{
    alert('Você errou o numero ')
}
