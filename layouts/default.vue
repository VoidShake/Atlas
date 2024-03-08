<template>
   <section>
      <Nav />
      <main>
         <section id="action-buttons" />
         <slot />
      </main>
   </section>
</template>

<style scoped>
main {
   @apply p-5;
   height: calc(100vh - theme(spacing.14));
}

#action-buttons {
   @apply grid gap-4 mt-12;
   @apply absolute right-5 top-5;
}
</style>
