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
   @apply p-5;
   height: calc(100vh - theme(spacing.20));
}
</style>
