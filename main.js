const listaDigitos = document.querySelectorAll('input[type="button"]');
const inputTelefone = document.querySelector('input[type="tel"]');

for (let i = 0; i < listaDigitos.length; i++) {
  const element = listaDigitos[i]; //tecla
  element.onclick = function () {
    clicar(element.value);
  };
}

function clicar(digito) {
  inputTelefone.value += digito;
}
