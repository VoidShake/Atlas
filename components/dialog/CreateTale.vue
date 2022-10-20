<template>
   <DialogForm title="Write Lore" @submit="mutate">
      <ul class="location">
         <li v-for="location of initialLocations" :key="location.id">
            {{ location.name }}
         </li>
      </ul>
      <FormGroup label="Title">
         <FormTextInput v-model="title" placeholder="Title" />
      </FormGroup>
      <FormGroup label="Text">
         <MarkdownEditor id="editor" v-model="text" placeholder="Text" />
      </FormGroup>
   </DialogForm>
</template>

<script lang="ts" setup>
import { CreateTaleDocument, MapLocationFragment } from '~/graphql/generated'

const props = withDefaults(
   defineProps<{
      initialLocations: MapLocationFragment[]
   }>(),
   {
      initialLocations: () => [],
   },
)

const locations = ref(props.initialLocations)

const title = ref('')
const text = ref('')

const { mutate } = useMutation(CreateTaleDocument, () => ({
   variables: {
      input: { title: title.value, text: text.value },
      locations: locations.value.map(it => it.id),
   },
   refetchQueries: ['getLocation'],
}))
</script>

<style scoped>
#editor {
   min-height: 400px;
   min-width: 800px;
}
</style>
