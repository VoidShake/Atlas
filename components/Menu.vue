<template>
   <div id="menu" :style="{ translate: `${x}px ${y}px` }">
      <p v-if="options.title">{{ options.title }}</p>
      <ul v-if="options.buttons">
         <button v-for="button of options.buttons" @click="button.click">
            {{ button.text}}
         </button>
      </ul>
   </div>
</template>

<script lang="ts" setup>
import { MenuOptions } from '~/store/useMenu';

const { options } = defineProps<{
   x: number
   y: number
   options: MenuOptions
}>()
</script>

<style scoped>
#menu {
   @apply p-2 rounded bg-stone-800 shadow-lg;
   position: absolute;
   z-index: 1000;
   top: 0;
   left: 0;
}

.dark-mode #menu {
   @apply bg-slate-700;
}
</style>