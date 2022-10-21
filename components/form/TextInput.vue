<template>
   <input
      :autofocus="autofocus"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target!.value)"
   />
</template>

<script lang="ts" setup>
defineProps<{
   placeholder: string
   modelValue?: string
   autofocus?: boolean
}>()

defineEmits<{
   (e: 'update:modelValue', value: string): void
}>()
</script>

<style lang="scss" scoped>
input {
   @apply p-2 rounded bg-stone-500 outline-0 transition;
}

.dark-mode input {
   @apply bg-slate-800 ring-purple-500 ring-0;

   &:focus-visible {
      @apply ring-2;
   }
}
</style>