import { createBusinessEl, mount } from './dom'

const API_URL = 'http://localhost:8000'

/**
 * @param  {string} fullpath
 * @return {object|null}
 */
export function getPageMeta (fullpath) {
  const path = fullpath
    .split('/')
    .filter((_, i) => i !== 0)
    .join('/')

  const businessDetailPathPattern = /^business\/(.*)$/
  const matched = path.match(businessDetailPathPattern)
  const isBusinessDetailPath = !!matched

  if (path === 'home') {
    return { pageName: 'home' }
  } else if (isBusinessDetailPath) {
    return {
      pageName: 'business',
      params: { businessId: matched[1] },
    }
  }

  return null
}

/**
 * @param  {string} pageName
 * @return {Element}
 */
export function addPage (pageName) {
  if (!pageName) {
    return
  }

  const main = document.querySelector('#main-content')
  const templateID = `#${pageName}-template`

  const template = document.querySelector(templateID)
  main.innerHTML = ''
  main.appendChild(template.content.cloneNode(true))

  return main.firstElementChild;
}

/**
 * @param  {object}  meta
 * @param  {string}  meta.pageName
 * @param  {object?} meta.params
 * @return {Promise}
 */
export function generatePageContent (meta) {
  const { pageName, params = {} } = meta

  if (pageName === 'home') {
    return generateHomeContent()
  } else if (pageName === 'business') {
    return generateBusinessDetailContent(params.businessId)
  }

  return Promise.reject(new Error(`No function handler for page name: ${pageName}`))
}

/**
 * @return {Promise}
 */
function generateHomeContent () {
  return fetch(`${API_URL}/businesses`)
    .then(response => response.json())
    .then((data) => {
      data.businesses.forEach((business) => {
        const $business = createBusinessEl(business)
        mount('#business-list', $business)
      })
    })
}

/**
 * @param {Promise} businessId
 */
function generateBusinessDetailContent (businessId) {
  const $title = document.querySelector('h1')

  return fetch(`${API_URL}/businesses/${businessId}`)
    .then(response => response.json())
    .then((data) => {
      $title.innerText = data.business.name
    })
    .catch(() => {
      $title.innerText = 'Not found'
    })
}
