const express = require('express')
const { add } = require('@mybiz/shared')

const routes = express.Router()

routes.use('/hello', (request, response) => {
  response.json({
    messages: [
      `1 + 2 = ${add(1, 2)}`,
      `100 + 36 = ${add(100, 36)}`,
    ]
  })
})

module.exports = routes
