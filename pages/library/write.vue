<template>
   <FormCreateTale @saved="redirect" />
</template>

<script lang="ts" setup>
import type { CreateTaleDraftMutation, CreateTaleMutation } from '~~/graphql/generated';

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateTaleMutation | CreateTaleDraftMutation) {
   if (data.created.__typename === 'Tale') router.push(`/library/${data.created.id}`)
   else router.push(`/me/drafts/tales/${data.created.id}`)
}
</script>
