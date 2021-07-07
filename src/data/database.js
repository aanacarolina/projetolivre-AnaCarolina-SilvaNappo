const mongoose = require('mongoose')
require('dotenv').config()

const optionEnv = process.env.DATABASE_URL

const connect = () => { mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(console.log('Mongo db conectado')).catch(err => console.err)
}

module.exports = { connect }