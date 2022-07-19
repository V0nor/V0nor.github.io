const generoMasculino = document.querySelector('.radio__masculino');
const generoFeminino = document.querySelector('.radio__feminino');
const imcBtnCalcular = document.querySelector('.btn--calcular');
const imcBtnLimpar = document.querySelector('.btn--limpar');
const imcAltura = document.querySelector('.imc__altura');
const imcPeso = document.querySelector('.imc__peso');
const resultadoContainer = document.querySelector('.resultado');
const resultadoBtnFechar = document.querySelector('.btn--fechar');
const resultadoValorDoImc = document.querySelector('.resultado__imc');
const resultadoGeneroEscolhido = document.querySelector('.resultado__genero');
const resultadoGrauDoPeso = document.querySelector('.resultado__grau');
const resultadoPesoIdeal = document.querySelector('.resultado__ideal');

const avisoContainer = document.querySelector('.aviso__container');
const avisoBtnFechar = document.querySelector('.aviso__btn');
const header = document.querySelector('.header');
imcAltura.addEventListener('keypress', somenteNumeros);
imcPeso.addEventListener('keypress', somenteNumeros);

function somenteNumeros(elemento) {
  const bloquearTexto = elemento.which ? elemento.which : elemento;
  if (bloquearTexto > 31 && bloquearTexto < 46 && bloquearTexto > 57) {
    elemento.preventDefault();
  }
}

function calcularIMC() {
  window.scroll(900, 0);
  header.classList.add('ativo');
  resultadoContainer.classList.toggle('ativo');
  const altura = imcAltura.value;
  const peso = imcPeso.value;
  const calculoIMC = parseFloat(peso / (altura * altura)).toFixed(2);
  resultadoValorDoImc.innerHTML = '<span>IMC:</span>' + calculoIMC;
  const generoEscolhido = document.querySelector(
    'input[name="sex"]:checked'
  ).value;
  resultadoGeneroEscolhido.innerHTML =
    '<span>GÊNERO: </span>' + generoEscolhido;

  if (calculoIMC < 18.5) {
    resultadoGrauDoPeso.innerHTML = '<span>GRAU: </span>' + 'ABAIXO DO PESO';
  } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
    resultadoGrauDoPeso.innerHTML = '<span>GRAU: </span>' + 'NORMAL';
  } else if (calculoIMC >= 25.0 && calculoIMC <= 29.9) {
    resultadoGrauDoPeso.innerHTML = '<span>GRAU: </span>' + 'SOBREPESO';
  } else if (calculoIMC >= 30.0 && calculoIMC <= 34.9) {
    resultadoGrauDoPeso.innerHTML = '<span>GRAU: </span>' + 'OBESIDADE GRAU I';
  } else if (calculoIMC >= 35.0 && calculoIMC <= 39.9) {
    resultadoGrauDoPeso.innerHTML = '<span>GRAU: </span>' + 'OBESIDADE GRAU II';
  } else if (calculoIMC > 40.0) {
    resultadoGrauDoPeso.innerHTML =
      '<span>GRAU: </span>' + 'OBESIDADE GRAU III';
  }

  if (!0 == generoFeminino.checked) {
    let alturaTotal = parseFloat(altura * altura).toFixed(2);
    let calculoPesoIdeal = parseFloat(21 * alturaTotal).toFixed(2);
    resultadoPesoIdeal.innerHTML =
      '<span>PESO IDEAL: </span>' + calculoPesoIdeal + ' KG';
  } else {
    alturaTotal = parseFloat(altura * altura).toFixed(2);
    calculoPesoIdeal = parseFloat(22.5 * alturaTotal).toFixed(2);
    resultadoPesoIdeal.innerHTML =
      '<span>PESO IDEAL: </span>' + calculoPesoIdeal + ' KG';
  }
}

imcBtnCalcular.addEventListener('click', calcularIMC);

imcBtnLimpar.addEventListener('click', () => {
  imcAltura.value = '';
  imcPeso.value = '';
  generoMasculino.checked = '';
  generoFeminino.checked = '';
});

header.classList.add('ativo');

resultadoBtnFechar.addEventListener('click', () => {
  resultadoContainer.classList.toggle('ativo');
  header.classList.remove('ativo');
});

avisoBtnFechar.addEventListener('click', () => {
  header.classList.remove('ativo');
  avisoContainer.classList.remove('ativo');
});
