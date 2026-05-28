// console.log("caricato js");

// const age = prompt("Quanti anni hai?");
// console.log(age);

// if (age >= 18) {
//     console.log("Accesso consentito al locale");

// }

// const val = Math.random();
// console.log(val);

// if (val < 0.5) {
//     console.log("Testa")
// }
// else {
//     console.log("Croce");
// }



// const name = prompt("Inserisci il tuo nome");

// if (nome != "") {
//     console.log("Bravo!");
// }
// else {
//     console.log("Hai inserito un campo vuoto...");
// }



// let totale = prompt("Inserisci il totale di spesa del carrello");
// const costo_spedizione = 5;

// if (totale > 50) {
//     console.log("Spedizione gratuita");
// }
// else {
//     totale = Number(totale) + costo_spedizione;
//     console.log("Costo spedizione: " + costo_spedizione + ", totale: " + totale);
// }

// const nome = prompt("Inserisci il tuo nome");

// if (nome != "") {
//     console.log("Bravo!");
// }
// else {
//     console.log("Hai inserito un campo vuoto...");
// }

const temperature = prompt("Inserisci la temperatura esterna");
if (temperature < 15) {
    const piove = prompt("Piove? S/N");
    if (piove == "S" || piove == "s") {
        console.log("Metti l'impermeabile");
    }
    else {
        console.log("Metti la giacca");
    }
}
else {
    console.log("Vai leggero");
}