// ********relazione tra classi: ASSOCIAZIONE, AGGREGAZIONE, COMPOSIZIONE

class Phone {
    numero:number;
    constructor(_numero:number){
        this.numero = _numero;
    }
}

class User {
    nome:string;
    cognome:string;
    numeri:Phone[];  //significa quindi che usando la classe di prima, l'user può avere + numeri essendo un array
    constructor(_nome:string, _cognome:string, _numeri:number[]){  // in questo caso uso any, essendo l'array una sorta di oggetto
        this.nome = _nome;
        this.cognome= _cognome;
        this.numeri= _numeri.map(numero => new Phone(numero));
    }
}

let nuovoUser = new User ('Andrea', 'Poluzzi', [3284569978]);
let nuovoUser2 = new User ('Marco', 'Colucci', [3784569476]);
let nuovoUser3 = new User ('Giovanni', 'Rea', [3205587791]);
console.log(nuovoUser,nuovoUser2,nuovoUser3);

// FAI SEMPRE UNA DOPO L'ALTRA NEL TERMINALE tsc nomedelfile.ts & node nomedelfile.js


