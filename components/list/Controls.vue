<template>
   <div id="list-controls">
      <FormButton v-if="hasPrevious" id="prev" @click="$emit('previous')">Previous</FormButton>
      <ListProgress :total="total" :current="current" />
      <FormButton v-if="hasNext" id="next" @click="$emit('next')">Next</FormButton>
   </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
   total: number
   current: number
   pageSize: number
}>()

defineEmits<{
   (e: 'next'): void
   (e: 'previous'): void
}>()

const hasNext = computed(() => props.current < props.total)
const hasPrevious = computed(() => true)
</script>

<style lang="scss" scoped>
#list-controls {
   @apply grid gap-10 justify-center py-3 items-center;
   grid-template-areas: "prev progress next";

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