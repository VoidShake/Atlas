<template>
   <section v-if="result">
      <FormCreateTale :initial="result.tale" :initial-locations="result.tale.locations.nodes.map(it => it.id)">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateTale>
   </section>
</template>

<script lang="ts" setup>
import { ModifyTaleDocument, GetTaleDocument, ModifyTaleInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetTaleDocument, () => ({ id: Number.parseInt(route.params.id as string) }))
const { mutate } = useMutation(ModifyTaleDocument, { refetchQueries: ['getTale'] })

async function modify(input: ModifyTaleInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.tale.id, input })
   const data = response?.data
   if (data) router.push(`/library/${data.created.id}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
