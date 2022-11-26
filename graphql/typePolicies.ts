import type { TypePolicies } from '@apollo/client'
import type { Tale, TaleDraft } from './generated'

const taleFields = {
   locations: {
      read(it: Tale | TaleDraft) {
         return [...it.areas?.nodes, ...it.places?.nodes]
      },
   },
}

// Not working for now, see https://github.com/nuxt-modules/apollo/issues/443
const typePolicies: TypePolicies = {
   Tale: {
      fields: taleFields,
   },
   TaleDraft: {
      fields: taleFields,
   },
   Timestamps: {
      fields: {
         createdAt: {
            read: (value: number) => new Date(value),
         },
         modifiedAt: {
            read: (value: number) => new Date(value),
         },
      },
   },
}

export default typePolicies
