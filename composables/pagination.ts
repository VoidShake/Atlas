import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { Ref } from 'vue'
import { Exact, PageInfo, Pagination } from '~/graphql/generated'

interface ConnectionQuery<T> {
   connection: {
      nodes: T[]
      totalCount?: number
      pageInfo: Pick<PageInfo, 'startCursor' | 'endCursor'>
   }
}

type PaginationVariables = Exact<{
   pagination?: Pagination
}>

export function usePagination<T, Q extends ConnectionQuery<T>>(
   document: TypedDocumentNode<Q, PaginationVariables>,
   limit?: Ref<number>,
) {
   const pagination = useState<Pagination>('pagination', () => ({ first: limit?.value }))

   const { result } = useQuery(document, variables)

   function previous() {
      pagination.value = {
         before: result.value?.connection.pageInfo.startCursor,
         last: limit?.value,
      }
   }

   function next() {
      pagination.value = {
         after: result.value?.connection.pageInfo.endCursor,
         first: limit?.value,
      }
   }

   function variables() {
      return { pagination: pagination.value }
   }

   return { next, previous, result }
}
