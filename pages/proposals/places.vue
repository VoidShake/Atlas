<template>
   <section>
      <StyledTitle> Proposed Places </StyledTitle>
      <PaginatedTable v-if="result" :connection="result.connection">
         <template #head>
            <th>Name</th>
            <th>Original</th>
            <th>Submitter</th>
            <th>Created At</th>
            <th />
         </template>
         <template #body>
            <tr v-for="proposal in result.connection.nodes" :key="proposal.draft.id">
               <td>{{ proposal.draft.name }}</td>
               <td>{{ proposal.draft.original?.name }}</td>
               <td><AccountsName v-bind="proposal.submitter" /></td>
               <td class="text-center">{{ new Date(proposal.timestamps.createdAt).toLocaleString() }}</td>
               <ProposalButtons
                  :draft-id="proposal.draft.id"
                  @approve="approve({ draft: proposal.draft.id })"
                  @refuse="refuse({ draft: proposal.draft.id })"
               />
            </tr>
         </template>
      </PaginatedTable>
   </section>
</template>

<script lang="ts" setup>
import { ApprovePlaceDocument, GetPlaceProposalsDocument, RefusePlaceDocument } from '~~/graphql/generated'

const limit = ref(24)
const { result } = usePagination(GetPlaceProposalsDocument, limit)

const refetchQueries = ['getPlaceProposals']
const { mutate: refuse } = useMutation(RefusePlaceDocument, { refetchQueries })
const { mutate: approve } = useMutation(ApprovePlaceDocument, { refetchQueries })

definePageMeta({
   layout: 'confined',
})
</script>
