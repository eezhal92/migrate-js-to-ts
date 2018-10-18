import { createBusinessEl, mount } from './dom'

const API_URL = 'http://localhost:8000'

export type PageMeta = {
  pageName: string;
} & {
  params?: {
    [prop: string]: string
  }
}

export function getPageMeta (fullpath: string) : PageMeta|null {
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

export function addPage (pageName: string) : Element {
  if (!pageName) {
    return
  }

  const main = document.querySelector('#main-content')
  const templateID = `#${pageName}-template`

  const template = document.querySelector(templateID) as HTMLTemplateElement
  main.innerHTML = ''
  main.appendChild(template.content.cloneNode(true))

  return main.firstElementChild;
}

export function generatePageContent (meta: PageMeta) : Promise<any> {
  const { pageName, params = {} } = meta

  if (pageName === 'home') {
    return generateHomeContent()
  } else if (pageName === 'business') {
    return generateBusinessDetailContent(params.businessId)
  }

  return Promise.reject(new Error(`No function handler for page name: ${pageName}`))
}

function generateHomeContent () : Promise<any> {
  return fetch(`${API_URL}/businesses`)
    .then(response => response.json())
    .then((data) => {
      data.businesses.forEach((business) => {
        const $business = createBusinessEl(business)
        mount('#business-list', $business)
      })
    })
}

function generateBusinessDetailContent (businessId: string) : Promise<any> {
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
