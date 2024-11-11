const express = require('express');
const app = express();
const router = require('./router/router.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(3000, () => {
    console.log(`Servidor rodando na porta http://localhost:3000 `)
})