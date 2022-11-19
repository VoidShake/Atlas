<template>
   <span> {{ username ?? email }} </span>
</template>

<script lang="ts" setup>
defineProps<{
   username?: string
   email: string
}>()
</script>
