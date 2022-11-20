<template>
   <section>
      <StyledTitle> {{ $t('settings.title') }} </StyledTitle>
      <ThemeChooser />
      <LangChooser />
   </section>
</template>

<script lang="ts" setup>
definePageMeta({
   layout: 'profile',
})
</script>
