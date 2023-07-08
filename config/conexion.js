const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    port: 3306,
    database: 'db_basico',
})

conexion.connect((err)=>{
    if(err) {
        console.log('error conectando con la base de datos'+ err)
    } else {
        console.log('la base de datos esta conectada')
    }
});

module.exports = conexion;