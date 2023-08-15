const titulo = document.querySelector('.titulo');

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';

  setInterval(() => {
    elemento.innerHTML = '';
    textoArray.forEach((letra, index) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 100 * index);
    });
  }, 3000);
}

typeWriter(titulo);
