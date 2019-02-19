class _Operacion{
    constructor(_numero1,_numero2){
    this.numero1 = parseInt(_numero1);
    this.numero2 = parseInt(_numero2);
    }
    Sumar(){
        return this.numero1 + this.numero2;
    }
    Restar(){
        return this.numero1 - this.numero2;
    }
    Multiplicar(){
        return this.numero1 * this.numero2;
    }
    Division(){
        return this.numero1 / this.numero2;
    }
    
}
exports.Sumar = function(req, res){ //exporta la funcion para que se pueda realizar
    let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.Sumar());
}
exports.Restar = function(req, res){
    let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.Restar());
}
exports.Multiplicar = function(req, res){
    let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.Multiplicar());
}
exports.Division = function(req, res){
    let claseinstanciada = new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.Division());
}