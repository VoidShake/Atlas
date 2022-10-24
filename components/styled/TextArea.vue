<template>
   <textarea :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target!.value)" />
</template>

<script lang="ts" setup>
defineProps<{
   placeholder: string
   modelValue?: string
}>()

defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
textarea {
   resize: none;
   @apply p-2 rounded bg-stone-500 outline-0 transition ring-0 border-2;

   &:focus-visible {
      @apply ring-2;
   }
}

.dark-mode textarea {
   @apply bg-slate-800 ring-purple-500 border-slate-700;
}
</style>
