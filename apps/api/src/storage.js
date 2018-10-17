const { identity } = require('@mybiz/shared')

const businesses = [
  {
    id: identity.createID(),
    name: 'Perusahaan A',
  },
  {
    id: identity.createID(),
    name: 'Perusahaan B',
  },
  {
    id: identity.createID(),
    name: 'Perusahaan C',
  },
]

module.exports = {
  businesses,
}
