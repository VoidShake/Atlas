<template>
   <nav>
      <NuxtLink v-for="(link, i) of links" :key="i" :class="['tab', { active: link.to === active }]" :to="link.to">
         <component class="icon" :is="link.icon" />
         <span> {{ link.display }} </span>
      </NuxtLink>
      <ProfileIcon v-if="loggedIn" />
   </nav>
</template>

<script lang="ts" setup>
import { BookOpenIcon, MapIcon } from '@heroicons/vue/24/solid'

const route = useActiveRoute()

const links = ref([
   { display: 'Map', to: '/', icon: MapIcon },
   { display: 'Libary', to: '/library', icon: BookOpenIcon },
])

const active = computed(() => [...links.value].reverse().find(it => route.path.startsWith(it.to))?.to)

const linkCount = computed(() => links.value.length)

const { loggedIn } = useSession()
</script>

<style lang="scss" scoped>
nav {
   @apply pr-2;
   @apply grid items-center;
   grid-template-columns: repeat(v-bind('linkCount'), auto) 1fr;

   .tab {
      @apply w-max py-4 px-6 transition-colors;
      @apply grid grid-flow-col;

      .icon {
         @apply h-6 mr-2;
      }
   }
}

.dark-mode nav {
   @apply bg-slate-900;

   .tab {
      &:hover,
      &.active {
         @apply bg-slate-800;
      }
   }
}
</style>
