import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { OperationDefinitionNode } from 'graphql'
import type { Ref } from 'vue'
import { Exact, PageInfo, Pagination } from '~/graphql/generated'

export interface Connection<T> {
   nodes: T[]
   totalCount?: number
   pageInfo: Partial<PageInfo>
}

export interface ConnectionQuery<T> {
   connection: Connection<T>
}

type PaginationVariables = Exact<{
   pagination?: Pagination
}>

export function usePagination<T, Q extends ConnectionQuery<T>>(
   document: TypedDocumentNode<Q, PaginationVariables>,
   limit: Ref<number>,
) {
   const key = computed(() => {
      const operations = document.definitions.filter(
         it => it.kind === 'OperationDefinition',
      ) as OperationDefinitionNode[]
      const queryNode = operations.find(it => it.operation === 'query')
      return queryNode?.name?.value ?? ''
   })

   const pagination = useState<Pagination>(`pagination-${key.value}`, () => ({ first: limit?.value }))

   const { result, error } = useQuery(document, variables)

   function reset() {
      pagination.value = { first: limit?.value }
   }

   watch(limit, reset)
   watch(key, reset)

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

   return { next, previous, result, error }
}
