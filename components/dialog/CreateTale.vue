<template>
   <DialogForm title="Write Lore" class="w-96" @submit="mutate">
      <ul class="pois">
         <li v-for="poi of pois" :key="poi.id">
            {{ poi.name }}
         </li>
      </ul>
      <FormGroup label="Title">
         <FormTextInput v-model="title" placeholder="Title" />
      </FormGroup>
      <FormGroup label="Text">
         <FormTextArea v-model="text" placeholder="Text" />
      </FormGroup>
   </DialogForm>
</template>

<script lang="ts" setup>
import { CreateTaleDocument, MapPoiFragment } from '~/graphql/generated';

const { initialPois } = withDefaults(defineProps<{
   initialPois: MapPoiFragment[]
}>(), {
   initialPois: () => []
})

const pois = ref(initialPois)

const title = ref('')
const text = ref('')

const { mutate } = useMutation(CreateTaleDocument, () => ({
   variables: {
      input: { title: title.value, text: text.value },
      pois: pois.value.map(it => it.id)
   },
   refetchQueries: ['getPoi']
}))

</script>