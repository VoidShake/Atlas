<template>
   <section>
      <p class="py-4 text-center">
         <em> Found {{ connection.totalCount }} total {{ verb }} </em>
      </p>
      <StyledList>
         <slot />
      </StyledList>
      <PaginatedControls
         :connection="connection"
         :page-size="connection.nodes.length"
         @next="$emit('next')"
         @previous="$emit('previous')"
      />
   </section>
</template>

<script lang="ts" setup>
import { Connection } from '~~/composables/pagination'

defineProps<{
   connection: Connection<unknown>
   verb: string
}>()

defineEmits<{
   (e: 'previous'): void
   (e: 'next'): void
}>()
</script>
