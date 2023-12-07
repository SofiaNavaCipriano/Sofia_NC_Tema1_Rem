function ejercicio1(radio, altura) {
    let area = 2 * radio * Math.PI * (radio + altura);
    let volumen = Math.PI * radio ** 2 * altura;

    volumen = parseFloat(volumen.toFixed(2));
    area = parseFloat(area.toFixed(2));

    return [volumen, area];
}
