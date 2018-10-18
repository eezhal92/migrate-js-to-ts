import { identity, date, Business } from '@mybiz/shared'

const businesses: Business[] = [
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
