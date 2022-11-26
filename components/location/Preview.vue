<template>
   <StyledPanel>
      <h3>{{ location.name }}</h3>
      <p v-if="location.__typename === 'Place'">
         <em> referenced in {{ location.tales.totalCount }} tales </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import { PlaceSummaryFragment } from '~/graphql/generated'

defineProps<{
   location: PlaceSummaryFragment
}>()
</script>
