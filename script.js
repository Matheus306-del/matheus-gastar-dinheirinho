let saldo = 1000000000000;

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR');
}

function comprar(valor) {
  if (saldo >= valor) {
    saldo -= valor;
    document.getElementById("saldo").innerText = formatarMoeda(saldo);
  } else {
    alert("Saldo insuficiente!");
  }
}
