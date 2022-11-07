<template>
   <NuxtLayout name="confined">
      <section id="layout">
         <ProfileSidebar v-if="loggedIn" />
         <slot />
      </section>
   </NuxtLayout>
</template>

<script lang="ts" setup>
const { loggedIn } = useSession()
</script>

<style lang="scss" scoped>
#layout {
   @apply grid gap-16;
   grid-template-columns: auto 1fr;
}
</style>
