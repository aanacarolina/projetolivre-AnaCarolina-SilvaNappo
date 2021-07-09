const app = require('./src/app')
const PORT = process.env.PORT || 8008

app.listen(PORT, () => { 
    console.log(`Servidor pronto para receber muitas doações na porta ${PORT}`)
})

