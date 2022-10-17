<template>
   <DialogBase :title="title" @close="$emit('close')">
      <form @submit.prevent="submit">
         <slot />
         <FormButton>Submit</FormButton>
      </form>
   </DialogBase>
</template>


<script lang="ts" setup>
import { closeDialog } from '~/store/useDialog';

defineProps<{
   title: string
}>()

const emit = defineEmits<{
   (e: 'close'): void
   (e: 'submit'): void | Promise<void>
}>()

async function submit() {
   await emit('submit')
   closeDialog()
}
</script>

<style scoped>
button {
   @apply mt-3 px-8;
}
</style>