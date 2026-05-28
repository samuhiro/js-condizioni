
# Esercizio 1

Chiedi l'età dell'utente tramite prompt. Se l'utente è maggiorenne, stampa a console "Accesso consentito al locale".

## Ragionamento
- Leggo l'età dell'utente
- SE l'età è maggiore o uguale a 18
    - stampo "Accesso consentito al locale"

### Snippet
```js
console.log("caricato js");

const age = prompt("Quanti anni hai?");
console.log(age);

if (age >= 18) {
    console.log("Accesso consentito al locale");

}
```


# Esercizio 2

Chiedi un voto da 1 a 10. Stampa "Insufficiente" se < 6, "Sufficiente" se tra 6 e 7, "Buono" se tra 8 e 9, "Ottimo" se 10.

## Ragionamento
- Leggo il voto dell'utente
- SE è maggiore di 10
    - stampo un errore
- ALTRIMENTI E è inferiore o uguale a 6
    - stampo "Insufficiente"
- ALTRIMENTI SE è maggiore di 6 ma minore o uguale a 7
    - stampo "Buono"
- ALTRIMENTI    
    - stampo "Ottimo
    
### Snippet
```js
const voto = prompt("Inserisci il tuo voto, compreso tra 1 e 10");
console.log(voto)

if (voto <= 6) {
    console.log("Sufficiente");
} else if (voto < 7) {
    console.log("Buono");
} else if (voto < 10){
    console.log("Ottimo");
} else {
    console.log("Non puoi aver preso più di 10");
}
```

# Esercizio 3

Chiedi il saldo attuale e l'importo da prelevare. Prima verifica se l'importo è positivo. Se lo è, verifica se il saldo è sufficiente. Se sì, stampa "Prelievo effettuato" e il nuovo saldo, altrimenti stampa "Saldo insufficiente".

## Ragionamento
- Leggo il saldo attuale
- Leggo l'importo da prelevare
- SE l'importo è positivo
    - SE il saldo è sufficiente 
        - stampo "Prelievo effettuato" e il nuovo saldo
    - ALTRIMENTI 
        - stampo "Saldo insufficiente"
- ALTRIMENTI
    - stampo "Errore, importo negativo"

    
### Snippet
```js

const saldo = prompt("Inserisci il tuo saldo attuale");
const importo = prompt("Inserisci l'importo da prelevare");

if(importo > 0 && importo <= saldo) {
    console.log("Prelievo effettuato, nuovo saldo: " + saldo + importo);
} else {
    console.log("Errore: importo negativo o saldo non sufficiente");
}

```

# Esercizio 4

Simula il lancio di una moneta. Se il numero è minore di 0.5 stampa "Testa", altrimenti stampa "Croce".

## Ragionamento
- Leggo un valore random tra 0 e 1
- SE è minore di 0.5
    - stampa "Testa"
- ALTRIMENTI
    - stampa "Croce"


    
### Snippet
```js

const val = Math.random();
console.log(val);

if (val < 0.5) {
    console.log("Testa")
}
else {
    console.log("Croce");
}

```



# Esercizio 5

Chiedi all'utente di inserire il suo nome. Verifica che non abbia lasciato il campo vuoto.

## Ragionamento
- Leggo il nome dell'utente
- SE il nome è diverso dalla stringa vuota "" 
    - stampo che l'utente è stato bravo
- ALTRIMENTI 
    - stampo che l'utente ha inserito un campo vuoto
    
### Snippet
```js

const name = prompt("Inserisci il tuo nome");

if (nome != null) {
    console.log("Bravo!");
}
else {
    console.log("Hai inserito un campo vuoto...");
}

```

# Esercizio 6

Chiedi il totale del carrello e-commerce. Se la spesa è superiore a 50€, stampa "Spedizione gratuita", altrimenti calcola e stampa un costo di spedizione fisso di 5€.

## Ragionamento
- Leggo il totale del carrello e-commerce
- SE il totale è maggiore di 50 euro
    - stampo "Spedizione gratuita"
- ALTRIMENTI 
    - calcolo e stampo il nuovo totale sommando il costo di sped. di 5€
    
### Snippet
```js

let totale = prompt("Inserisci il totale di spesa del carrello");
const costo_spedizione = 5;

if(totale > 50){
    console.log("Spedizione gratuita");
}
else {
    totale += costo_spedizione;
    console.log("Costo spedizione: " + costo_spedizione + ", totale: " + totale);
}

```

# Esercizio 6

Chiedi la temperatura esterna. Se fa freddo (< 15°C), chiedi se piove. Se piove stampa "Metti impermeabile", altrimenti "Metti giacca". Se non fa freddo (>= 15°C), stampa "Vai leggero".

## Ragionamento
- Leggo la temperatura esterna
- SE la temperatura è minore di 15
    - SE piove
        - stampo "Metti impermeabile"
    - ALTRIMENTI 
        - stampo "Metti la giacca"
- ALTRIMENTI
    - stampo "Vai leggero"
    
### Snippet
```js

const temperature = prompt("Inserisci la temperatura esterna");
if(temperatura < 15){
    const piove = prompt("Piove? S/N");
    if(piove == "S" || piove == "s"){
        console.log("Metti l'impermeabile");
    } 
    else {
        console.log("Metti la giacca");
    }
}
else {
    console.log("Vai leggero");
}


```