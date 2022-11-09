<template>
   <StyledPanel>
      <h3>{{ tale.title }}</h3>
      <p>
         <em> {{ tale.locations.totalCount }} referenced locations </em>
      </p>
   </StyledPanel>
</template>

<script lang="ts" setup>
import { TaleSummaryFragment } from '~/graphql/generated'

defineProps<{
   tale: TaleSummaryFragment
}>()
</script>
