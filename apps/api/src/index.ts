import * as cors from 'cors'
import routes from './routes'
import express = require('express')

const app = express()

app.use(cors({ origin: '*' }))
app.use(routes)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})
