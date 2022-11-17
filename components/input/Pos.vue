<template>
   <div class="grid grid-flow-col gap-4">
      <FormKit name="x" validation="required" label="X" type="number" step="1" :value="floored?.x" />
      <FormKit name="y" placeholder="optional" label="Y" type="number" step="1" :value="floored?.y" />
      <FormKit name="z" validation="required" label="Z" type="number" step="1" :value="floored?.z" />
   </div>
</template>

<script lang="ts" setup>
import { Point } from '~~/graphql/generated'

const props = defineProps<{
   initial?: Partial<Point>
}>()

const floored = computed(() => props.initial && roundPos(props.initial))
</script>
