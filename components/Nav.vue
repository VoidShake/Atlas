<template>
   <nav>
      <NuxtLink v-for="(link, i) of links" :key="i" :class="['tab', { active: link.to === active }]" :to="link.to">
         {{ link.display }}
      </NuxtLink>
      <ProfileIcon v-if="loggedIn" />
   </nav>
</template>

<script lang="ts" setup>
const route = useActiveRoute()

const links = ref([
   { display: 'Map', to: '/' },
   { display: 'Libary', to: '/library' },
])

const active = computed(() => [...links.value].reverse().find(it => route.path.startsWith(it.to))?.to)

const linkCount = computed(() => links.value.length)

const { loggedIn } = useSession()
</script>

<style  lang="scss" scoped>
nav {
   @apply pr-2;
   @apply grid items-center;
   grid-template-columns: repeat(v-bind('linkCount'), auto) 1fr;

   .tab {
      @apply w-max py-4 px-6 transition-colors;
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