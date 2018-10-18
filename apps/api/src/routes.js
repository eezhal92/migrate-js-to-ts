const express = require('express')
const { add } = require('@mybiz/shared')

const repo = require('./repo')

const routes = express.Router()

routes.get('/hello', (request, response) => {
  return response.json({
    messages: [
      `1 + 2 = ${add(1, 2)}`,
      `100 + 36 = ${add(100, 36)}`,
    ]
  })
})

routes.get('/businesses', getBusiness)
routes.get('/businesses/:id', getSpesificBusiness)

function getBusiness (request, response) {
  return response.json({
    businesses: repo.findAll(),
  })
}

function getSpesificBusiness (request, response) {
  const { id: businessId } = request.params
  const business = repo.findById(businessId)

  if (!business) {
    return response.status(404).json({
      message: `Business with ID of ${businessId} was not found`
    })
  }

  return response.json({
    business,
  })
}

module.exports = routes
