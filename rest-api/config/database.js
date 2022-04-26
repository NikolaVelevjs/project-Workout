const mongoose = require('mongoose')
const dbName = 'demo'

const connectionString = `mongodb://localhost:27017/${dbName}`

module.exports = async(app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Database connected')
        await mongoose.connection.on('error', (err) => {
            console.log('Database error')

        })
    } catch (err) {
        console.error('error connecting to database')
        process.exit(1)
    }
}