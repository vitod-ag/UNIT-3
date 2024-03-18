//*********INTERFACE***************/
var Discente = /** @class */ (function () {
    function Discente(_studente, _eta, _tecnologia) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
    }
    Discente.prototype.getStudente = function () {
        return "".concat(this.studente, " di anni ").concat(this.eta);
    };
    Discente.prototype.getCorso = function () {
        return " sta frequentando il corso di ".concat(this.tecnologia);
    };
    // unisco i due get delle due interface
    Discente.prototype.completo = function () {
        return this.getStudente() + this.getCorso();
    };
    return Discente;
}());
var nuovoDiscente = new Discente('Anna', 35, 'Design');
console.log(nuovoDiscente.completo());
