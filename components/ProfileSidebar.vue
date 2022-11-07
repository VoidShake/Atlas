<template>
   <StyledPanel class="sidebar">
      <NuxtLink to="/me"> Your Profile </NuxtLink>
      <NuxtLink to="/me/settings"> Settings </NuxtLink>
      <NuxtLink to="/me/drafts"> Your Drafts </NuxtLink>
   </StyledPanel>
</template>

<style lang="scss" scoped>
.sidebar {
   @apply min-w-64;
   height: max-content;

   a {
      @apply block p-2 text-center;
      &:hover {
         text-decoration: underline;
      }
   }
}
</style>