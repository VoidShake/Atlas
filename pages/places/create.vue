<template>
   <FormCreatePlace @saved="redirect" />
</template>

<script lang="ts" setup>
import { CreatePlaceMutation, CreatePlaceDraftMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreatePlaceMutation | CreatePlaceDraftMutation) {
   if (data.created.__typename === 'Place') router.push(`/places/${data.created.slug}`)
   else router.push(`/me/drafts/places/${data.created.id}`)
}
</script>
