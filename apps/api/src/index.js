const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()

app.use(cors({ origin: '*' }))
app.use(routes)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
