<template>
   <DialogForm title="Create Marker" class="w-96" with-submit @submit="mutate">
      <form>
         <p>
            <PosDisplay :x="x" :y="y" :z="z" />
         </p>
         <FormGroup label="Name">
            <StyledTextInput autofocus v-model="name" placeholder="Name" />
         </FormGroup>
      </form>
   </DialogForm>
</template>

<script lang="ts" setup>
import { CreateLocationDocument, Maybe } from '~/graphql/generated'

const pos = withDefaults(
   defineProps<{
      x: number
      y?: Maybe<number>
      z: number
   }>(),
   {
      y: undefined,
   },
)

const name = ref('')

const { mutate, error } = useMutation(CreateLocationDocument, () => ({
   variables: {
      input: { ...pos, name: name.value, world: 'overworld' },
   },
   refetchQueries: ['getLocation', 'getLocations'],
}))

watch(error, v => console.log(v))
</script>
