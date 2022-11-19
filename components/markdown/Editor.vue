<template>
   <div id="editor">
      <FormKit
         type="textarea"
         :classes="{ input: 'min-h-64' }"
         :value="value"
         :name="name"
         :label="label"
         :validation="validation"
         @input="update"
      />
      <div id="preview">
         <label for="preview" class="mt-1 ml-1 font-xs text-sm font-bold"> Preview </label>
         <MarkdownPreview :value="debouncedValue" />
      </div>
   </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es'

const props = defineProps<{
   name: string
   validation?: string
   value?: string
   label: string
}>()

const debouncedValue = useState('debounced', () => props.value ?? '')

const update = debounce((value: string) => {
   debouncedValue.value = value
}, 300)
</script>

<style lang="scss" scoped>
#editor {
   @apply grid gap-2;
   grid-template-columns: 1fr 1fr;

   & > #preview {
      @apply my-2 bg-solid-800 transition-colors;
   }
}
</style>
