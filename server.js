const express = require('express')
const app = express()
const port = 8000

const router = require('./src/routes/routing');

app.use('/', router)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
