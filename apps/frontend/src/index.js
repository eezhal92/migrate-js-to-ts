import { date } from '@mybiz/shared'
import { createBusinessEl, mount } from './dom'

const API_URL = 'http://localhost:8000'

const headers = new Headers({
  'Accept': 'text/html',
})

const request = new Request(`${API_URL}/hello`, {
  headers,
  method: 'GET',
  mode: 'cors',
  cache: 'default'
})

fetch(`${API_URL}/businesses`, {
  method: 'GET',
  mode: 'cors',
  headers: new Headers({
    'Accept': 'application/json'
  })
})
  .then(response => response.json())
  .then((data) => {
    data.businesses.forEach((business) => {
      const $business = createBusinessEl(business)
      mount($business)
    })
  })
