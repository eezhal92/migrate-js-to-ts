/**
 * @param  {string} message
 * @return {Element}
 */
export function createMessage (message) {
  const el = document.createElement('div')
  const text = document.createTextNode(message)
  el.appendChild(text)

  return el
}

/**
 * @param  {Element} message
 * @return {void}
 */
export function appendMessage (message) {
  const messagesEl = document.querySelector('#messages')

  messagesEl.appendChild(message)
}
