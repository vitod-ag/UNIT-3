// Funzione per convertire il saldo residuo in euro formattato
function convertiEuro(valore: number): string {
    return valore.toFixed(2);
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
console.log('\n');
console.log('***Esercizio giorno 5 TypeScript***');
console.log('\n');

const utente1 = new User('Michele','Mali');


// Ricarica del credito dell'utente
utente1.ricarica(10);

// Chiamate dell'utente
utente1.chiamata(8);
utente1.chiamata(4);

// Verifico il saldo residuo e il numero di chiamate effettuate
console.log(`All\'utente ${utente1.nome} ${utente1.cognome} gli rimangono: ${convertiEuro(utente1.chiamata404())} €`);
console.log(`Il numero delle chiamate effettuate da ${utente1.nome} ${utente1.cognome} è: ${utente1.getNumeroChiamata()} minuti`);

// Azzero le chiamate
utente1.azzeraChiamate();

// Verifico quanto gha l'utente dopo aver azzerato
console.log(`Adesso l\'utente ${utente1.nome} ${utente1.cognome} ha: ${utente1.getNumeroChiamata()} minuti`);
console.log('\n');