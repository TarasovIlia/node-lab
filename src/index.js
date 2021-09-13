const express = require('express');
const products = require('./products');
const app = express();
const os = require('os');

const name = process.env.USERNAME.replace('.',' ');
const cpus = os.cpus().length


const host = 'http://localhost:'
const port = 4200
const localUrl = url => url ?  `${host}${port}/${url}` : `${host}${port}`

app.get('/products', (req,res) => {
    res.send(products);
})

app.get('/', (req,res) => {
    res.send(`<h2>Hello ${name}<h2/>`);
})


app.listen(port, (err) => {
    if (err) {
        return console.log("somethings bad happened", err)
    }
    console.log(`\n\nserver is listening on ${localUrl()}\n\nserver is listening on ${localUrl('products')}`)
})