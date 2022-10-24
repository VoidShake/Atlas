<template>
   <div id="editor">
      <StyledTextArea :placeholder="placeholder" :model-value="modelValue" @update:model-value="update" />
      <div id="preview">
         <h5 class="my-2 ml-4 opacity-75"><em>Preview </em></h5>
         <MarkdownPreview :value="debouncedValue" />
      </div>
   </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash'

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

   & > #preview {
      @apply bg-stone-500/50 rounded border-2;
   }
}

.dark-mode #editor {
   & > #preview {
      @apply bg-slate-800/50 border-slate-700;
   }
}
</style>
