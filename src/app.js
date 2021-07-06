const express = require("express")
const app = express()
const cors = require("cors")

const db = require("./data/database")
db.connect()

app.use(express.json())
app.use(cors())

const shop = require('./routes/shopsRoutes')
const category = require('./routes/categoriesRoutes')

app.use('/shops', shop)
app.use('/categories', category)

module.exports = app


