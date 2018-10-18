import storage from './storage'
import { identity, date, Business } from '@mybiz/shared'

/**
 * Get all businesses
 */
export function findAll () : Business[]{
  return storage.businesses
}

/**
 * Find spesific business by its ID
 */
export function findById (id) : Business | null {
  return storage.businesses.find((business) => business.id === id) || null
}

export type NewBusinessData = {
  name: string;
}

/**
 * Create and persist new business
 */
export function create (data: NewBusinessData) : Business {
  const { name } = data
  const business = {
    id: identity.createID(),
    name,
    createdAt: date.now(),
  }

  storage.businesses.push(business)

  return business
}

