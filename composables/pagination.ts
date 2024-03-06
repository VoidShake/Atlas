import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { OperationDefinitionNode } from 'graphql'
import type { Ref } from 'vue'
import useDeferred from '~/composables/deferred'
import type { Exact, PageInfo, Pagination } from '~/graphql/generated'

export interface Connection<T> {
   nodes: T[]
   totalCount?: number
   pageInfo: Partial<PageInfo>
}

export interface ConnectionQuery<T> {
   connection: Connection<T>
}

type PaginationVariables<F> = Exact<{
   pagination?: Pagination
   filter?: F
}>

export function usePagination<T, Q extends ConnectionQuery<T>, F>(
   document: TypedDocumentNode<Q, PaginationVariables<F>>,
   limit: Ref<number>,
   filter?: Ref<F>,
) {
   const key = computed(() => {
      const operations = document.definitions.filter(
         it => it.kind === 'OperationDefinition',
      ) as OperationDefinitionNode[]
      const queryNode = operations.find(it => it.operation === 'query')
      return queryNode?.name?.value ?? ''
   })

   const pagination = useState<Pagination>(`pagination-${key.value}`, () => ({ first: limit?.value }))

   const { result, error } = useQuery(document, () => ({
      pagination: pagination.value,
      filter: filter?.value,
   }))

   function reset() {
      pagination.value = { first: limit?.value }
   }

   watch(limit, reset)
   watch(key, reset)
   if (filter) watch(filter, reset)

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

   const deferredResult = useDeferred(result)

   return { next, previous, result: deferredResult, error }
}
