require('./config/config');

const express = require('express')
const app = express();

/** "bodyParser" Paquete para procesar y serializar en formato JSON los datos que vengan en el request 
 * en formato x-www-form-urlencoded 
 */
const bodyParser = require('body-parser')

/*****************************************************/
/**Todas las peticiones que el cliente haga pasan por las siguientes 2 líneas,
 * lo que hacen estas líneas es obtener el body que el cliente envía
 */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
/*****************************************************/

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

app.post('/usuario', function(req, res) {
    /*Obtiene el body de que viene en la petición del cliente y que ha sido previamente
      procesado por el bodyParser */
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: `El nombre es necesario`
        })
    } else {

        res.json({
            persona: body
        });
    }


});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});

app.listen(process.env.PORT, () => {

    console.log('Escuchando puerto:', process.env.PORT);
});