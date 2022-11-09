<template>
   <FormCreateLocation @saved="redirect" />
</template>

<script lang="ts" setup>
import { CreateLocationMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateLocationMutation, draft: boolean) {
   if (draft) router.push(`/me/drafts/locations/${data.created}`)
   else router.push(`/locations/${data.created}`)
}
</script>
