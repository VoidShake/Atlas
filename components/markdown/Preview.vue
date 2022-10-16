<template>
   <div>
      <h3>Preview</h3>
      <div id="preview" v-html="rendered" />
   </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked';

const props = defineProps<{
   value: string
}>()

const rendered = computed(() => marked(props.value, { sanitize: true }))
</script>

<style lang="scss" scoped>
#editor {
   @apply grid gap-2;
   grid-template-columns: 1fr 1fr;

   #preview {
      @apply p-2 text-start;
   }
}
</style>