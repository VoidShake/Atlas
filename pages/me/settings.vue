<template>
   <section>
      <StyledTitle> Settings </StyledTitle>
      <ThemeChooser />
      <LangChooser />
   </section>
</template>

<script lang="ts" setup>
definePageMeta({
   layout: 'profile',
})
</script>
