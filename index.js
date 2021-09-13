const path = require('path')
const express = require('express')
const app = express()
const port = 4200
const products = require('./products')


const localUrl = path => path ?  `http://localhost:${port}/${path}` : `http://localhost:${port}`



app.get('/products', (req,res) => {
    res.send(products);
})

app.listen(port, (err) => {
    if (err) {
        return console.log("somethings bad happened", err)
    }
    console.log(`server is listening on ${localUrl()}`)
})