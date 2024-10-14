<template>
   <div class="head" :style="{ backgroundImage: `url(https://mineskin.eu/avatar/${uuid}/32.png)` }" />
</template>

<script lang="ts" setup>
defineProps<{
   uuid: string
}>()
</script>

<style scoped>
.head {
   --size: 100%;
   height: var(--size);
   width: var(--size);

   background-color: black;
   background-size: calc(var(--size) * 8) calc(var(--size) * 8);
   background-position: calc(var(--size) * -1) calc(var(--size) * -1);
   image-rendering: pixelated;
}
</style>
