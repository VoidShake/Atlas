<template>
   <DialogBase title="Add Marker">
      <FormCreatePlace :initial="{ pos }" @saved="closeDialog" />
   </DialogBase>
</template>

<script lang="ts" setup>
import type { PosFragment } from '~/graphql/generated';

defineProps<{
   pos: PosFragment
}>()
</script>
