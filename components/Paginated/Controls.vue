<template>
   <div id="list-controls">
      <StyledButton v-if="connection.pageInfo.hasPreviousPage" id="prev" @click="$emit('previous')">
         <ArrowLeftIcon />
      </StyledButton>
      <PaginatedProgress
         v-if="connection.pageInfo.offset !== null && connection.totalCount"
         :total="connection.totalCount"
         :current="connection.pageInfo.offset + pageSize"
      />
      <StyledButton v-if="connection.pageInfo.hasNextPage" id="next" @click="$emit('next')">
         <ArrowRightIcon />
      </StyledButton>
   </div>
</template>

<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import type { Connection } from '~~/composables/pagination';

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
      / 3rem auto 3rem;

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
