
function calcularOperacion2() {
    var conjunto1 = document.getElementById("conjunto1").value.split(",");
    var conjunto2 = document.getElementById("conjunto2").value.split(",");
    var operacion = document.getElementById("operacion").value;
    var resultado = [];
    var conjuntoUniversal = [...new Set([...conjunto1, ...conjunto2,])];
    if (operacion === "union") {
        resultado = [...new Set([...conjunto1, ...conjunto2, ])];
    } else if (operacion === "interseccion") {
        resultado = conjunto1.filter(elemento => conjunto2.includes(elemento));
    } else if (operacion === "diferencia") {
        resultado = conjunto1.filter(elemento => !conjunto2.includes(elemento));
    }
    document.getElementById("resultado").innerHTML = resultado.join(", ");
    document.getElementById("conjuntoUniversal").innerHTML = conjuntoUniversal.join(", ");
}
function calcularOperacion3() {
    var conjunto1 = document.getElementById("conjunto1").value.split(",");
    var conjunto2 = document.getElementById("conjunto2").value.split(",");
    var conjunto3 = document.getElementById("conjunto3").value.split(",");
    var operacion = document.getElementById("operacion").value;
    var resultado = [];
    var conjuntoUniversal = [...new Set([...conjunto1, ...conjunto2, ...conjunto3])];
    if (operacion === "union") {
        resultado = [...new Set([...conjunto1, ...conjunto2, ...conjunto3])];
    } else if (operacion === "interseccion") {
        resultado = conjunto1.filter(elemento => conjunto2.includes(elemento) && conjunto3.includes(elemento));
    } else if (operacion === "diferencia") {
        resultado = conjunto1.filter(elemento => !conjunto2.includes(elemento) && !conjunto3.includes(elemento));
    }
    document.getElementById("resultado").innerHTML = resultado.join(", ");
    document.getElementById("conjuntoUniversal").innerHTML = conjuntoUniversal.join(", ");
}
function calcularOperacion4() {
    var conjunto1 = document.getElementById("conjunto1").value.split(",");
    var conjunto2 = document.getElementById("conjunto2").value.split(",");
    var conjunto3 = document.getElementById("conjunto3").value.split(",");
    var conjunto4 = document.getElementById("conjunto4").value.split(",");
    var operacion = document.getElementById("operacion").value;
    var resultado = [];
    var conjuntoUniversal = [...new Set([...conjunto1, ...conjunto2, ...conjunto3, ...conjunto4])];
    if (operacion === "union") {
        resultado = [...new Set([...conjunto1, ...conjunto2, ...conjunto3, ...conjunto4])];
    } else if (operacion === "interseccion") {
        resultado = conjunto1.filter(elemento => conjunto2.includes(elemento) && conjunto3.includes(elemento) && conjunto4.includes(elemento));
    } else if (operacion === "diferencia") {
        resultado = conjunto1.filter(elemento => !conjunto2.includes(elemento) && !conjunto3.includes(elemento) && !conjunto4.includes(elemento));
    }
    document.getElementById("resultado").innerHTML = resultado.join(", ");
    document.getElementById("conjuntoUniversal").innerHTML = conjuntoUniversal.join(", ");
}