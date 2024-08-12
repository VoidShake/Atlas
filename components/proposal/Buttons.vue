<template>
   <td class="buttons">
      <IconButton color="green-500" @click="$emit('approve')">
         <CheckIcon />
      </IconButton>
      <IconButton color="red-500" @click="$emit('refuse')">
         <TrashIcon />
      </IconButton>
   </td>
</template>

<script lang="ts" setup>
import { CheckIcon, TrashIcon } from '@heroicons/vue/24/solid'
import type { AbstractProposal } from '~~/graphql/generated'

defineProps<{
   draftId: AbstractProposal['draftId']
}>()

defineEmits<{
   (e: 'approve'): void
   (e: 'refuse'): void
}>()
</script>

<style lang="scss" scoped>
.buttons {
   @apply text-xl grid grid-flow-col gap-2;

   button {
      @apply py-1 rounded transition-colors;

      &:hover {
         @apply text-white;
      }
   }
}
</style>
