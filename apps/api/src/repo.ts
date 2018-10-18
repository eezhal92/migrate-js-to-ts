import storage from './storage'
import { identity, date } from '@mybiz/shared'

/**
 * Get all businesses
 * @return {Array}
 */
export function findAll () {
  return storage.businesses
}

/**
 * Find spesific business by its ID
 * @return {object}
 */
export function findById (id) {
  return storage.businesses.find((business) => business.id === id)
}

/**
 * Create and persist new business
 * @param  {object} data
 * @param  {string} data.name
 * @return {object}
 */
export function create (data) {
  const { name } = data
  const business = {
    id: identity.createID(),
    name,
    createdAt: date.now(),
  }

  storage.businesses.push(business)

  return business
}

