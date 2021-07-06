const app = require('./src/app')
const PORT = process.env.PORT || 8008

app.listen(PORT, () => { 
    console.log(`O servidor está alimentado na porta ${PORT}`)
})

