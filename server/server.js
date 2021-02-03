require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// rutas get - post - put - delete
app.get('/usuario',function(req,res){//leer registros
    res.json('get usuario');  
})

app.post('/usuario',function(req,res){//crear nuevos registros
    let body= req.body;
    if(body.nombre === undefined){
        res.status(400).json({       
            ok:false,
            mensaje:'el nombre es necesario'
        });
    }else{
        res.json({
            persona:body
        })
    }
})

app.put('/usuario/:id', function(req,res){//modifica nuevos registros y con :id se accede al parametro id
    let id = req.params.id;///se requiere paramaetros de url y se guarda el id
    res.json({//se retorna un json como resp uesta
        id// 
    });  
})

app.delete('/usuario',function(req,res){//crear nuevos registros
    res.json('delete usuario');  
})



app.listen( process.env.PORT, () => {
    console.log("________________________________________")
    console.log("|   =>>>>NodeMon esta escuchando puerto|", process.env.PORT);
});