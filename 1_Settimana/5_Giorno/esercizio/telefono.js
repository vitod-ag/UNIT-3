// Funzione per convertire il saldo residuo in euro formattato
function convertiEuro(valore) {
    return valore.toFixed(2).replace('.', ',') + ' euro';
}
var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (ammontare) {
        this.credito += ammontare;
    };
    User.prototype.chiamata = function (minuti) {
        var costoChiamata = 0.20;
        var costoTotale = costoChiamata * minuti;
        if (costoTotale <= this.credito) {
            this.credito -= costoTotale;
            this.numeroChiamate += minuti;
        }
        else {
            console.log('Credito insufficente');
        }
    };
    User.prototype.chiamata404 = function () {
        return this.credito;
    };
    User.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
//----------------------------------------
console.log('***Esercizio giorno 4 TypeScript***');
var utente1 = new User('Michele', 'Mali');
console.log('\n');
// Ricarica del credito dell'utente
utente1.ricarica(10);
// Chiamate dell'utente
utente1.chiamata(8);
utente1.chiamata(4);
// Verifico il saldo residuo e il numero di chiamate effettuate
console.log("All'utente ".concat(utente1.nome, " ").concat(utente1.cognome, " gli rimangono: ").concat(convertiEuro(utente1.chiamata404()), " \u20AC"));
console.log("Il numero delle chiamate effettuate da ".concat(utente1.nome, " ").concat(utente1.cognome, " \u00E8: ").concat(utente1.getNumeroChiamata(), " minuti"));
// Azzero le chiamate
utente1.azzeraChiamate();
// Verifico quanto gha l'utente dopo aver azzerato
console.log("Adesso l'utente ".concat(utente1.nome, " ").concat(utente1.cognome, " ha: ").concat(utente1.getNumeroChiamata(), " minuti"));
