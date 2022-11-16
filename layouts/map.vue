<template>
   <NuxtLayout name="default">
      <div class="layout">
         <MapView />
         <slot />
      </div>
   </NuxtLayout>
</template>

<style lang="scss" scoped>
.layout {
   @apply grid gap-5 h-full;
   grid-template-columns: 1fr auto;

   #map-wrap {
      @apply rounded-lg overflow-hidden;
      height: 100%;
   }
}
</style>
