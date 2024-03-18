// mi creo la classe che è come JS tranne che si mette il tipo (ex. nome: string; ) e anche nei parametri ( ex. _nome: string ) 
class Studente {                    
    nome: string;
    cognome: string;

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    getStudente(): string {                    // buona regola mettere il tipo anche al metodo come in questo caso
        return `${this.nome} ${this.cognome}`;  
    }

    private numeroRandom(): number {            // questo metodo sarà visibile solo all'interno della classe
        return Math.floor(Math.random() * 11);
    }

    somma(num1: number): number {                 // servendosi di un metodo private, può essere utilizzata solo nella classe stessa
        return num1 + this.numeroRandom();
    }

}
    // PROTECTED invece a differenza di private può essere usato in una sottoclasse MA NON IN UNA SUA ISTANZA

    // proprietà STATIC non è necessario creare una NEW istanza, però è importante che abbia un valore di partenza (quasi come fosse una costante)

class Utente extends Studente {
    eta: number;

    constructor(_nome: string, _cognome: string, _eta: number) {
        super(_nome, _cognome);
        this.eta = _eta
    }

    getStudente(): string {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
}

let nuovoStudente = new Studente('Mario', 'Rossi');         // ISTANZIO LA CLASSE STUDENTE
console.log(nuovoStudente.getStudente());
console.log(nuovoStudente.somma(15));

let nuovoUtente = new Utente('Aldo', 'Bianchi', 30);
console.log(nuovoUtente.getStudente());