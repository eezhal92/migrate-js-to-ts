/**
 * Create unique ID
 * @return {string}
 */
function createID () {
  return Math.random().toString().split('.').join('')
}

module.exports = {
  createID,
}
