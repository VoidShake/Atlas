<template>
   <section>
      <Nav />
      <main class="p-5">
         <slot />
      </main>
   </section>
</template>

<style>
body {
   @apply bg-stone-200 text-black;
}

.dark-mode body {
   @apply bg-slate-800 text-white;
}
</style>