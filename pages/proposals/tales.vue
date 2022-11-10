<template>
   <section>
      <StyledTitle> Proposed Tales </StyledTitle>
      <PaginatedTable v-if="result" :connection="result.connection">
         <template #head>
            <th>Title</th>
            <th>Original</th>
            <th>Submitter</th>
         </template>
         <template #body>
            <tr v-for="proposal in result.connection.nodes" :key="proposal.draft.id">
               <td>{{ proposal.draft.title }}</td>
               <td>{{ proposal.draft.original?.title }}</td>
               <td>{{ proposal.submitter.username ?? proposal.submitter.email }}</td>
            </tr>
         </template>
      </PaginatedTable>
   </section>
</template>

<script lang="ts" setup>
import { GetTaleProposalsDocument } from '~~/graphql/generated'

const limit = ref(24)
const { result } = usePagination(GetTaleProposalsDocument, limit)

definePageMeta({
   layout: 'confined',
})
</script>
