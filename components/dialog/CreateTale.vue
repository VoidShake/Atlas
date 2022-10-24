<template>
   <DialogBase title="Write Lore">
      <FormCreateTale :initial-locations="initialLocations" @saved="closeDialog" />
   </DialogBase>
</template>

<script lang="ts" setup>
defineProps<{
   initialLocations?: number[]
}>()
</script>

<style scoped>
#editor {
   min-height: 400px;
   min-width: 800px;
}
</style>
