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

h1 {
   @apply text-5xl pb-5 font-bold;
}

h2 {
   @apply text-4xl pb-4 font-bold;
}

h3 {
   @apply text-3xl pb-3;
}

h4 {
   @apply text-2xl pb-2;
}

h5 {
   @apply text-xl pb-1;
}

h6 {
   @apply text-base;
}
</style>