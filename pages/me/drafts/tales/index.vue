<template>
   <section>
      <StyledTitle> {{ $t('browse.tale_drafts') }} </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.DraftTale)" to="/library/write?draft">
         <PencilIcon />
      </ActionLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="tale_drafts" @next="next" @previous="previous">
         <NuxtLink v-for="tale in result.connection.nodes" :key="tale.id" :to="`/me/drafts/tales/${tale.id}`">
            <TalePreview :tale="tale" />
         </NuxtLink>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { GetTaleDraftsDocument, Permission } from '~~/graphql/generated'

const { hasPermission } = useSession()

const limit = ref(24)
const { result, next, previous } = usePagination(GetTaleDraftsDocument, limit)
</script>

<style lang="scss" scoped></style>
