<template>
   <form @submit.prevent="save">
      <FormGroup label="Title">
         <StyledTextInput v-model="title" placeholder="Title" />
      </FormGroup>
      <StyledLocationSelection v-model="locations" />
      <FormGroup label="Text">
         <MarkdownEditor id="editor" v-model="text" placeholder="Text" />
      </FormGroup>

      <StyledButton> Save </StyledButton>
   </form>
</template>

<script lang="ts" setup>
import { CreateTaleDocument, CreateTaleMutation } from '~~/graphql/generated'

const emit = defineEmits<{
   (e: 'saved', data: CreateTaleMutation): void
}>()

const title = ref('')
const text = ref('')

const props = defineProps<{
   initialLocations?: number[]
}>()

const locations = useState<number[]>('linked-locations', () => props.initialLocations ?? [])

const { mutate } = useMutation(CreateTaleDocument, () => ({
   variables: {
      input: { title: title.value, text: text.value },
      locations: locations.value,
   },
   refetchQueries: ['getLocation'],
}))

async function save() {
   const response = await mutate()
   const data = response?.data
   if (data) emit('saved', data)
}
</script>

<style lang="scss" scoped>
form {
   min-width: 800px;

   #editor {
      min-height: 300px;
   }
}
</style>
