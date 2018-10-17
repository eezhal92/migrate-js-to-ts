import { date } from '@mybiz/shared'
import { createBusinessEl, mount } from './dom'

const API_URL = 'http://localhost:8000'

fetch(`${API_URL}/businesses`)
  .then(response => response.json())
  .then((data) => {
    data.businesses.forEach((business) => {
      const $business = createBusinessEl(business)
      mount($business)
    })
  })
