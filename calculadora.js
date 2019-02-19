class Calculadora{
	constructor(_numero1,_numero2)
	{
	this.Numero1=_numero1;
	this.Numero2=_numero2;
	}
	Sumar()
	{
	return parseInt(this.Numero1)+parseInt(this.Numero2);
	}
	Restar()
	{
	return parseInt(this.Numero1)-parseInt(this.Numero2);
	}
	Multiplicar()
	{
	return parseInt(this.Numero1)*parseInt(this.Numero2);
	}
	Dividir()
	{
	return parseInt(this.Numero1)/parseInt(this.Numero2);
	}
    // promesa Suma
    SumaAsincrona(){
        var objeto = this;
        return new Promise(function(resolve,reject){
                           try{ //intenta realizar la funcion
                           resolve(parseInt(objeto.Numero1) + parseInt(objeto.Numero2)); //en caso de que se pueda realizar
                           }
                            catch(err){
                                reject(err.message); //avisa cuando no se pudo
                            }
                           });
    }
    
    
    RestaAsincrona(){
        var objeto1 = this;
        return new Promise(function(resolve,reject){
                           try{
                           resolve(parseInt(objeto1.Numero1) - parseInt(objeto1.Numero2));
                           }
                            catch(err){
                                reject(err.message);
                            }
                           });
    }
    
    DivAsincrona(){
        var   objeto2 = this;
        return new Promise(function(resolve,reject){
                           try{
                           resolve(parseInt(objeto2.Numero1) / parseInt(objeto2.Numero2));
                           }
                            catch(err){
                                reject(err.message);
                            }
                           });
                           
    }
    MultiAsincrona(){
        var objeto3 = this;
        return new Promise(function(resolve,reject){
                           try{
                           resolve(parseInt(objeto3.Numero1) * parseInt(objeto3.Numero2));
                           }
                            catch(err){
                                reject(err.message);
                            }
                           });
    }
}

let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";
//click a los numeros
function Numeros(a){
    document.getElementById('resultado').value=document.getElementById('resultado').value+a;
}
//click al signo
function Signos(b){
G_Numero1=document.getElementById("resultado").value;
G_Signo = b;
document.getElementById("resultado").value="";
}
