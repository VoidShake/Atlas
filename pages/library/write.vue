<template>
   <FormCreateTale @saved="
   redirect
   " />
</template>

<script lang="ts" setup>
import { CreateTaleMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateTaleMutation, draft: boolean) {
   if (draft) router.push(`/me/drafts/tales/${data.created}`)
   else router.push(`/library/${data.created}`)
}
</script>
