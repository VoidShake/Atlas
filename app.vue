<template>
   <NuxtLayout>
      <NuxtPage />
      <Dialog v-if="dialog" :x="dialog.x" :y="dialog.y" :options="dialog.options" />
   </NuxtLayout>
</template>

<script lang="ts" setup>
import useDialog from './store/useDialog';

useHead({
   titleTemplate: (s) => s ? `Atlas - ${s}` : 'Atlas'
})

const dialog = useDialog()
</script>