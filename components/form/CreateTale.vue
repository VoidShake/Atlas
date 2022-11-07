<template>
   <form>
      <FormGroup label="Title">
         <StyledTextInput required v-model="title" placeholder="Title" />
      </FormGroup>
      <StyledLocationSelection v-model="locations" />
      <FormGroup label="Text">
         <MarkdownEditor id="editor" v-model="text" placeholder="Text" />
      </FormGroup>

      <StyledButton :disabled="!valid" v-if="!onlyDraft" @click.prevent="save"> Save </StyledButton>
      <StyledButton :disabled="!valid" @click.prevent="draft"> Save as Draft </StyledButton>
   </form>
</template>

<script lang="ts" setup>
import { CreateTaleDocument, CreateTaleDraftDocument, CreateTaleMutation, Permission } from '~~/graphql/generated'

const { hasPermission } = useSession()
const { query } = useActiveRoute()

const onlyDraft = computed(() => {
   if ('draft' in query) return true
   return !hasPermission(Permission.TellTale)
})

const emit = defineEmits<{
   (e: 'saved', data: CreateTaleMutation, draft: boolean): void
}>()

const title = ref('')
const text = ref('')
const valid = computed(() => !!title.value?.length)

const props = defineProps<{
   initialLocations?: number[]
}>()

const locations = useState<number[]>('linked-locations', () => props.initialLocations ?? [])

const options = computed(() => ({
   variables: {
      input: { title: title.value, text: text.value },
      locations: locations.value,
   },
   refetchQueries: ['getLocation'],
}))

const { mutate: createTale } = useMutation(CreateTaleDocument, () => options.value)
const { mutate: createTaleDraft } = useMutation(CreateTaleDraftDocument, () => options.value)

async function save() {
   const response = await createTale()
   const data = response?.data
   if (data) emit('saved', data, false)
}

async function draft() {
   const response = await createTaleDraft()
   const data = response?.data
   if (data) emit('saved', data, true)
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
