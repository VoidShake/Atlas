<template>
   <section>
      <StyledTitle> Browse the Libary </StyledTitle>

      <NuxtLink v-if="hasPermission(Permission.TellTale, Permission.ProposeTale)" to="/library/write">
         <StyledActionButton>
            <PencilIcon />
         </StyledActionButton>
      </NuxtLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="tales" @next="next" @previous="previous">
         <NuxtLink v-for="tale in result.connection.nodes" :key="tale.id" :to="`/library/${tale.id}`">
            <TalePreview :tale="tale" />
         </NuxtLink>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { GetTalesDocument, Permission } from '~/graphql/generated'

const { hasPermission } = useSession()

const limit = ref(24)

const { result, next, previous } = usePagination(GetTalesDocument, limit)
</script>
