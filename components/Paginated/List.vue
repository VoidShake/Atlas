<template>
   <section>
      <p v-if="notNull(connection.totalCount)" class="py-4 text-center">
         <em> {{ $t('search.found', [$t(`enumeration.${verb}`, { n: connection.totalCount })]) }} </em>
      </p>
      <StyledList>
         <slot />
      </StyledList>
      <PaginatedControls
         v-if="connection.pageInfo.hasPreviousPage || connection.pageInfo.hasNextPage"
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
