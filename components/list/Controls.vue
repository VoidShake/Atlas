<template>
   <div id="list-controls">
      <FormButton v-if="connection.pageInfo.hasPreviousPage" id="prev" @click="$emit('previous')">
         Previous
      </FormButton>
      <ListProgress
         v-if="connection.pageInfo.offset !== null && connection.totalCount"
         :total="connection.totalCount"
         :current="connection.pageInfo.offset + pageSize"
      />
      <FormButton v-if="connection.pageInfo.hasNextPage" id="next" @click="$emit('next')"> Next </FormButton>
   </div>
</template>

<script lang="ts" setup>
import type { Connection } from '~~/composables/pagination'

defineProps<{
   pageSize: number
   connection: Connection<unknown>
}>()

defineEmits<{
   (e: 'next'): void
   (e: 'previous'): void
}>()
</script>

<style lang="scss" scoped>
#list-controls {
   @apply grid gap-10 justify-center py-5 items-center;
   grid-template:
      'prev progress next'
      / 8rem auto 8rem;

   #meter {
      grid-area: progress;
   }

   button {
      &#prev {
         grid-area: prev;
      }

      &#next {
         grid-area: next;
      }
   }
}
</style>
