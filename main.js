
const Promocion1 = 1800;
const Promocion2 = 2200;
const Promocion3 = 1200;
const Promocion4 = 1600;
const envio = 800;

let datoInicio;
let promocionElegida;
let sumaTotal = 0;

datoInicio = prompt("¡Bienvenido a 'El bodegon de Homero!'\nSi quieres ver nuestras promociones, escribe: 'quiero!'.\nSi no deseas nada, escribe: 'no, gracias!'.");

while (datoInicio !== "quiero!" && datoInicio !== "no, gracias!") {
    alert("Entrada no válida.\nEscribe: 'quiero!' para ver las promociones\nEscribe: 'no, gracias!' para salir.");
    datoInicio = prompt("¡Bienvenido!\nSi quieres ver nuestras promociones, escribe: 'quiero!'.\nSi no deseas nada, escribe: 'no, gracias!'.");
}


while (datoInicio !== "no, gracias!") {
    if (datoInicio == "quiero!") {
        promocionElegida = seleccionarPromocion();
        
    if (promocionElegida !== null) {
        sumaTotal += promocionElegida;
    }
    
    } else {
        alert("Entrada no válida.\nEscribe: 'quiero!' para ver las promociones\nEscribe: 'no, gracias!' para salir.");
    }
    
    datoInicio = prompt("¿Quieres agregar más promociones? Escribe: 'quiero!'.\n¿o quieres salir? escribe: 'no, gracias!'.");
}


if (sumaTotal > 0) {
    sumaTotal += envio;
    alert(`El costo total de las promocion/es seleccionada/s es: $${sumaTotal}.\n¡Gracias por tu compra!.`);
} else {
    alert("No has seleccionado ninguna promoción.\nGracias y vuelva prontos :).");
}


function seleccionarPromocion() {
    promocionElegida = prompt("Promoción1: 2 pizzas + Coca Cola 1.5L: $1800\n(+envio: $800)\nPromoción2: 12 empanadas jamón y queso + Coca Cola 2.25L: $2200\n(+envio: $800)\nPromoción3: Sandwich de milanesa + Sprite 500ml: $1200\n(+envio: $800)\nPromoción4: Sandwich de milanesa con jamón y queso + Fanta 500ml: $1600\n(+envio: $800)\n\nEscribe el nombre TAL CUAL de la promoción que deseas. Si deseas salir del menu de promociones, escribe: 'no, gracias!'.");

    if (promocionElegida === "no, gracias!") {
        return null;
    }

    switch (promocionElegida) {
        case "Promocion1":
            alert ("Promocion 1 seleccionada!"); 
            return Promocion1;
        case "Promocion2":
            alert ("promocion 2 seleccionada!"); 
            return Promocion2;
        case "Promocion3":
            alert ("promocion 3 seleccionada!"); 
            return Promocion3;
        case "Promocion4":
            alert ("promocion 4 seleccionada!"); 
            return Promocion4;
        default:
            alert("Promoción no válida.\nPor favor, elige una promoción válida.");
            return seleccionarPromocion();
    }
}
