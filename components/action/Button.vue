<template>
   <!-- This ClientOnly can be removed once nuxt has support for other teleport targets in SSR: -->
   <!-- https://nuxt.com/docs/api/components/teleports -->
   <ClientOnly>
      <Teleport to="#action-buttons">
         <ActionButtonStyle @click="$emit('click')">
            <slot />
         </ActionButtonStyle>
      </Teleport>
   </ClientOnly>
</template>

<script lang="ts" setup>
defineEmits<{
   (e: 'click'): void
}>()
</script>
