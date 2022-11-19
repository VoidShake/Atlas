<template>
   <section>
      <StyledTitle> Proposed Tales </StyledTitle>
      <PaginatedTable v-if="result" :connection="result.connection">
         <template #head>
            <th>Title</th>
            <th>Original</th>
            <th>Submitter</th>
            <th>Created At</th>
            <th />
         </template>
         <template #body>
            <tr v-for="proposal in result.connection.nodes" :key="proposal.draft.id">
               <td>{{ proposal.draft.title }}</td>
               <td>{{ proposal.draft.original?.title }}</td>
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
import { ApproveTaleDocument, GetTaleProposalsDocument, RefuseTaleDocument } from '~~/graphql/generated'

const limit = ref(24)
const { result } = usePagination(GetTaleProposalsDocument, limit)

const refetchQueries = ['getTaleProposals']
const { mutate: refuse } = useMutation(RefuseTaleDocument, { refetchQueries })
const { mutate: approve } = useMutation(ApproveTaleDocument, { refetchQueries })

definePageMeta({
   layout: 'confined',
})
</script>
