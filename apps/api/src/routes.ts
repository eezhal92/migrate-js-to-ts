import { Router }from 'express'
import { add } from '@mybiz/shared'
import * as repo from './repo'

const routes = Router()

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

export default routes
