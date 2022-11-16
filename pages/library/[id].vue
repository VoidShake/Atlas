<template>
   <section>
      <TalePage v-if="result" :tale="result.tale" />
   </section>
</template>

<script lang="ts" setup>
import { GetTaleDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetTaleDocument, () => ({
   id: Number.parseInt(route.params.id as string),
}))

definePageMeta({
   layout: 'confined',
})
</script>
