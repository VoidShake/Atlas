<template>
   <StyledPanel>
      <h3>{{ tale.title }}</h3>
      <p>
         <em> {{ tale.places.totalCount }} referenced places </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import { TaleSummaryFragment } from '~/graphql/generated'

defineProps<{
   tale: TaleSummaryFragment
}>()
</script>
