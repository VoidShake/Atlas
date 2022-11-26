<template>
   <FormCreatePlace @saved="redirect" />
</template>

<script lang="ts" setup>
import { CreateLocationMutation, CreateLocationDraftMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateLocationMutation | CreateLocationDraftMutation) {
   if (data.created.__typename === 'Location') router.push(`/locations/${data.created.slug}`)
   else router.push(`/me/drafts/locations/${data.created.id}`)
}
</script>
