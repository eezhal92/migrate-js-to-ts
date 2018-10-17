import { date } from '@mybiz/shared'

/**
 * @param  {object} business
 * @param  {string} business.id
 * @param  {string} business.name
 * @param  {string} business.createdAt
 * @return {Element}
 */
export function createBusinessEl (business) {
  const $container = document.createElement('div')
  $container.classList.add('business')

  const $name = createNameEl(business.name)
  const $createdAt = createCreatedAtEl(business.createdAt)

  $container.appendChild($name)
  $container.appendChild($createdAt)

  return $container
}

/**
 * @param  {Element} businessEl
 * @return {void}
 */
export function mount (businessEl) {
  const $entry = document.querySelector('#business-list')

  $entry.appendChild(businessEl)
}

/**
 * @param  {string} name
 * @return {Element}
 */
function createNameEl (name) {
  const $name = document.createElement('div')
  $name.appendChild(document.createTextNode(name))

  return $name
}

/**
 * @param  {string} createdAt
 * @return {Element}
 */
function createCreatedAtEl (createdAt) {
  const formattedCreatedAt = date.format(createdAt)
  const $createdAt = document.createElement('div')
  $createdAt.appendChild(document.createTextNode(formattedCreatedAt))

  return $createdAt
}
