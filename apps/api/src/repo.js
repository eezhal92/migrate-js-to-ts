const { businesses } = require('./storage')
const { identity, date } = require('@mybiz/shared')

/**
 * Get all businesses
 * @return {Array}
 */
function findAll () {
  return businesses
}

/**
 * Find spesific business by its ID
 * @return {object}
 */
function findById (id) {
  return businesses.find((business) => business.id === id)
}

/**
 * Create and persist new business
 * @param  {object} data
 * @param  {string} data.name
 * @return {object}
 */
function create (data) {
  const { name } = data
  const business = {
    id: identity.createID(),
    name,
    createdAt: date.now(),
  }

  businesses.push(business)

  return business
}

module.exports = {
  create,
  findAll,
  findById,
}
