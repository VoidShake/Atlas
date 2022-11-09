<template>
   <div>
      <template v-if="result">
         <h1>{{ result.locationDraft.name }}</h1>
         <PosDisplay v-bind="result.locationDraft.pos" />
      </template>
   </div>
</template>

<script lang="ts" setup>
import { GetLocationDraftDocument } from '~/graphql/generated'

const route = useActiveRoute()

const { result } = useQuery(GetLocationDraftDocument, () => ({
   id: Number.parseInt(route.params.id as string),
}))

definePageMeta({
   layout: 'confined',
})
</script>
