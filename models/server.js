const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server
{
    constructor(){
        this.app = express();
        this.port = 4500;
        this.path = {
            products: '/api/products'
        };
        this.conectarDB();
        this.middlewares();
        this.router();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }

    router(){
        this.app.use(this.path.products, require('../routes/product'));
    }
}

module.exports = Server;