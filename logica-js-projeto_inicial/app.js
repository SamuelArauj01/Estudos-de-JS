alert('Boas Vindas ao jogo do número secreto!');

let escolhe = prompt('escolha o número máximo do intervalo de 1 à');
let numeroMaximo = escolhe;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    //se o chute for igual ao número secreto irá acontecer algo
    if(chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você adivinhou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);