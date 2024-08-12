<template>
   <nav>
      <NuxtLink v-for="(link, i) of links" :key="i" :class="['tab', { active: link.to === active }]" :to="link.to">
         <component :is="link.icon" class="icon" />
         <span> {{ link.display }} </span>
      </NuxtLink>
      <section class="flex gap-4 ml-auto">
         <ThemeButton />
         <ProfileIcon v-if="account" :account="account" />
         <NuxtLink v-else to="/login" class="px-2"> Login </NuxtLink>
      </section>
   </nav>
</template>

<script lang="ts" setup>
import { BookOpenIcon, FlagIcon, MapIcon, MapPinIcon } from '@heroicons/vue/24/solid'

const route = useRoute()

const links = ref([
   { display: 'Map', to: '/map', icon: MapIcon },
   { display: 'Libary', to: '/library', icon: BookOpenIcon },
   { display: 'Places', to: '/places', icon: MapPinIcon },
   { display: 'Areas', to: '/areas', icon: FlagIcon },
])

const active = computed(() => [...links.value].reverse().find(it => route.path.startsWith(it.to))?.to)

const { account } = useSession()
</script>

<style lang="scss" scoped>
nav {
   @apply pr-2;
   @apply flex items-center;

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
