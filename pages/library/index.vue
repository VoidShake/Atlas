<template>
   <section>
      <StyledTitle> {{ $t('browse.tales') }} </StyledTitle>

      <ActionLink v-if="hasPermission(Permission.TellTale, Permission.ProposeTale)" to="/library/write">
         <PencilIcon />
      </ActionLink>

      <PaginatedList v-if="result" :connection="result.connection" verb="tales" @next="next" @previous="previous">
         <NuxtLink v-for="tale in result.connection.nodes" :key="tale.id" :to="`/library/${tale.id}`">
            <TalePreview :tale="tale" />
         </NuxtLink>

         <template #filter>
            <PaginatedFilter id="tales" v-model="filter">
               <FormKit label="Title" name="title" type="text" />
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
import { GetTalesDocument, Permission, TaleFilter } from '~/graphql/generated'

const { hasPermission } = useSession()

const filter = useState<TaleFilter>(() => ({}))

const limit = ref(24)

const { result, next, previous } = usePagination(GetTalesDocument, limit, filter)
</script>
