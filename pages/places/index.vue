<template>
   <section>
      <StyledTitle> {{ $t('browse.places') }} </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.CreateLocation, Permission.ProposeLocation)" to="/places/create">
         <PencilIcon />
      </ActionLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="places" @next="next" @previous="previous">
         <NuxtLink v-for="place in result.connection.nodes" :key="place.id" :to="`/places/${place.slug}`">
            <LocationPreview :location="place" />
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
import { GetPlacesDocument, Permission, type LocationFilter } from '~/graphql/generated'

const { hasPermission } = useSession()

const filter = useState<LocationFilter>(() => ({}))

const limit = ref(24)

const { result, next, previous } = usePagination(GetPlacesDocument, limit, filter)
</script>
