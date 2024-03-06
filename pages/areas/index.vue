<template>
   <section>
      <StyledTitle> {{ $t('browse.areas') }} </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.CreateLocation, Permission.ProposeLocation)" to="/areas/create">
         <PencilIcon />
      </ActionLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="areas" @next="next" @previous="previous">
         <NuxtLink v-for="area in result.connection.nodes" :key="area.id" :to="`/areas/${area.slug}`">
            <LocationPreview :location="area" />
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
import { PencilIcon } from '@heroicons/vue/24/solid';
import { GetAreasDocument, Permission, type LocationFilter } from '~/graphql/generated';

const { hasPermission } = useSession()

const filter = useState<LocationFilter>(() => ({}))

const limit = ref(24)

const { result, next, previous } = usePagination(GetAreasDocument, limit, filter)
</script>
