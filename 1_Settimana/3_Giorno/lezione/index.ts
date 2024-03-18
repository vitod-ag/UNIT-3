// PROPRIETA' READONLY, GETTER & SETTER

// ************************READONLY**************************
class Utente {
    readonly id:string='djf5f56';
}

const me = new Utente();

//me.id = 'nuovo id'  // mi da errore poiché è una proprieta di sola lettura (readonly) da usare solo nella classe stessa


class Utente2 {
    readonly id:string='djf5f56';
    constructor() {
        this.id = 'd888fg';
    }
}

//let me.id = new Utente2(); // anche qui ho l'errore ma nel costruttore della classe posso richiamare il tipo read-only

// ************************GETTER_&_SETTER**************************

class Utente3 {
    name!: string;
    constructor(_name:string, readonly _id:string ) {
        this.name = _name;
    }
    get getName() {     // con il modificatore get otteniamo il valore e NON PUO' NON AVERE UN RETURN
        return this.name;
    }
    set setName(_value:string) {    // con il modificatore set DEVE AVERE UN VALORE E SETTARLO 
        this.name=_value;
    }
}




