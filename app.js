const express = require('express')
const app = express()
const port = 3013

app.get('/', (req, res) => {
  res.send('Hello SR!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
