<template>
   <client-only>
      <template v-for="(icon, mode) in themes">
         <button v-if="colorMode.value !== mode" :title="`${mode} mode`" @click="colorMode.preference = mode">
            <component :is="icon" class="h-5" />
         </button>
      </template>
   </client-only>
</template>

<script lang="ts" setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const colorMode = useColorMode()

const themes = {
   light: SunIcon,
   dark: MoonIcon,
}
</script>

<style scoped>
button:hover {
   @apply text-accent-500 transition-colors;
}
</style>