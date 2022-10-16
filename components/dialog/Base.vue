<template>
   <div id="dialog">
      <H1 v-if="title">{{ title }}</H1>
      <slot />
   </div>
</template>

<script lang="ts" setup>
import { closeDialog, openDialog } from '~/store/useDialog';

defineProps<{
   title: string
}>()

const emit = defineEmits<{
   (e: 'close'): void
}>()

onMounted(() => openDialog(() => emit('close')))
onUnmounted(() => closeDialog())
</script>

<style scoped>
@keyframes bounce-in {
   from {
      translate: -50% 100%
   }

   to {
      translate: -50% -50%
   }
}

#dialog {
   @apply px-8 py-6 rounded-lg bg-stone-800 text-center shadow-xl;
   position: fixed;
   z-index: 1002;
   top: 50%;
   left: 50%;

   animation: bounce-in 0.25s cubic-bezier(0, 0, 0.4, 1.4) forwards;
}

.dark-mode #dialog {
   @apply bg-slate-700;
}
</style>