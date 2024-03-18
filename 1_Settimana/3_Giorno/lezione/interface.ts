
//*********INTERFACE***************/

interface Studenti {
    studente: string;
    eta: number;
    getStudente(): string;
}

interface Corsi {
    tecnologia: string;
    
    getCorso(): string;
}

class Discente implements Studenti, Corsi {
    studente: string;
    eta: number;
    tecnologia: string;

    constructor (_studente:string, _eta:number, _tecnologia:string) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
    }

    getStudente(): string {
        return `${this.studente} di anni ${this.eta}`
    }

    getCorso(): string {
        return ` sta frequentando il corso di ${this.tecnologia}`
    }

    // unisco i due get delle due interface
    completo(): string {
        return this.getStudente() + this.getCorso();
    }
}

let nuovoDiscente = new Discente('Anna', 35, 'Design');

console.log(nuovoDiscente.completo());
