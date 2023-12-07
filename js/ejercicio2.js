function ejercicio2(segundos) {
  let horas = Math.floor(segundos / 3600);
  let minutos = Math.floor((segundos % 3600) / 60);
  let segundosRestantes = segundos % 60;

  return horas + ':' + minutos + ':' + segundosRestantes;
}
