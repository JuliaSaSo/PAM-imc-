const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const caixaResultado = document.getElementById("resultado");

// Aceita vírgula ou ponto como separador decimal
function lerNumero(texto) {
  return parseFloat(texto.replace(",", "."));
}

function classificar(imc) {
  if (imc < 18.5) return { texto: "Abaixo do peso", cor: "alert-warning" };
  if (imc < 25)   return { texto: "Peso normal", cor: "alert-success" };
  if (imc < 30)   return { texto: "Sobrepeso", cor: "alert-warning" };
  if (imc < 35)   return { texto: "Obesidade grau I", cor: "alert-danger" };
  if (imc < 40)   return { texto: "Obesidade grau II", cor: "alert-danger" };
  return { texto: "Obesidade grau III", cor: "alert-danger" };
}

function mostrar(mensagem, cor) {
  caixaResultado.className = "alert mt-4 " + cor;
  caixaResultado.innerHTML = mensagem;
}

function calcular() {
  const peso = lerNumero(inputPeso.value);
  const alturaCm = lerNumero(inputAltura.value);

  if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
    mostrar("Preencha peso e altura com valores válidos.", "alert-secondary");
    return;
  }

  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);
  const c = classificar(imc);

  mostrar("<strong>IMC: " + imc.toFixed(1) + "</strong><br>" + c.texto, c.cor);
}

function limpar() {
  inputPeso.value = "";
  inputAltura.value = "";
  caixaResultado.className = "alert mt-4 d-none";
  caixaResultado.innerHTML = "";
}

document.getElementById("btnCalcular").addEventListener("click", calcular);
document.getElementById("btnLimpar").addEventListener("click", limpar);

