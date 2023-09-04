// JUEGO ADIVINADOR DE NUMERO ENTRE EL 1 AL 10; USANDO IF + BUCLE FOR
// for (let i = 1; i < 4; i++) {
//     console.log(i);
//     let intentos = 4;
//     let numeroIngresado = prompt("adivina el numero entre el 1 al 10, tienes " + (intentos - i) + " intentos");

//     const cerca = numeroIngresado == 4 || numeroIngresado == 6;
//     const lejos = numeroIngresado <= 3 || (numeroIngresado >= 7 && numeroIngresado <= 10);
//     const tePasaste = numeroIngresado >= 11;
    
//     if (numeroIngresado == 5) {
//         alert("felicidades, acertaste el numero");
//         break
//     } else if (cerca) {
//         alert("muy cerca, pero no");
//     } else if (lejos) {
//         alert("todavia lejos, sigue intentando");
//     } else { (tePasaste)
//         alert("nooo, te pasaste del 10")
//     }

//     if (i == 3) {
//         alert("lo siento, te quedaste sin intentos");
//     }

// }



// BUCLE WHILE. PRIMEROS CONTACTOS; 
// let entrada = prompt("ingrese un dato del tipo texto, lo que quieras!")

// while (entrada != "PEPE") {
//     console.log("lo que escribiste fue " + entrada);
//     entrada = prompt("ingrese otro dato del tipo texto")
// }




// JUEGO ADIVINADOR DE NUMERO ENTRE EL 1 AL 10; USANDO IF + BUCLE WHILE
// let intentos = 3;
// let didWin = false;

// while (intentos != 0) {

//     let numeroIngresado = prompt("adivina el numero entre el 1 al 10, tienes " + intentos + " intentos");

//     const cerca = numeroIngresado == 4 || numeroIngresado == 6;
//     const lejos = numeroIngresado <= 3 || (numeroIngresado >= 7 && numeroIngresado <= 10);
//     const tePasaste = numeroIngresado >= 11;
    
//     if (numeroIngresado == 5) {
//         alert("felicidades, acertaste el numero");
//         didWin = true;
//         break
//     } else if (cerca) {
//         alert("muy cerca, pero no");
//     } else if (lejos) {
//         alert("todavia lejos, sigue intentando");
//     } else { (tePasaste)
//         alert("nooo, te pasaste del 10");
//     }

//     intentos--;

// }

// if (!didWin) {
//     alert("lo siento, has perdido");
// }



// JUEGO ADIVINADOR DE NUMERO ENTRE EL 1 AL 10; USANDO SWITCH + BUCLE WHILE
// let intentos = 3;
// let didWin = false;

// while (intentos != 0) {

//         let numeroIngresado = parseInt(prompt("adivina el numero entre el 1 al 10, tienes " + intentos + " intentos"));

//     switch (numeroIngresado) {
//         case 5:
//             alert("felicidades, acertaste el numero!");
//             didWin = true;
//             break;
//         case 1:
//         case 2:
//         case 3:
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//             alert("todavia lejos, sigue intentando");
//             break;
//         case 4:
//         case 6:
//             alert("muy cerca, pero no");
//             break;
//         default:
//             alert("noooo, te pasaste del 10");
//             break;
//     }
//     intentos--;
// }

// if (!didWin) {
//     alert("lo siento, has perdido");
// }


// let dato = parseInt(prompt("ingrese un numero y se repetira: Hola!. la cantidad de veces que usted ingreso"));

// for (let i = 0; i < dato; i++) {
//     console.log("hola!");
    
// }


// const promocion1 = 1800;
// const promocion2 = 2200;
// const promocion3 = 1200;
// const promocion4 = 1600;
// const envio = 800;

// let datoInicio = prompt("bienvenido! si quieres ver nuestras promos, escribe: quiero!. si de lo contrario no quieres nada, escribe: no, gracias!");

// while (datoInicio != "no, gracias!") {
//     if (datoInicio == "quiero!") {
//         promocionElegida = prompt("promocion1:  2 pizzas + coca cola 1.5L: $1800   -|-   promocion2:  12 empanadas jyq + coca cola 2.25L: $2200   -|-   promocion3:  sand. de milanesa + sprite 500ml: $1200   -|-   promocion4:  sand. de milanesa c/ jyq + fanta 500ml: $1600   -|-   En caso de querer alguna de las promociones, escribe el nombre TAL CUAL de la promocion. en caso de no querer nada, escribe: no, gracias!")
//     } else if (promocionElegida == promocion1) {
        
//     }
// }

// let sumaTotal = promocionElegida + envio +

// alert("no hay problema! gracias y vuelva prontos. :)")



// EL BODEGON DE HOMERO V.01
// const promocion1 = 1800;
// const promocion2 = 2200;
// const promocion3 = 1200;
// const promocion4 = 1600;
// const envio = 800;

// let datoInicio = prompt("¡Bienvenido! Si quieres ver nuestras promociones, escribe: quiero!. Si no deseas nada, escribe: no, gracias!");

// let promocionElegida;
// let sumaTotal = 0;

// while (datoInicio !== "no, gracias!") {
//     if (datoInicio === "quiero!") {
//         promocionElegida = prompt("Promoción 1: 2 pizzas + Coca Cola 1.5L: $1800\nPromoción 2: 12 empanadas jamón y queso + Coca Cola 2.25L: $2200\nPromoción 3: Sandwich de milanesa + Sprite 500ml: $1200\nPromoción 4: Sandwich de milanesa con jamón y queso + Fanta 500ml: $1600\n\nEscribe el nombre TAL CUAL de la promoción que deseas. Si no quieres nada, escribe: no, gracias.");

//         if (promocionElegida === "no, gracias!") {
//             break;
//         }

//         if (promocionElegida === "promocion1") {
//             sumaTotal += promocion1;
//             alert("¡promocion 1 seleccionada!")
//         } else if (promocionElegida === "promocion2") {
//             sumaTotal += promocion2;
//             alert("¡promocion 2 seleccionada!")
//         } else if (promocionElegida === "promocion3") {
//             sumaTotal += promocion3;
//             alert("¡promocion 3 seleccionada!")
//         } else if (promocionElegida === "promocion4") {
//             sumaTotal += promocion4;
//             alert("¡promocion 4 seleccionada!")
//         } else {
//             alert("Promoción no válida. Por favor, elige una promoción válida.");
//             continue;
//         }
//     } else {
//         alert("Entrada no válida. Por favor, escribe 'quiero!' para ver las promociones o 'no, gracias' para salir.");   
//     }
//     datoInicio = prompt("¿Quieres agregar más promociones o salir? Escribe: quiero! o no, gracias.");
// }

// if (sumaTotal > 0) {
//     sumaTotal += envio;
//     alert(`El costo total de las promociones seleccionadas es: $${sumaTotal}. Gracias por tu compra.`);
// } else {
//     alert("No has seleccionado ninguna promoción. Gracias y vuelve pronto.");
// }