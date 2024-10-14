<template>
   <div class="head" :style="{ backgroundImage: `url(${texture})` }" />
</template>

<script lang="ts" setup>
const props = defineProps<{
   uuid: string
}>()

const texture = await useSkin(props.uuid)
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
