<template>
   <NuxtLayout name="default">
      <section id="container">
         <slot />
      </section>
   </NuxtLayout>
</template>

<style scoped>
#container {
   @apply mx-auto;
   max-width: 1000px;
}
</style>
