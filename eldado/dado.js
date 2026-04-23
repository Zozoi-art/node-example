function lanzarDado() {
  const resultado = Math.floor(Math.random() * 6) + 1;
  console.log("Resultado del dado: " + resultado);
  return resultado;
}
lanzarDado(); 