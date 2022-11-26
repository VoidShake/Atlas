<template>
   <DialogBase title="Write Lore">
      <FormCreateTale :initial-places="initialPlaces" @saved="closeDialog" />
   </DialogBase>
</template>

<script lang="ts" setup>
defineProps<{
   initialPlaces?: number[]
}>()
</script>

<style scoped>
#editor {
   min-height: 400px;
   min-width: 800px;
}
</style>
