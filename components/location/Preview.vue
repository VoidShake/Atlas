<template>
   <StyledPanel>
      <h3>{{ location.name }}</h3>
      <p v-if="location.__typename === 'Location'">
         <em> referenced in {{ location.tales.totalCount }} tales </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import { LocationSummaryFragment } from '~/graphql/generated'

defineProps<{
   location: LocationSummaryFragment
}>()
</script>
