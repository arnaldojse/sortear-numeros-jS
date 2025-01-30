
let chute; 
let tentativas = 1;
let num = 1000 + 1
alert('boas vindas ao jogo secreto');
let numero = parseInt(Math.random() * num );
console.log(numero);

while(chute != numero){
    chute = prompt(`Escolha um numero de 1 ate ${num}`);
    if (chute == numero){
       break;
    } else{
         if(chute > numero){
            alert(`O numero secreto e menor que: ${chute}`);
         }else{
            alert(`O numero secreto e maior que: ${chute}`);
         }
         tentativas = tentativas + 1;
    }
}

let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Prabens!!! você acertou o numero secreto ${numero} em ${tentativas} ${palavra} `);
