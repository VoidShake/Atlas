<template>
   <NuxtLayout name="default">
      <section id="container">
         <section>
            <slot />
         </section>
      </section>
   </NuxtLayout>
</template>

<style scoped>
#container {
   @apply grid justify-center content-center min-h-full;
}
</style>
