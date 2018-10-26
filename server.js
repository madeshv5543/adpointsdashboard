const express = require('express')
const app = express()
const serveStatic = require('serve-static')
const path = require('path')
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
