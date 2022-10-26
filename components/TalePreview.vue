<template>
   <div id="panel">
      <h3>{{ tale.title }}</h3>
      <p>
         <em> {{ tale.locations.totalCount }} referenced locations </em>
      </p>
   </div>
</template>

<script lang="ts" setup>
import { SummaryFragment } from '~/graphql/generated'

defineProps<{
   tale: SummaryFragment
}>()
</script>

<style lang="scss" scoped>
#panel {
   @apply p-3 rounded bg-solid-600 transition-colors;

   &:hover {
      @apply bg-solid-700;
   }
}

.dark-mode #panel {
   @apply bg-solid-700;

   &:hover {
      @apply bg-solid-600;
   }
}
</style>
