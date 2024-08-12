<template>
   <footer>
      <span>
         <span>atlas@</span>
         <a v-if="buildLink" :href="buildLink">{{ buildName }}</a>
         <span v-else>{{ buildName }}</span>
      </span>
      <span class="icons">
         <a title="View Source Code" href="https://github.com/VoidShake/Atlas">
            <GitHubIcon />
         </a>
         <a title="Help Translate" href="https://weblate.macarena.ceo/projects/void-shake/atlas/">
            <WeblateIcon />
         </a>
      </span>
   </footer>
</template>

<script lang="ts" setup>
import { GitHubIcon, WeblateIcon } from 'vue3-simple-icons'

const { buildName, buildLink } = useAppConfig()
</script>

<style lang="scss" scoped>
footer {
   @apply py-4 px-5;
   @apply flex items-center;
   @apply grid grid-flow-col;

   @apply bg-solid-700;

   a {
      @apply text-accent-400;
   }

   .icons {
      @apply justify-self-end;
      @apply grid grid-flow-col gap-3;

      a {
         &:not(:hover) {
            @apply text-inherit transition-colors;
         }
      }
   }
}

.dark-mode footer {
   @apply bg-solid-dark-900;
}
</style>
