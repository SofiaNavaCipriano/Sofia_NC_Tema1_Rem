function ejercicio5(Precio_basico) {
    let Precio_Total;

    if (Precio_basico <= 20) {
        Precio_Total = Precio_basico;
    } else if (Precio_basico <= 40) {
        Precio_Total = Precio_basico + ((Precio_basico - 20) * 0.3);
    } else if (Precio_basico <= 500) {
        Precio_Total = Precio_basico + 20 * 0.3 + (Precio_basico - 40) * 0.4;
    } else {
        Precio_Total = Precio_basico + 20 * 0.3 + (Precio_basico - 40) * 0.5;
    }

    return parseFloat(Precio_Total.toFixed(2));
}
