<template>
   <Teleport to="#action-buttons">
      <NuxtLink :to="to">
         <ActionButtonStyle>
            <slot />
         </ActionButtonStyle>
      </NuxtLink>
   </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
   to: string
}>()
</script>
