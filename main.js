 // Exercício 1
 function calcularSoma() {
    let INDICE = 13, SOMA = 0;
    for (let K = INDICE; K > 0; K--) {
      SOMA += K;
    }
    document.getElementById("resultadoSoma").textContent = `O valor de SOMA é ${SOMA}.`;
  }

// Exercício 2
function verificarFibonacci() {
    const num = parseInt(document.getElementById("numeroFibonacci").value);
    const resultadoElement = document.getElementById("resultadoFibonacci");
  
    if (isNaN(num)) {
      resultadoElement.textContent = "Digite um número válido!";
      resultadoElement.style.color = "black";
      return;
    }
  
    let a = 0, b = 1, pertence = false;
  
    while (b <= num) {
      if (b === num) {
        pertence = true;
        break;
      }
      [a, b] = [b, a + b];
    }
  
    if (pertence) {
      resultadoElement.textContent = `O número ${num} pertence à sequência de Fibonacci.`;
      resultadoElement.style.color = "green"; // Resposta certa em verde
    } else {
      resultadoElement.textContent = `O número ${num} não pertence à sequência de Fibonacci.`;
      resultadoElement.style.color = "red"; // Resposta errada em vermelho
    }
  }

// Exercício 3
async function calcularFaturamento() {
    try {
      const response = await fetch('dados.json');
      const dados = await response.json();
  
      const diasComFaturamento = [];
      let total = 0, menor = Infinity, maior = -Infinity;
  
      for (const d of dados) {
        if (d.valor > 0) {
          diasComFaturamento.push(d);
          total += d.valor;
          if (d.valor < menor) menor = d.valor;
          if (d.valor > maior) maior = d.valor;
        }
      }
  
      const media = total / diasComFaturamento.length;
      const diasAcimaMedia = diasComFaturamento.filter(d => d.valor > media).length;
  
      document.getElementById("resultadoFaturamento").innerHTML = `
        <p>Menor faturamento: R$ ${menor.toFixed(2)}</p>
        <p>Maior faturamento: R$ ${maior.toFixed(2)}</p>
        <p>Dias com faturamento acima da média: ${diasAcimaMedia} dias</p>
      `;
    } catch (error) {
      console.error("Erro ao carregar ou processar o JSON:", error);
      document.getElementById("resultadoFaturamento").textContent = "Erro ao carregar os dados.";
    }
  }

// Exercício 4
function calcularPercentual() {
const estados = { SP: 67836.43, RJ: 36678.66, MG: 29229.88, ES: 27165.48, Outros: 19849.53 };
let total = 0;

for (const valor of Object.values(estados)) {
    total += valor;
}

const resultado = [];
for (const [estado, valor] of Object.entries(estados)) {
    const percentual = (valor / total) * 100;
    resultado.push(`${estado}: ${percentual.toFixed(2)}%`);
}

document.getElementById("resultadoPercentual").textContent = resultado.join(", ");
}

// Exercício 5
function inverterString() {
    const texto = document.getElementById("textoInverter").value;
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
    invertido += texto[i];
    }

    document.getElementById("resultadoInverter").textContent = `Invertido: ${invertido}`;
}

