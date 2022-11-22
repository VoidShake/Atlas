<template>
   <section>
      <StyledTitle> Browse all Locations </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.CreateLocation, Permission.ProposeLocation)" to="/locations/create">
         <PencilIcon />
      </ActionLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="locations" @next="next" @previous="previous">
         <NuxtLink v-for="location in result.connection.nodes" :key="location.id" :to="`/locations/${location.slug}`">
            <LocationPreview :location="location" />
         </NuxtLink>

         <template #filter>
            <PaginatedFilter id="locations" v-model="filter">
               <FormKit label="Name" name="name" type="text" />
               <InputWorld name="world" />
               <InputAccount label="Author" name="author" mode="single" />
               <FormKit label="Created After" name="createdAfter" type="date" />
               <FormKit label="Created Before" name="createdBefore" type="date" />
            </PaginatedFilter>
         </template>
      </PaginatedList>
   </section>
</template>

<script lang="ts" setup>
import { PencilIcon } from '@heroicons/vue/24/solid'
import { GetLocationsDocument, Permission, LocationFilter } from '~/graphql/generated'

const { hasPermission } = useSession()

const filter = useState<LocationFilter>(() => ({}))

const limit = ref(24)

const { result, next, previous } = usePagination(GetLocationsDocument, limit, filter)
</script>
