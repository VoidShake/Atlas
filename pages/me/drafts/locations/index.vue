<template>
   <section>
      <StyledTitle> Your Location Drafts </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.DraftLocation)" to="/locations/create?draft">
         <PencilIcon />
      </ActionLink>

      <PaginatedList
         v-if="result"
         :connection="result.connection"
         verb="location_drafts"
         @next="next"
         @previous="previous"
      >
         <NuxtLink
            v-for="location in result.connection.nodes"
            :key="location.id"
            :to="`/me/drafts/locations/${location.id}`"
         >
            <LocationPreview :location="location" />
         </NuxtLink>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { GetLocationDraftsDocument, Permission } from '~~/graphql/generated'

const { hasPermission } = useSession()

const limit = ref(24)
const { result, next, previous } = usePagination(GetLocationDraftsDocument, limit)
</script>

<style lang="scss" scoped>

</style>
