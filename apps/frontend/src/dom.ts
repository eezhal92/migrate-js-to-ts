import { date } from '@mybiz/shared'

export interface Business {
  id: string;
  name: string;
  createdAt: string;
}

export function createBusinessEl (business: Business) : Element {
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

export function mount (targetEntry: string, businessEl: Element) : void {
  const $entry = document.querySelector(targetEntry)

  $entry.appendChild(businessEl)
}

function createNameEl (name: string) : Element {
  const $name = document.createElement('div')
  $name.classList.add('name')
  $name.appendChild(document.createTextNode(name))

  return $name
}

function createLinkEl (business: Business) : Element {
  const $link = document.createElement('a')
  $link.setAttribute('href', `/business/${business.id}`)
  $link.setAttribute('aria-label', `View ${business.name} detail`)
  $link.appendChild(document.createTextNode('View'))

  return $link
}

function createCreatedAtEl (createdAt: string) : Element {
  const formattedCreatedAt = date.format(createdAt)
  const $createdAt = document.createElement('div')
  $createdAt.classList.add('created-at')
  $createdAt.appendChild(document.createTextNode(formattedCreatedAt))

  return $createdAt
}
