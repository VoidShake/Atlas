import type { ApolloError } from '@apollo/client'

export function notNull<T>(value: T | undefined | null): value is T {
   return value !== null && value !== undefined
}

export function extractMessages(error: ApolloError) {
   console.log({ ...error })
   if (error.graphQLErrors.length) return error.graphQLErrors.map(it => it.message)
   return [error.message]
}
