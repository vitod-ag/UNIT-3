// ********relazione tra classi: ASSOCIAZIONE, AGGREGAZIONE, COMPOSIZIONE
var Phone = /** @class */ (function () {
    function Phone(_numero) {
        this.numero = _numero;
    }
    return Phone;
}());
var User = /** @class */ (function () {
    function User(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri.map(function (numero) { return new Phone(numero); });
    }
    return User;
}());
var nuovoUser = new User('Andrea', 'Poluzzi', [3284569978]);
var nuovoUser2 = new User('Marco', 'Colucci', [3784569476]);
var nuovoUser3 = new User('Giovanni', 'Rea', [3205587791]);
console.log(nuovoUser, nuovoUser2, nuovoUser3);
