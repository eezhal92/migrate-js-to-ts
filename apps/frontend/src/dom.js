/**
 * @param  {object} business
 * @param  {string} business.id
 * @param  {string} business.name
 * @return {Element}
 */
export function createBusinessEl (business) {
  const el = document.createElement('div')
  const text = document.createTextNode(business.name)
  el.appendChild(text)

  return el
}

/**
 * @param  {Element} businessEl
 * @return {void}
 */
export function mount (businessEl) {
  const entryEl = document.querySelector('#business-list')

  entryEl.appendChild(businessEl)
}
