const app = require('./src/app')
const PORT = 8008

app.listen(process.env.PORT, () => { 
    console.log(`O servidor está alimentado na porta ${PORT}`)
})

