<template>
   <DialogBase title="Write Lore">
      <FormCreateTale :intial-locations="initialLocations" @saved="closeDialog" />
   </DialogBase>
</template>

<script lang="ts" setup>
import { MapLocationFragment } from '~~/graphql/generated'

defineProps<{
   initialLocations?: Pick<MapLocationFragment, 'id' | '__typename'>[]
}>()
</script>

<style scoped>
#editor {
   min-height: 400px;
   min-width: 800px;
}
</style>
