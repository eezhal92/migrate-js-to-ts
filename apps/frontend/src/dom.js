import { date } from '@mybiz/shared'

/**
 * @param  {object} business
 * @param  {string} business.id
 * @param  {string} business.name
 * @param  {string} business.createdAt
 * @return {Element}
 */
export function createBusinessEl (business) {
  const containerEl = document.createElement('div')

  const nameEl = createNameEl(business.name)
  const createdAtEl = createCreatedAtEl(business.createdAt)

  containerEl.appendChild(nameEl)
  containerEl.appendChild(createdAtEl)

  return containerEl
}

/**
 * @param  {Element} businessEl
 * @return {void}
 */
export function mount (businessEl) {
  const entryEl = document.querySelector('#business-list')

  entryEl.appendChild(businessEl)
}

/**
 * @param  {string} name
 * @return {Element}
 */
function createNameEl (name) {
  const nameEl = document.createElement('div')
  nameEl.appendChild(document.createTextNode(name))

  return nameEl
}

/**
 * @param  {string} createdAt
 * @return {Element}
 */
function createCreatedAtEl (createdAt) {
  const formattedCreatedAt = date.format(createdAt)
  const createdAtEl = document.createElement('div')
  createdAtEl.appendChild(document.createTextNode(formattedCreatedAt))

  return createdAtEl
}
