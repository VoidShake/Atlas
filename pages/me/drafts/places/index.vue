<template>
   <section>
      <StyledTitle> {{ $t('browse.place_drafts') }} </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.DraftLocation)" to="/places/create?draft">
         <PencilIcon />
      </ActionLink>

      <PaginatedList
         v-if="result"
         :connection="result.connection"
         verb="place_drafts"
         @next="next"
         @previous="previous"
      >
         <NuxtLink v-for="place in result.connection.nodes" :key="place.id" :to="`/me/drafts/places/${place.id}`">
            <LocationPreview :location="place" />
         </NuxtLink>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { GetPlaceDraftsDocument, Permission } from '~~/graphql/generated'

const { hasPermission } = useSession()

const limit = ref(24)
const { result, next, previous } = usePagination(GetPlaceDraftsDocument, limit)
</script>

<style lang="scss" scoped></style>
