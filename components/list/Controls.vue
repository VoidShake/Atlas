<template>
   <div id="list-controls">
      <FormButton v-if="pageInfo.hasPreviousPage" id="prev" @click="$emit('previous')"> Previous </FormButton>
      <ListProgress v-if="pageInfo.offset !== null" :total="total" :current="pageInfo.offset + pageSize" />
      <FormButton v-if="pageInfo.hasNextPage" id="next" @click="$emit('next')"> Next </FormButton>
   </div>
</template>

<script lang="ts" setup>
import { PageInfo } from '~~/graphql/generated'

defineProps<{
   total: number
   pageSize: number
   pageInfo: Partial<PageInfo>
}>()

defineEmits<{
   (e: 'next'): void
   (e: 'previous'): void
}>()
</script>

<style lang="scss" scoped>
#list-controls {
   @apply grid gap-10 justify-center py-5 items-center;
   grid-template-areas: 'prev progress next';

   #meter {
      grid-area: progress;
   }

   #prev {
      grid-area: prev;
   }

   #next {
      grid-area: next;
   }
}
</style>
