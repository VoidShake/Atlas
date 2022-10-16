<template>
   <div id="editor">
      <FormTextArea :placeholder="placeholder" :model-value="modelValue" @update:model-value="update" />
      <MarkdownPreview :value="debouncedValue" />
   </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash';

defineProps<{
   placeholder: string
   modelValue?: string
}>()

const emit = defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()

const debouncedValue = ref('')

const setRenderer = debounce((value: string) => {
   debouncedValue.value = value
}, 300)

function update(value: string) {
   setRenderer(value)
   emit('update:modelValue', value)
}
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