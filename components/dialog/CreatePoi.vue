<template>
   <DialogForm title="Create Marker" class="w-96" with-submit @submit="mutate">
      <form>
         <p>
            <PosDisplay :x="x" :y="y" :z="z" />
         </p>
         <FormGroup label="Name">
            <FormTextInput v-model="name" placeholder="Name" />
         </FormGroup>
      </form>
   </DialogForm>
</template>

<script lang="ts" setup>
import { CreatePoiDocument } from '~/graphql/generated';

const pos = withDefaults(defineProps<{
   x: number
   y?: number
   z: number
}>(), {
   y: undefined
})

const name = ref('')

const { mutate, error } = useMutation(CreatePoiDocument, () => ({
   variables: {
      input: { ...pos, name: name.value, world: 'overworld' },
   },
   refetchQueries: ['getPoi', 'getPois']
}))

watch(error, v => console.log(v))

</script>