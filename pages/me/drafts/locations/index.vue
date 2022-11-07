<template>
   <section>
      <StyledTitle> Your Location Drafts </StyledTitle>

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
            <StyledPanel>
               <h3>{{ location.name }}</h3>
            </StyledPanel>
         </NuxtLink>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { GetLocationDraftsDocument } from '~~/graphql/generated'

const { hasPermission } = useSession()

const limit = ref(24)
const { result, next, previous } = usePagination(GetLocationDraftsDocument, limit)
</script>

<style lang="scss" scoped></style>
