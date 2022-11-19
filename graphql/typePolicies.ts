import type { TypePolicies } from '@apollo/client'

// Not working for now
const typePolicies: TypePolicies = {
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
