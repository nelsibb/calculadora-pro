var controllercalculadora = require('./calculadoracontroller.js');
module.exports = function(app) {
app.post('/Asumar',controllercalculadora.Sumar);
app.post('/Arestar',controllercalculadora.Restar);
app.post('/Amultiplicar',controllercalculadora.Multiplicar);
app.post('/Adividir',controllercalculadora.Division);
app.get('*', function(req, res){
res.sendfile('./login.html'); //CARGA UNICA DE LA VISTA
});
};