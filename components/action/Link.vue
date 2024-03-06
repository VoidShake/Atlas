<template>
   <!-- This ClientOnly can be removed once nuxt has support for other teleport targets in SSR: -->
   <!-- https://nuxt.com/docs/api/components/teleports -->
   <ClientOnly>
      <Teleport to="#action-buttons">
         <NuxtLink :to="to">
            <ActionButtonStyle>
               <slot />
            </ActionButtonStyle>
         </NuxtLink>
      </Teleport>
   </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{
   to: string
}>()
</script>
