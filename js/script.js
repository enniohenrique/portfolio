const frases = ['Desenvolvedor Front-end', 'Front-End Developer'];
const typewriter = document.querySelector('.titulo');

let indexFraseAtual = 0;
let indexLetraAtual = 0;

console.log(frases[indexFraseAtual][0]);

function digitarProximaLetra() {
  if (indexLetraAtual < frases[indexFraseAtual].length) {
    typewriter.textContent += frases[indexFraseAtual][indexLetraAtual];
    indexLetraAtual++;
    setTimeout(digitarProximaLetra, 50); // Velocidade de digitação
  } else {
    setTimeout(apagarTexto, 1500); // Tempo para exibir a frase antes de apagar
  }
}

function apagarTexto() {
  if (typewriter.textContent.length > 0) {
    typewriter.textContent = typewriter.textContent.slice(0, -1);
    setTimeout(apagarTexto, 25); // Velocidade de apagar (ajuste conforme desejado)
  } else {
    indexFraseAtual = (indexFraseAtual + 1) % frases.length;
    indexLetraAtual = 0;
    setTimeout(digitarProximaLetra, 500); // Tempo antes de começar a digitar a próxima frase
  }
}

digitarProximaLetra(); // Inicia o efeito de digitação
