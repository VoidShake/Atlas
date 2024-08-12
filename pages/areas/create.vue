<template>
   <FormCreateArea @saved="redirect" />
</template>

<script lang="ts" setup>
import type { CreateAreaDraftMutation, CreateAreaMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateAreaMutation | CreateAreaDraftMutation) {
   if (data.created.__typename === 'Area') router.push(`/areas/${data.created.slug}`)
   else router.push(`/me/drafts/areas/${data.created.id}`)
}
</script>
