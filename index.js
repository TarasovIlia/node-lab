const http = require('http')
const port = 4200

const requestHandler = (req, res) => {
    console.log(req.url)
    res.end('My Server')
}


const localUrl = path => path ?  `http://localhost:${port}/${path}` : `http://localhost:${port}`

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log
    }
    console.log(`server is listening on ${localUrl()}`)
})