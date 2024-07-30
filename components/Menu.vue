<template>
   <div id="menu" :style="{ translate: `${x}px ${y}px` }">
      <p v-if="options.title" class="py-1 px-3 text-center">
         <em> {{ options.title }} </em>
      </p>
      <button v-for="(button, i) of buttons" :key="i" @click="click(button)">
         {{ button.text }}
      </button>
   </div>
</template>

<script lang="ts" setup>
import type { MenuButton, MenuOptions } from '~/composables/useMenu';

const menu = useMenu()

const { hasPermission } = useSession()

const props = defineProps<{
   x: number
   y: number
   options: MenuOptions
}>()

const buttons = computed(() => props.options.buttons?.filter(it => !it.permission || hasPermission(it.permission)))

async function click(button: MenuButton) {
   await button.click()
   menu.value = null
}
</script>

<style lang="scss" scoped>
#menu {
   @apply rounded-lg bg-solid-light-800 shadow-lg cursor-default;
   position: absolute;
   z-index: 1000;
   top: 0;
   left: 0;

   min-width: 200px;

   @apply bg-solid-700;

   button {
      @apply p-2 transition-colors w-full;
      @apply bg-solid-700;

      &:hover {
         @apply bg-solid-500;
      }

      &:first-child {
         @apply rounded-t-lg;
      }

      &:last-child {
         @apply rounded-b-lg;
      }
   }
}
</style>
