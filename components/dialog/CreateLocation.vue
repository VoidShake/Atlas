<template>
   <DialogBase title="Add Marker">
      <FormCreateLocation :initial="{ pos }" @saved="closeDialog" />
   </DialogBase>
</template>

<script lang="ts" setup>
import { PosFragment } from '~/graphql/generated'

defineProps<{
   pos: PosFragment
}>()
</script>
