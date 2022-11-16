<template>
   <section>
      <Nav />
      <main>
         <slot />
      </main>
   </section>
</template>

<style scoped>
main {
   @apply p-5 relative;
   height: calc(100vh - theme(spacing.14));
}
</style>
