// Funzione per convertire il saldo residuo in euro formattato
function convertiEuro(valore: number): string {
    return valore.toFixed(2).replace('.', ',') + ' euro';
  }

interface Smarthphone {
    credito: number;
    numeroChiamate: number;
}

class User implements Smarthphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;

    constructor(_nome: string, _cognome: string){       //stanno solo loro due perché questi due parametri sono considerati i dati fondamentali per rappresentare un utente
        this.nome= _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }

    ricarica(ammontare:number): void {
        this.credito += ammontare;
    }

    chiamata(minuti: number):void {
        const costoChiamata = 0.20;
        const costoTotale = costoChiamata * minuti;
        if (costoTotale <= this.credito ) {
            this.credito -= costoTotale;
            this.numeroChiamate += minuti;
        }else {
            console.log('Credito insufficente');
        }
    }

    chiamata404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

//----------------------------------------
console.log('***Esercizio giorno 4 TypeScript***');

const utente2 = new User('Michele','Mali');
console.log('\n');

// Ricarica del credito dell'utente
utente2.ricarica(10);

// Chiamate dell'utente
utente2.chiamata(8);
utente2.chiamata(4);

// Verifico il saldo residuo e il numero di chiamate effettuate
console.log(`All\'utente ${utente2.nome} ${utente2.cognome} gli rimangono: ${convertiEuro(utente2.chiamata404())} €`);
console.log(`Il numero delle chiamate effettuate da ${utente2.nome} ${utente2.cognome} è: ${utente2.getNumeroChiamata()} minuti`);

// Azzero le chiamate
utente2.azzeraChiamate();

// Verifico quanto gha l'utente dopo aver azzerato
console.log(`Adesso l\'utente ${utente2.nome} ${utente2.cognome} ha: ${utente2.getNumeroChiamata()} minuti`);