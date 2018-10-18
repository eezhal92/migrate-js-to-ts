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
  const $link = createLinkEl(business)
  const $createdAt = createCreatedAtEl(business.createdAt)

  $container.appendChild($name)
  $container.appendChild($link)
  $container.appendChild($createdAt)

  return $container
}

/**
 * @param  {string}  targetEntry query selector of entru
 * @param  {Element} businessEl
 * @return {void}
 */
export function mount (targetEntry, businessEl) {
  const $entry = document.querySelector(targetEntry)

  $entry.appendChild(businessEl)
}

/**
 * @param  {string} name
 * @return {Element}
 */
function createNameEl (name) {
  const $name = document.createElement('div')
  $name.classList.add('name')
  $name.appendChild(document.createTextNode(name))

  return $name
}

/**
 * @param  {object} business
 * @param  {string} business.id
 * @param  {string} business.name
 * @return {Element}
 */
function createLinkEl (business) {
  const $link = document.createElement('a')
  $link.setAttribute('href', `/business/${business.id}`)
  $link.setAttribute('aria-label', `View ${business.name} detail`)
  $link.appendChild(document.createTextNode('View'))

  return $link
}

/**
 * @param  {string} createdAt
 * @return {Element}
 */
function createCreatedAtEl (createdAt) {
  const formattedCreatedAt = date.format(createdAt)
  const $createdAt = document.createElement('div')
  $createdAt.classList.add('created-at')
  $createdAt.appendChild(document.createTextNode(formattedCreatedAt))

  return $createdAt
}
