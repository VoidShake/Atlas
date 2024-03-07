<template>
   <NuxtLayout name="default">
      <div class="layout">
         <MapInteractive />
         <slot />
      </div>
   </NuxtLayout>
</template>

<style lang="scss" scoped>
.layout {
   @apply grid gap-5 h-full;
   grid-template-columns: 1fr auto;

   #map-wrap {
      height: 100%;
   }
}
</style>
