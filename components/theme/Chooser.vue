<template>
   <client-only>
      <div>
         <label for="color-chooser" class="mr-5"> Color Theme </label>
         <select id="color-chooser" v-model="
         $colorMode.preference
         ">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
         </select>
      </div>
   </client-only>
</template>

<style lang="scss" scoped>
#color-chooser {
   @apply p-2 rounded bg-solid-light-500 outline-0 transition ring-0 border-2;
   @apply bg-solid-800 ring-accent-500 border-solid-700;

   &:focus-visible {
      @apply ring-2;
   }
}
</style>