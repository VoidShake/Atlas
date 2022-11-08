<template>
   <div id="editor">
      <FormKit
         type="textarea"
         @input="update"
         :classes="{ input: 'min-h-64' }"
         :name="name"
         :label="label"
         :validation="validation"
      />
      <div id="preview">
         <label for="preview" class="mt-1 ml-1 font-xs text-sm font-bold"> Preview </label>
         <MarkdownPreview :value="debouncedValue" />
      </div>
   </div>
</template>

<script lang="ts" setup>
import debounce from 'debounce'

defineProps<{
   name: string
   validation?: string
   label: string
}>()

const debouncedValue = ref('')

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
