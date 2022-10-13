<template>
   <div id="dialog" :style="{ translate: `${x}px ${y}px` }">
      <p v-if="options.title">{{ options.title }}</p>
      <ul v-if="options.buttons">
         <button v-for="button of options.buttons" @click="button.click">
            {{ button.text}}
         </button>
      </ul>
   </div>
</template>

<script lang="ts" setup>
import { DialogOptions } from '~/store/useDialog';

defineProps<{
   x: number
   y: number
   options: DialogOptions
}>()
</script>

<style scoped>
#dialog {
   @apply p-2 rounded bg-stone-800;
   position: absolute;
   z-index: 1000;
   top: 0;
   left: 0;
}

.dark-mode #dialog {
   @apply bg-slate-700;
}
</style>