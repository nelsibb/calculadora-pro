class _Operacion{
    constructor(_numero1,_numero2){
    this.Numero1 = _numero1;
    this.Numero2 = _numero2;
    }
    Sumarajax()
    {
        var objetoaenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Asumar');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
        }
        else
            {
                reject(xhr);
            }
    };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
        }
        });
    }
    
    Restarajax()
    {
        var objetoenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Arestar');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
        }
        else
            {
                reject(xhr);
            }
    };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
        }
        });
    }
    
    Multiplicacionajax()
    {
        var objetoenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Amultiplicar');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
        }
        else
            {
                reject(xhr);
            }
    };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
        }
        });
    }
    
    Dividirajax()
    {
        var objetoenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Adividir');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onload = function(){
        if(xhr.status === 200){
            resolve(JSON.parse(xhr.responseText));
        }
        else
            {
                reject(xhr);
            }
    };
                xhr.send(JSON.stringify(objetoaenviar));
            }
            catch(err){
                reject(err.message);
        }
        });
    }
}
function numeros(a){
    document.getElementById("Resultado").value = document.getElementById("resultado").value+a;
}
function Signos(b){
G_Numero1=document.getElementById("resultado").value;
G_Signo = b;
document.getElementById("resultado").value="";
}
function igual(){
    G_Numero2 = document.getElementById("resultado").value;
    let claseinstanciada = new _Operacion(G_Numero1,G_Numero2);
    switch(G_Signo){
            case'+':
            claseinstanciada.Sumarajax().then(function(response){
                document.getElementById('resultado').value = response;
            },function(err){
                document.getElementById('resultado').value = "Error";
            });
            break;
            case'-':
            claseinstanciada.Restarajax().then(function(response){
                document.getElementById('resultado').value = response;
            },function(err){
                document.getElementById('resultado').value = "Error";
            });
            break;
            case'*':
            claseinstanciada.Multiplicacionajax().then(function(response){
                document.getElementById('resultado').value = response;
            },function(err){
                document.getElementById('resultado').value = "Error";
            });
            break;
            case'/':
            claseinstanciada.Dividirajax().then(function(response){
                document.getElementById('resultado').value = response;
            },function(err){
                document.getElementById('resultado').value = "Error";
            });
            break;
            
    }
}
