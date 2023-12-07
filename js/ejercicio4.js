function ejercicio4(Sueldo) {
    let aumento;
    let Nuevo_Sueldo;

    if (Sueldo < 1000) {
        aumento = Sueldo * 0.15;
    } else {
        aumento = Sueldo * 0.12;
    }

    Nuevo_Sueldo = Sueldo + aumento;

    return parseFloat(Nuevo_Sueldo.toFixed(2));
}
