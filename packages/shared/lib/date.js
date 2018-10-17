/**
 * Convert date into simple format.
 * @throws {Error}
 * @param  {string|Date} date
 * @return {string}
 */
function format (date) {
  if (typeof date === 'string') {
    return new Date(date).toLocaleDateString()
  } else if (date instanceof Date) {
    return date.toLocaleDateString()
  }

  throw new Error('Invalid argument. `date` param should be either string or instance of Date')
}

/**
 * Get current datetime in ISO string format.
 * @return {string}
 */
function now () {
  return new Date().toISOString()
}

module.exports = {
  now,
  format,
}
