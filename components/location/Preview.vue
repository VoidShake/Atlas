<template>
   <StyledPanel>
      <h3>{{ location.name }}</h3>
      <p v-if="location.tales">
         <em> referenced in {{ location.tales.totalCount }} tales </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import type { MapLocationFragment, SubjectSummaryFragment, } from '~/graphql/generated';

defineProps<{
   location: MapLocationFragment & Partial<Pick<SubjectSummaryFragment, 'tales'>>
}>()
</script>
