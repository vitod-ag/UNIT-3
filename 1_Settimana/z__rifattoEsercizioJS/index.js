/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/
// JS Basics
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('\n');
console.log('ESERCIZIO A');
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 22));
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('\n');
console.log('ESERCIZIO B');
function random() {
    var random = Math.floor(Math.random() * 21);
    return random;
}
console.log(random());
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('\n');
console.log('ESERCIZIO C');
var me = {
    name: 'Vito',
    surname: 'Gay',
    age: 22
};
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('\n');
console.log('ESERCIZIO D');
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('\n');
console.log('ESERCIZIO E');
me.skills = ['html', 'ccs'];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('\n');
console.log('ESERCIZIO F');
me.skills.push('bootstrap');
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('\n');
console.log('ESERCIZIO G');
me.skills.pop();
console.log(me);
// Funzioni
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('\n');
console.log('ESERCIZIO 1');
function dice() {
    var random = Math.floor(Math.random() * 5);
    return random;
}
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('\n');
console.log('ESERCIZIO 2');
function whoIsBigger(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num1 < num2) {
        return num2;
    }
    return 'I numeri sono uguali';
}
console.log(whoIsBigger(6, 8));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('\n');
console.log('ESERCIZIO 3');
function splitMe(stringa) {
    var split = stringa.split(" ");
    return split;
}
console.log(splitMe('I love coding'));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('\n');
console.log('ESERCIZIO 4');
function deleteOne(stringa, bool) {
    if (bool) {
        return stringa.slice(1);
    }
    else {
        return stringa.slice(0, -1);
    }
}
console.log(deleteOne('mamma', false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('\n');
console.log('ESERCIZIO 5');
function onlyLetters(stringa) {
    // uso una regex /\d/g, che corrisponde a tutte le cifre numeriche nella stringa e il metodo replace 
    return stringa.replace(/\d/g, '');
}
console.log(onlyLetters('ddv5 6sdjsd'));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('\n');
console.log('ESERCIZIO 6');
function isThisAnEmail(stringa) {
    var emailValida = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return emailValida.test(stringa); // Il metodo test() viene utilizzato per testare se una stringa corrisponde a una regex specificata. Restituisce true se la stringa corrisponde alla regex, altrimenti restituisce false.
}
console.log(isThisAnEmail('vito@dagnello.com'));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log('\n');
console.log('ESERCIZIO 7');
function whatDayIsIt() {
    // ricavo con il metodo Date() per ottenere il giorno corrente
    var data = new Date();
    //otteniamo il giorno della settimana in numeri
    var giorno = data.getDay();
    // mi creo un array con i giorni della settimana scritti in string
    var giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    // mi servo dell'array che in posizione della variabile giorno mi indica il giorno di oggi
    return giorniSettimana[giorno];
}
console.log('Oggi è ' + whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('\n');
console.log('ESERCIZIO 8');
function rollTheDices(numero) {
    //mi serve una variabile che accrescerà ovvero la varuabile sum
    var sum = 0;
    // mi serve un array che memorizza i numeri casuali che estrae la funzione dice()
    var values = [];
    //ciclo per estrarre tante volte quante il numero nel parametro
    for (var i = 0; i < numero; i++) {
        // mi creo una variabile che mi riporta i numeri estratti dalla funzione dice()
        var numeroEstratto = dice();
        // grazie alla variabile sum, mi sommo tutte le estrazioni fatte
        sum += numeroEstratto;
        // ogni numero estratto me lo aggiungo e quindi me lo pusho all'array
        values.push(numeroEstratto);
    }
    return { sum: sum, values: values };
}
console.log(rollTheDices(3));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// Arrays & Oggetti
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
// [EXTRA] JS Avanzato
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
/* Questo array viene usato per gli esercizi. Non modificarlo. */
// const movies = [
//   {
//     Title: 'The Lord of the Rings: The Fellowship of the Ring',
//     Year: '2001',
//     imdbID: 'tt0120737',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Return of the King',
//     Year: '2003',
//     imdbID: 'tt0167260',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Two Towers',
//     Year: '2002',
//     imdbID: 'tt0167261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of War',
//     Year: '2005',
//     imdbID: 'tt0399295',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lords of Dogtown',
//     Year: '2005',
//     imdbID: 'tt0355702',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings',
//     Year: '1978',
//     imdbID: 'tt0077869',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1990',
//     imdbID: 'tt0100054',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lords of Salem',
//     Year: '2012',
//     imdbID: 'tt1731697',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
//     Year: '1984',
//     imdbID: 'tt0087365',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1963',
//     imdbID: 'tt0057261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Avengers',
//     Year: '2012',
//     imdbID: 'tt0848228',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Infinity War',
//     Year: '2018',
//     imdbID: 'tt4154756',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Age of Ultron',
//     Year: '2015',
//     imdbID: 'tt2395427',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Endgame',
//     Year: '2019',
//     imdbID: 'tt4154796',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
//   },
// ]
// /*
// REGOLE
// - Tutte le risposte devono essere scritte in JavaScript
// - Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
// - Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
// - Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
// - Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
// */
// // JS Basics
// /* ESERCIZIO A
//   Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
// */
// /* ESERCIZIO B
//   Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
// */
// /* ESERCIZIO C
//   Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
// */
// /* ESERCIZIO D
//   Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
// */
// /* ESERCIZIO E
//   Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
// */
// /* ESERCIZIO F
//   Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
// */
// /* ESERCIZIO G
//   Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
// */
// // Funzioni
// /* ESERCIZIO 1
//   Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
// */
// /* ESERCIZIO 2
//   Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
// */
// /* ESERCIZIO 3
//   Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
//   Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
// */
// /* ESERCIZIO 4
//   Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
//   Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
// */
// /* ESERCIZIO 5
//   Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
//   Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
// */
// /* ESERCIZIO 6
//   Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
// */
// /* ESERCIZIO 7
//   Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
// */
// /* ESERCIZIO 8
//   Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
//   Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
//   il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
//   L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
//   Example:
//   rollTheDices(3) => ritorna {
//       sum: 10
//       values: [3, 3, 4]
//   }
// */
// /* ESERCIZIO 9
//   Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
// */
// /* ESERCIZIO 10
//   Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
// */
// // Arrays & Oggetti
// // NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
// /* ESERCIZIO 11
//   Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
//   in esso la proprietà chiamata come la stringa passata come secondo parametro.
// */
// /* ESERCIZIO 12
//   Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
// */
// /* ESERCIZIO 13
//   Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
// */
// /* ESERCIZIO 14
//   Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
// */
// /* ESERCIZIO 15
//   Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
// */
// /* ESERCIZIO 16
//   Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
// */
// /* ESERCIZIO 17
//   Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
// */
// /* ESERCIZIO 18
//   Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
//   "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
// */
// /* ESERCIZIO 19
//   Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
// */
// // DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
// /* ESERCIZIO 20
//   Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
// */
// /* ESERCIZIO 21
//   Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
// */
// /* ESERCIZIO 22
//   Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
// */
// /* ESERCIZIO 23
//   Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
// */
// /* ESERCIZIO 24
//   Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
// */
// /* ESERCIZIO 25
//   Scrivi una funzione per svuotare la lista non ordinata con id "myList".
// */
// /* ESERCIZIO 26
//   Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
// */
// // [EXTRA] JS Avanzato
// /* ESERCIZIO 27
//   Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
//   Esempio:
//   halfTree(3)
//   *
//   **
//   ***
// */
// /* ESERCIZIO 28
//   Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
//   Esempio:
//   tree(3)
//     *
//    ***
//   *****
// */
// /* ESERCIZIO 29
//   Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
// */
// /* Questo array viene usato per gli esercizi. Non modificarlo. */
// const movies = [
//   {
//     Title: 'The Lord of the Rings: The Fellowship of the Ring',
//     Year: '2001',
//     imdbID: 'tt0120737',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Return of the King',
//     Year: '2003',
//     imdbID: 'tt0167260',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Two Towers',
//     Year: '2002',
//     imdbID: 'tt0167261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of War',
//     Year: '2005',
//     imdbID: 'tt0399295',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lords of Dogtown',
//     Year: '2005',
//     imdbID: 'tt0355702',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings',
//     Year: '1978',
//     imdbID: 'tt0077869',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1990',
//     imdbID: 'tt0100054',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lords of Salem',
//     Year: '2012',
//     imdbID: 'tt1731697',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
//     Year: '1984',
//     imdbID: 'tt0087365',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1963',
//     imdbID: 'tt0057261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Avengers',
//     Year: '2012',
//     imdbID: 'tt0848228',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Infinity War',
//     Year: '2018',
//     imdbID: 'tt4154756',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Age of Ultron',
//     Year: '2015',
//     imdbID: 'tt2395427',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Endgame',
//     Year: '2019',
//     imdbID: 'tt4154796',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
//   },
// ]
