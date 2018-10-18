import { identity, date } from '@mybiz/shared'

const businesses = [
  {
    id: identity.createID(),
    name: 'Perusahaan A',
    createdAt: date.now(),
  },
  {
    id: identity.createID(),
    name: 'Perusahaan B',
    createdAt: date.now(),
  },
  {
    id: identity.createID(),
    name: 'Perusahaan C',
    createdAt: date.now(),
  },
]

export default {
  businesses,
}
