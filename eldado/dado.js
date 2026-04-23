function lanzarDado() {
  const resulText = document.getElementById('resultado');
  const resultado = Math.floor(Math.random() * 6) + 1;
  console.log("Resultado del dado: " + resultado);

  resulText.textContent = resultado;

}
