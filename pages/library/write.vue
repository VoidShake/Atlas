<template>
   <FormCreateTale @saved="redirect" />
</template>

<script lang="ts" setup>
import { CreateTaleMutation } from '~~/graphql/generated'

const router = useRouter()

definePageMeta({
   layout: 'confined',
})

function redirect(data: CreateTaleMutation) {
   router.push(`/library/${data.created}`)
}
</script>

<style scoped>
ul {
   background: red;
}
</style>
