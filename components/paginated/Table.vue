<template>
   <table class="table">
      <thead>
         <tr>
            <slot name="head" />
         </tr>
      </thead>
      <tbody>
         <slot name="body" />
      </tbody>
   </table>
</template>

<script lang="ts" setup>
import type { Connection } from '~~/composables/pagination'

defineProps<{
   connection: Connection<unknown>
}>()

defineEmits<{
   (e: 'fetchMore'): void
}>()
</script>

<style lang="scss" scoped>
.table {
   @apply rounded w-full overflow-hidden;
   @apply border-separate border-spacing-x-2;

   &:deep(td) {
      @apply p-3 bg-solid-600;
   }

   &:deep(th) {
      @apply p-3 bg-solid-700;
   }
}
</style>
