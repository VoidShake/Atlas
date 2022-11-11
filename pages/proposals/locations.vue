<template>
   <section>
      <StyledTitle> Proposed Locations </StyledTitle>
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
import { ApproveLocationDocument, GetLocationProposalsDocument, RefuseLocationDocument } from '~~/graphql/generated'

const limit = ref(24)
const { result } = usePagination(GetLocationProposalsDocument, limit)

const refetchQueries = ['getLocationProposals']
const { mutate: refuse } = useMutation(RefuseLocationDocument, { refetchQueries })
const { mutate: approve } = useMutation(ApproveLocationDocument, { refetchQueries })

definePageMeta({
   layout: 'confined',
})
</script>
