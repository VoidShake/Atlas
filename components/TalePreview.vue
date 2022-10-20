<template>
   <div id="panel">
      <h3>{{ tale.title }}</h3>
      <p>
         <i>{{ tale.locations.totalCount }} referenced locations </i>
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
   @apply p-3 rounded bg-stone-900 transition-colors;

   &:hover {
      @apply bg-stone-700;
   }
}

.dark-mode #panel {
   @apply bg-slate-900;

   &:hover {
      @apply bg-slate-700;
   }
}
</style>
