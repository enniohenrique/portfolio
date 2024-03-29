const frases = [ 'Desenvolvedor Full Stack','Full Stack Developer'];
const typewriter = document.querySelector('.efeito-texto');

let indexFraseAtual = 0;
let indexLetraAtual = 0;

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

// const header = document.querySelector('.header');

// document.addEventListener('scroll', (event) => {
//   if (window.scrollY > 0) {
//     header.style.backgroundColor = '#0536a8';
//   } else {
//     header.style.backgroundColor = '#10101a';
//   }
// });


