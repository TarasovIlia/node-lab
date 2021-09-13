const express = require('express');
//const exphbs = require('express-handlebars');
const { MongoClient } = require('mongodb')


const products = require('./products');
const app = express();
const os = require('os');

const name = process.env.USERNAME.replace('.',' ');
const cpus = os.cpus().length;

const host = 'http://localhost:'
const port = process.env.PORT || 4200
const localUrl = url => url ?  `${host}${port}/${url}` : `${host}${port}`

const client = new MongoClient('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products')


app.get('/', (req,res) => {
    res.send(`<h2>Hello ${name}<h2/>`);
})

async function start() {
    try {
        await client.connect()
        console.log('Connected');
        const products = client.db().collection('products');
        await products.insertOne({displayName:"God Of War", price:50});
        const game = await products.findOne({displayName:'God Of War'})
        console.log(game )
        app.listen(port, () => {
            console.log(`\n\nserver is listening on ${localUrl()}\n\nserver is listening on ${localUrl('products')}`)
        })
    } catch(err) {
        console.log(err)
    }
}

start()