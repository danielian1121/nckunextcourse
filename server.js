global.projectRoot = __dirname

const express = require('express')
const server = express()

server.listen(3000)

server.use('/js', express.static(`${global.projectRoot}/static/dist/js`))

server.use('/css', express.static(`${global.projectRoot}/static/dist/css`))

server.use( '/img', express.static(`${global.projectRoot}/static/src/img`) );

server.get('/', ( req, res ) => {
  res.sendFile(`${global.projectRoot}/static/dist/html/home/index.html`)
} )

module.exports = server
