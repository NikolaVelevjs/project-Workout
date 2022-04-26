const express = require('express')
const expressConfig = require('./config/express')
const databaseConfig = require('./config/database')
const cors = require('cors')

start()

async function start() {
    const app = express()

    const config = require('./config/config');

    expressConfig(app)
    await databaseConfig(app)
    app.use(cors({
        origin: 'http://localhost:4200'
    }));


    app.listen(config.port, console.log(`Listening on port ${config.port}!`));

}