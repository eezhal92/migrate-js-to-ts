/**
 * Create unique ID
 * @return {string}
 */
function createID () {
  return Math.random().toString().replace('.', '')
}

module.exports = {
  createID,
}
