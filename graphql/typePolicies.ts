import type { TypePolicies } from '@apollo/client'
import type { Tale, TaleDraft } from './generated'

const taleFields = {
   locations: {
      read(it: Tale | TaleDraft) {
         return [...it.areas?.nodes, ...it.places?.nodes]
      },
   },
}

const typePolicies: TypePolicies = {
   Tale: {
      fields: taleFields,
   },
   TaleDraft: {
      fields: taleFields,
   },
   // Not working for now
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
