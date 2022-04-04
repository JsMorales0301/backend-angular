const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/productos';

const dbConnection = async() => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos online')
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }
}

module.exports = {
    dbConnection
}