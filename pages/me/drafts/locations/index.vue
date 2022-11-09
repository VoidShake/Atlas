<template>
   <section>
      <StyledTitle> Your Location Drafts </StyledTitle>

      <NuxtLink v-if="hasPermission(Permission.DraftLocation)" to="/locations/create?draft">
         <StyledActionButton>
            <PencilIcon />
         </StyledActionButton>
      </NuxtLink>

      <PaginatedList
         v-if="result"
         :connection="result.connection"
         verb="location drafts"
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
import { GetLocationDraftsDocument, Permission } from '~~/graphql/generated'
import { PencilIcon } from '@heroicons/vue/24/solid'

const { hasPermission } = useSession()

const limit = ref(24)
const { result, next, previous } = usePagination(GetLocationDraftsDocument, limit)
</script>

<style lang="scss" scoped>

</style>
