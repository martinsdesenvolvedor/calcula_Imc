function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc'); //1º capturar o botao
  buttonCalculateImc.addEventListener('click', handleButtonClick); //2º criar o evento para o botao quando for clicado e o que vai acontecer depois

  handleButtonClick(); //para ja começar calculando o imc
}

//função para calcular o IMC
function calculaImc(weight, height) {
  var imc = weight / (height * height);
  var result = 'Seu IMC é ' + imc.toFixed(2);

  if (weight == 0 && height == 0) {
    return;
  }
  if (imc < 17) {
    result += ' - e você está MUITO ABAIXO DO PESO!';
  } else if (imc >= 17 && imc <= 18.49) {
    result += ' - e você está ABAIXO DO PESO!';
  } else if (imc >= 18.5 && imc <= 24.99) {
    result += ' - e você está COM PESO NORMAL!';
  } else if (imc >= 25 && imc <= 29.99) {
    result += ' - e você está ACIMA DO PESO!';
  } else if (imc >= 30 && imc <= 34.99) {
    result += ' - e você está COM OBESIDAD GRAU 1!';
  } else if (imc >= 35 && imc <= 39.99) {
    result += ' - e você está COM OBESIDADE GRAU 2 (SEVERA)!';
  } else if (imc >= 40) {
    result += ' - e você está COM OBESIDADE GRAU 3 (MÓRBIDA)!';
  }
  return result;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight'); //1ºcapturar o input do peso
  var inputHeight = document.querySelector('#input-height'); //1º capturar o input da altura
  var imcResult = document.querySelector('#imc-result'); //1º capturar o local onde o imc será exibido

  var weight = Number(inputWeight.value); //2º capturar o valor do input do peso(input sempre devolve string, para converter para numero basta colocar o Number e o valor entre parentese)
  var height = Number(inputHeight.value); //2º capturar o valor do input da altura

  var calc = calculaImc(weight, height); //3º criar variavel para chamar a funçao de calcular imc

  imcResult.textContent = calc; //Para o imcResult receber um conteúdo usa-se o textContent
}
start();
