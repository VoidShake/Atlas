<template>
   <StyledPanel>
      <h3>{{ location.name }}</h3>
      <p>
         <em> referenced in {{ location.tales.totalCount }} tales </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import { MapLocationFragment, SubjectSummaryFragment } from '~/graphql/generated'

defineProps<{
   location: MapLocationFragment & SubjectSummaryFragment
}>()
</script>
