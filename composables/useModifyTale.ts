import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { difference } from 'lodash-es'
import type { Ref } from 'vue'
import type { Exact, InputMaybe, ModifyTaleInput, TaleFragment } from '~~/graphql/generated'

interface Input extends ModifyTaleInput {
   places?: InputMaybe<number[]>
}

type Variables = Exact<{
   id: number
   input: ModifyTaleInput
   addedPlaces: number | number[]
   removedPlaces: number | number[]
}>

export function useModifyTale<R>(
   result: Ref<TaleFragment | undefined>,
   document: TypedDocumentNode<R, Variables>,
   onSuccess: (data: R) => void,
) {
   const { mutate } = useMutation(document, () => ({ refetchQueries: [`get${result.value?.__typename}`] }))

   const initialPlaces = computed(() => result.value?.places.nodes.map(it => it.id))

   const modify = async ({ places, ...input }: Input) => {
      if (!result.value || !initialPlaces.value) return

      const removedPlaces = difference(initialPlaces.value, places ?? [])
      const addedPlaces = difference(places, initialPlaces.value)

      const response = await mutate({ id: result.value.id, input, addedPlaces, removedPlaces })

      const data = response?.data
      if (data) onSuccess(data)
   }

   return { modify, initialPlaces }
}
