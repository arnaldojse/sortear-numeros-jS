alert('boas vindas ao jogo secreto');
let numero = 3;
console.log(numero);
let chute; 
let tentativas = 1;

while(chute != numero){
    chute = prompt('Escolha um numero de 1 ate 10');
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

if(tentativas > 1){
    alert(`Prabens!!! você acertou o numero secreto ${numero} em ${tentativas} tentativas`);
}else{
    alert(`Prabens!!! você acertou o numero secreto ${numero} em ${tentativas} tentativa`);
}