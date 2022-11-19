<template>
   <Teleport to="#action-buttons">
      <ActionButtonStyle @click="$emit('click')">
         <slot />
      </ActionButtonStyle>
   </Teleport>
</template>

<script lang="ts" setup>
defineEmits<{
   (e: 'click'): void
}>()
</script>
