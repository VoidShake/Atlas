<template>
   <section v-if="result">
      <FormCreateArea :initial="result?.area">
         <template #buttons="{ valid, value }">
            <FormKit type="submit" :disabled="!valid" @click.prevent="modify(value)"> Save </FormKit>
         </template>
      </FormCreateArea>
   </section>
</template>

<script lang="ts" setup>
import { GetAreaDocument, ModifyAreaDocument, type ModifyAreaInput } from '~~/graphql/generated'

const router = useRouter()
const route = useRoute()

const { result } = useQuery(GetAreaDocument, () => ({ slug: route.params.slug }))
const { mutate } = useMutation(ModifyAreaDocument, { refetchQueries: ['getArea'] })

async function modify(input: ModifyAreaInput) {
   if (!result.value) return
   const response = await mutate({ id: result.value.area.id, input })
   const data = response?.data
   if (data) router.push(`/areas/${data.modified.slug}`)
}

definePageMeta({
   layout: 'confined',
})
</script>
