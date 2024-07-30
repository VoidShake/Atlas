<template>
   <Layout>
      <div class="layout">
         <MapInteractive />
         <slot />
      </div>
   </Layout>
</template>

<style scoped>
.layout {
   @apply grid gap-5;
   grid-template-columns: 1fr auto;
   height: calc(100vh - theme(spacing.14) - theme(spacing.14) - theme(spacing.10));

   #map-wrap {
      @apply h-full;
   }
}
</style>
