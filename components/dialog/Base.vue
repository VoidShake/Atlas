<template>
   <Teleport to="body">
      <div id="dialog">
         <h2 class="text-center" v-if="title">{{ title }}</h2>
         <slot />
      </div>
   </Teleport>
</template>

<script lang="ts" setup>
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
      translate: -50% 100%;
   }

   to {
      translate: -50% -50%;
   }
}

#dialog {
   @apply px-8 py-6 rounded-lg shadow-xl;
   @apply bg-solid-700 shadow-[#0003];
   position: fixed;
   z-index: 1002;
   top: 50%;
   left: 50%;

   animation: bounce-in 0.25s cubic-bezier(0, 0, 0.4, 1.4) forwards;
}
</style>
