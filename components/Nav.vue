<template>
   <nav>
      <NuxtLink v-for="(link, i) of links" :key="i" :class="['tab', { active: link.to === active }]" :to="link.to">
         <component :is="link.icon" class="icon" />
         <span> {{ link.display }} </span>
      </NuxtLink>
      <section class="flex gap-4 justify-self-end">
         <ThemeButton />
         <ProfileIcon v-if="loggedIn" />
         <NuxtLink v-else to="/login" class="px-2"> Login </NuxtLink>
      </section>
   </nav>
</template>

<script lang="ts" setup>
import { BookOpenIcon, MapIcon, MapPinIcon } from '@heroicons/vue/24/solid'

const route = useRoute()

const links = ref([
   { display: 'Map', to: '/map', icon: MapIcon },
   { display: 'Libary', to: '/library', icon: BookOpenIcon },
   { display: 'Locations', to: '/locations', icon: MapPinIcon },
])

const active = computed(() => [...links.value].reverse().find(it => route.path.startsWith(it.to))?.to)

const linkCount = computed(() => links.value.length)

const { loggedIn } = useSession()
</script>

<style lang="scss" scoped>
nav {
   @apply pr-2;
   @apply grid items-center grid-flow-col;
   grid-template-columns: repeat(v-bind('linkCount'), auto) 1fr;

   @apply bg-solid-700;

   .tab {
      @apply w-max py-4 px-6 transition-colors;
      @apply grid grid-flow-col;

      .icon {
         @apply h-6 mr-2;
      }

      &:hover,
      &.active {
         @apply bg-solid-800;
      }
   }
}

.dark-mode nav {
   @apply bg-solid-dark-900;
}
</style>
