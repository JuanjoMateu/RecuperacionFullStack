const express = require('express');
const app = express()

const PORT = 3000

app.get('/', (req, res) => {res.send('Lista de contactos')})

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})