<template>
   <section>
      <Nav />
      <main>
         <section id="action-buttons" />
         <slot />
      </main>

      <Footer />
   </section>
</template>

<style scoped>
main {
   @apply p-5 relative;
   min-height: calc(100vh - theme(spacing.14) - theme(spacing.14));
}

#action-buttons {
   @apply grid gap-4;
   @apply absolute right-5 top-5;
}
</style>
